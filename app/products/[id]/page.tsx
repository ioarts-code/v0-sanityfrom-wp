import { getProductBySlug, getAllProducts } from "@/lib/sanity-queries"
import { notFound } from "next/navigation"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export async function generateStaticParams() {
  const products = await getAllProducts()
  return products.map((product) => ({
    id: product.slug.current,
  }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProductBySlug(id)

  if (!product) {
    notFound()
  }

  const getProductImageUrl = (product: any) => {
    return product.imageUrl || "/gaming-product.png"
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader activePage="products" />

      <main className="flex flex-1 flex-col items-center bg-[#c3c3c3] px-0 py-0">
        <div className="flex h-auto w-full max-w-[1920px] flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-[50px] px-4 sm:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-[80px]">
          {/* Product Image */}
          <div className="flex flex-col items-center justify-center w-full lg:w-auto">
            <div className="flex w-full max-w-[467.19px] aspect-square flex-col items-start">
              <div className="relative flex w-full aspect-square flex-row items-start justify-center bg-transparent">
                <div className="relative flex w-full aspect-square flex-col items-start">
                  <img
                    src={getProductImageUrl(product) || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-1 w-full max-w-[800px] flex-col items-start justify-center gap-6 sm:gap-[30px]">
            <div className="flex w-full flex-col items-start gap-4 sm:gap-[20px]">
              <h1 className="font-poppins text-[32px] sm:text-[50px] lg:text-[81px] font-normal leading-[32px] sm:leading-[50px] lg:leading-[78px] tracking-[5px] sm:tracking-[8px] lg:tracking-[10px] text-foreground uppercase">
                {product.title}
              </h1>

              {product.content && (
                <p className="font-poppins text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[24px] text-foreground">
                  {product.content}
                </p>
              )}
            </div>

            <div className="flex w-full flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="https://www.deviantart.com/ioartseu/gallery/all"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-foreground hover:border-[#FFFFFF] bg-transparent flex items-center justify-center px-4 sm:px-6 py-2.5 w-full sm:w-auto transition-colors rounded-none group touch-manipulation"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-foreground group-hover:fill-background group-hover:animate-pulse transition-colors"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 8.177-.23.43V24h4.367l.436-.44 2.058-3.925.646-.436h7.349v-5.993h-4.04l-.36-.436 4.175-8.177z" />
                  </svg>
                  <span className="font-poppins text-foreground group-hover:text-background text-center tracking-[4px] sm:tracking-[5px] text-xs sm:text-sm uppercase transition-colors font-semibold">
                    Vector Store
                  </span>
                </div>
              </a>

              <a
                href="https://www.etsy.com/shop/ioartseu"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[3px] border-foreground hover:border-[#FFFFFF] bg-transparent flex items-center justify-center px-4 sm:px-6 py-2.5 w-full sm:w-auto transition-colors rounded-none group touch-manipulation"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center text-foreground group-hover:text-background group-hover:animate-pulse transition-colors font-poppins text-xl sm:text-2xl md:text-3xl font-black">
                    E
                  </span>
                  <span className="font-poppins text-foreground group-hover:text-background text-center tracking-[4px] sm:tracking-[5px] text-xs sm:text-sm uppercase transition-colors font-semibold">
                    Etsy Store
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
