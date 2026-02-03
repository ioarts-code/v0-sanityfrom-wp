"use client"

import Link from "next/link"
import { useState, useCallback } from "react"

interface Product {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string[] | string
  imageUrl?: string
}

interface ProductsGridProps {
  products: Product[]
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("deviant-vectors")

  const handleFilterChange = useCallback((filter: string) => {
    console.log("[v0] Filter changed to:", filter)
    setActiveFilter(filter)
  }, [])

  const normalizeForComparison = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, "-")
  }

  const getImageUrl = (product: Product) => {
    return product.imageUrl || "/gaming-controller.png"
  }

  const normalizeCategory = (cat: string[] | string) => {
    const catStr = Array.isArray(cat) ? cat[0] : cat
    if (!catStr) return "PRODUCT"
    return catStr
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .toUpperCase()
  }

  const filteredProducts =
    activeFilter === "ALL"
      ? products
      : products.filter((product) => {
          const category = Array.isArray(product.category) ? product.category[0] : product.category
          const normalizedCategory = normalizeForComparison(category)
          const matches = normalizedCategory === activeFilter
          return matches
        })

  const FilterButton = ({ filter, label }: { filter: string; label: string }) => (
    <button
      type="button"
      onClick={() => handleFilterChange(filter)}
      className={`flex min-h-[44px] sm:h-[27px] items-center justify-center px-[12px] sm:px-[15px] py-[8px] sm:py-[3px] whitespace-nowrap cursor-pointer select-none touch-manipulation active:scale-95 bg-transparent border-b-2 transition-colors duration-200 ${activeFilter === filter ? "border-b-white" : "border-b-transparent hover:border-b-white"}`}
    >
      <span
        className={`
          font-poppins text-[12px] sm:text-[14px] font-semibold uppercase 
          leading-[21px] tracking-[0.2em] sm:tracking-[0.3em] 
          pointer-events-none transition-transform duration-200
          text-white hover:scale-110
        `}
      >
        {label}
      </span>
    </button>
  )

  return (
    <>
      <div className="z-10 flex w-full max-w-[600px] mx-auto flex-row flex-wrap items-center justify-center gap-2 sm:gap-[5px] px-2 sm:px-0">
        <FilterButton filter="ALL" label="ALL" />
        <FilterButton filter="deviant-vectors" label="DEVIANT VECTORS" />
        <FilterButton filter="etsy-products" label="ETSY PRODUCTS" />
      </div>

      <section className="relative z-10 mt-[25px] grid w-full max-w-[1400px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-[21px] gap-y-8 sm:gap-y-10 lg:gap-y-[40px] py-8">
        {filteredProducts.map((product) => (
          <Link key={product._id} href={`/products/${product.slug.current}`} className="group">
            <article className="flex flex-col items-center w-full max-w-[350px] mx-auto">
              <div className="relative flex aspect-square w-full flex-col items-start overflow-hidden bg-transparent">
                <img
                  src={getImageUrl(product) || "/placeholder.svg"}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="flex w-full flex-col items-center gap-1 pt-0">
                <div className="flex h-auto flex-row items-center justify-center">
                  <span className="font-poppins text-[14px] sm:text-[16px] lg:text-[19px] font-extrabold lowercase leading-[24px] sm:leading-[28px] lg:leading-[34px] tracking-[3px] sm:tracking-[4.2px] text-primary-foreground group-hover:text-white transition-colors">
                    {normalizeCategory(product.category)}
                  </span>
                </div>
                <div className="flex w-full flex-col items-center px-2">
                  <h2 className="font-poppins text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[32px] sm:leading-[40px] lg:leading-[52px] text-white text-center transition-colors">
                    {product.title}
                  </h2>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </>
  )
}
