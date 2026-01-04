"use client"

import Link from "next/link"
import { useState } from "react"

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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [activeFilter, setActiveFilter] = useState<string>("ALL")

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)

    if (filter === "ALL") {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter((product) => {
        const category = Array.isArray(product.category) ? product.category[0] : product.category
        return category === filter
      })
      setFilteredProducts(filtered)
    }
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

  return (
    <>
      <div className="z-10 flex w-full max-w-[600px] mx-auto flex-row flex-wrap items-center justify-center gap-2 sm:gap-[5px] px-2 sm:px-0">
        <button
          onClick={() => handleFilterChange("ALL")}
          className={`flex h-[27px] items-center justify-center rounded-[3px] px-[10px] sm:px-[15px] py-[3px] whitespace-nowrap transition-colors ${
            activeFilter === "ALL" ? "bg-muted-foreground" : "bg-primary"
          }`}
        >
          <span
            className={`font-roboto text-[11px] sm:text-[14px] font-semibold uppercase leading-[21px] tracking-[0.2em] sm:tracking-[0.3em] ${
              activeFilter === "ALL" ? "text-primary-foreground" : "text-muted"
            }`}
          >
            ALL
          </span>
        </button>
        <button
          onClick={() => handleFilterChange("deviant-vectors")}
          className={`flex h-[27px] items-center justify-center rounded-[3px] px-[10px] sm:px-[15px] py-[3px] whitespace-nowrap transition-colors ${
            activeFilter === "deviant-vectors" ? "bg-muted-foreground" : "bg-primary"
          }`}
        >
          <span
            className={`font-roboto text-[11px] sm:text-[14px] font-semibold uppercase leading-[21px] tracking-[0.2em] sm:tracking-[0.3em] ${
              activeFilter === "deviant-vectors" ? "text-primary-foreground" : "text-muted"
            }`}
          >
            DEVIANT VECTORS
          </span>
        </button>
        <button
          onClick={() => handleFilterChange("etsy-products")}
          className={`flex h-[27px] items-center justify-center rounded-[3px] px-[10px] sm:px-[15px] py-[3px] whitespace-nowrap transition-colors ${
            activeFilter === "etsy-products" ? "bg-muted-foreground" : "bg-primary"
          }`}
        >
          <span
            className={`font-roboto text-[11px] sm:text-[14px] font-semibold uppercase leading-[21px] tracking-[0.2em] sm:tracking-[0.3em] ${
              activeFilter === "etsy-products" ? "text-primary-foreground" : "text-muted"
            }`}
          >
            ETSY PRODUCTS
          </span>
        </button>
      </div>

      <section className="relative z-10 mt-[25px] grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-[21px] gap-y-8 sm:gap-y-10 lg:gap-y-[40px]">
        {filteredProducts.map((product) => (
          <Link key={product._id} href={`/products/${product.slug.current}`}>
            <article className="flex flex-col items-center w-full">
              <div className="relative flex aspect-square w-full flex-col items-start overflow-hidden bg-transparent">
                <img
                  src={getImageUrl(product) || "/placeholder.svg"}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-primary/25 opacity-0 transition-opacity hover:opacity-100" />
              </div>
              <div className="flex w-full flex-col items-center pt-[15px] gap-1">
                <div className="flex h-auto flex-row items-center justify-center">
                  <span className="font-roboto text-[14px] sm:text-[16px] lg:text-[19px] font-extrabold uppercase leading-[24px] sm:leading-[28px] lg:leading-[34px] tracking-[3px] sm:tracking-[4.2px] text-primary-foreground">
                    {normalizeCategory(product.category)}
                  </span>
                </div>
                <div className="flex w-full flex-col items-center px-2">
                  <h2 className="font-poppins text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[32px] sm:leading-[40px] lg:leading-[52px] text-foreground text-center">
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
