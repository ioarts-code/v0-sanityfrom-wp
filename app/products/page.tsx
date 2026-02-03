"use client"
import { getAllProducts } from "@/lib/sanity-queries"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ProductsGrid from "@/components/products-grid"

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader activePage="products" />

      <main className="flex flex-1 min-h-screen flex-col items-center justify-start px-4 sm:px-8 md:px-16 py-0 bg-[rgba(206,206,206,1)] mt-0 lg:px-36">
        <div className="relative flex w-full flex-col items-start gap-0 pt-[7.5rem] pb-[15rem] text-foreground text-background">
          {/* Top decorative border - hidden on mobile, adjusted to not overlap header */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 h-[101px] w-screen flex-col items-start">
            <div className="h-full w-full bg-primary" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }} />
          </div>

          {/* Bottom decorative border - hidden on mobile */}
          <div className="hidden lg:flex absolute -bottom-px left-1/2 -translate-x-1/2 h-[101px] w-screen flex-col items-start rotate-180">
            <div className="h-full w-full bg-primary" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }} />
          </div>

          <ProductsGrid products={products} />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
