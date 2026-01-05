import Link from "next/link"
import { getFeaturedProducts } from "@/lib/sanity-queries"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default async function ProductShowcase() {
  const featuredProducts = await getFeaturedProducts()

  console.log("[v0] Fetched products from CMS:", featuredProducts.length)

  const normalizeCategory = (cat: string[] | string) => {
    const catStr = Array.isArray(cat) ? cat[0] : cat
    if (!catStr) return ""
    // Convert "etsy-products" to "Etsy Products" and "deviant-vectors" to "Deviant Vectors"
    return catStr
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const etsyProducts = featuredProducts.filter((p) => normalizeCategory(p.category).toLowerCase().includes("etsy"))
  const deviantProducts = featuredProducts.filter((p) =>
    normalizeCategory(p.category).toLowerCase().includes("deviant"),
  )

  const featuredProduct = deviantProducts[0]

  const zeldaProduct =
    etsyProducts.find((p) => p.title.toLowerCase().includes("legend") && p.title.toLowerCase().includes("zelda")) ||
    etsyProducts[0]

  const aviciiProduct = deviantProducts.find((p) => p.title.toLowerCase().includes("avicii")) || deviantProducts[1]

  const bottomProducts = deviantProducts.slice(0, 3)

  const getImageUrl = (product: any) => {
    // Priority 1: Use imageUrl directly from Sanity (it's already a full CDN URL string)
    return product.imageUrl || "/gaming-controller.png"
  }

  if (!featuredProduct || !zeldaProduct || !aviciiProduct) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading products from CMS...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader activePage="home" />

      {/* Main content */}
      <main className="flex min-h-screen flex-col items-start bg-primary p-0 sm:p-2.5 sm:py-0">
        <div className="flex w-full max-w-[1920px] flex-col">
          {/* Featured product - responsive height */}
          <Link
            href={`/products/${featuredProduct.slug.current}`}
            className="relative mb-2 sm:mb-5 flex h-[300px] sm:h-[400px] lg:h-[583px] w-full flex-col items-start justify-end bg-gradient-to-br from-secondary to-accent p-2 sm:p-2.5"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-foreground"
              style={{
                backgroundImage: `url(${getImageUrl(featuredProduct)})`,
                backgroundPosition: "center 60%",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="relative z-10 flex h-auto w-full max-w-[300px] flex-col items-start justify-start px-2 sm:px-2.5 py-1 sm:py-[7px]">
              <div className="flex w-full flex-col items-start">
                <span className="mb-[-2px] sm:mb-[-4px] flex items-center font-poppins text-[11px] sm:text-[13px] font-bold uppercase leading-[16px] sm:leading-[19px] tracking-[-1.4px] text-white">
                  {normalizeCategory(featuredProduct.category)}
                </span>
                <span className="flex items-center py-1 font-poppins text-[9px] sm:text-[10px] font-medium leading-[6px] sm:leading-[7px] tracking-[1.1px] text-white">
                  {featuredProduct.title}
                </span>
              </div>
            </div>
            <div className="relative z-10 flex h-[56px] w-full flex-col items-start overflow-hidden bg-[#3B3B3B] p-2.5 mt-2 mb-9">
              <div className="flex h-[36px] w-full flex-col items-start justify-center">
                <div className="relative h-[36px] w-full overflow-hidden">
                  <div className="absolute left-0 top-1/2 flex -translate-y-1/2 animate-scroll flex-row items-center gap-8 whitespace-nowrap">
                    <div className="flex flex-row items-center gap-8">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span
                          key={i}
                          className="font-poppins text-[14px] font-semibold uppercase leading-[4px] tracking-[3.6px] text-[#CECECE]"
                        >
                          I'm very happy with the product and the seller. The quality is excellent, they fit perfectly,
                          and they feel durable. The product arrived well-packaged and protected, which I really
                          appreciate. Overall, a great purchase that I definitely recommend.
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom products grid responsive - stacks on mobile, 2-col on tablet, 3-col on desktop */}
        <div className="flex w-full max-w-[1920px] flex-col lg:flex-row items-start gap-2 sm:gap-5 self-stretch pb-10 sm:pb-[70px] pt-2 px-2 sm:pl-0 sm:pr-0 sm:pt-0">
          {/* Left tall product */}
          <Link
            href={`/products/${aviciiProduct.slug.current}`}
            className="relative flex h-[400px] sm:h-[600px] lg:h-[1020px] w-full lg:w-[940.11px] flex-col items-start justify-end bg-gradient-to-br from-secondary to-accent p-2 sm:p-2.5"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-[rgba(206,206,206,1)]"
              style={{
                backgroundImage: `url(${getImageUrl(aviciiProduct)})`,
              }}
            />
            <div className="relative z-10 flex h-auto w-full max-w-[300px] flex-col items-start justify-start px-2 sm:px-2.5 py-1 sm:py-[7px]">
              <div className="flex w-full flex-col items-start">
                <span className="mb-[-2px] sm:mb-[-4px] flex items-center font-poppins text-[11px] sm:text-[13px] font-bold uppercase leading-[16px] sm:leading-[19px] tracking-[-1.4px] text-foreground">
                  {normalizeCategory(aviciiProduct.category)}
                </span>
                <span className="flex items-center py-1 font-poppins text-[9px] sm:text-[10px] font-medium leading-[6px] sm:leading-[7px] tracking-[1.1px] text-foreground">
                  {aviciiProduct.title}
                </span>
              </div>
            </div>
          </Link>

          {/* Right column with two products */}
          <div className="flex w-full lg:w-[939.89px] flex-col items-start gap-2 sm:gap-5 self-stretch">
            {/* Top right product */}
            <Link
              href={`/products/${zeldaProduct.slug.current}`}
              className="relative flex h-[300px] sm:h-[400px] lg:min-h-[500px] w-full flex-col items-start justify-end self-stretch bg-gradient-to-br from-secondary to-accent p-2 sm:pb-2.5 sm:pl-2.5 sm:pr-2.5 sm:pt-[447px]"
            >
              <div
                className="absolute inset-0 bg-cover lg:bg-[length:85%_auto] bg-center bg-[rgba(206,206,206,1)]"
                style={{
                  backgroundImage: `url(${getImageUrl(zeldaProduct)})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="relative z-10 flex h-auto w-full max-w-[300px] flex-col items-start justify-start px-2 sm:px-2.5 py-1 sm:py-[7px]">
                <div className="flex w-full flex-col items-start">
                  <span className="mb-[-2px] sm:mb-[-4px] flex items-center font-poppins text-[11px] sm:text-[13px] font-bold uppercase leading-[16px] sm:leading-[19px] tracking-[-1.4px] text-foreground">
                    {normalizeCategory(zeldaProduct.category)}
                  </span>
                  <span className="flex items-center py-1 font-poppins text-[9px] sm:text-[10px] font-medium leading-[6px] sm:leading-[7px] tracking-[1.1px] text-foreground">
                    {zeldaProduct.title}
                  </span>
                </div>
              </div>
            </Link>

            {/* Bottom right product */}
            <Link
              href={`/products/${bottomProducts[2].slug.current}`}
              className="relative flex h-[300px] sm:h-[400px] lg:min-h-[500px] w-full flex-col items-start justify-end self-stretch bg-gradient-to-br from-secondary to-accent p-2 sm:pb-2.5 sm:pl-2.5 sm:pr-2.5 sm:pt-[447px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-[rgba(206,206,206,1)]"
                style={{
                  backgroundImage: `url(${getImageUrl(bottomProducts[2])})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="relative z-10 flex h-auto w-full max-w-[300px] flex-col items-start justify-center px-2 sm:px-2.5 py-1 sm:py-[7px]">
                <div className="flex w-full flex-col items-start">
                  <span className="mb-[-2px] sm:mb-[-4px] flex items-center font-poppins text-[11px] sm:text-[13px] font-bold uppercase leading-[16px] sm:leading-[19px] tracking-[-1.4px] text-foreground">
                    {normalizeCategory(bottomProducts[2].category)}
                  </span>
                  <span className="flex items-center py-1 font-poppins text-[9px] sm:text-[10px] font-medium leading-[6px] sm:leading-[7px] tracking-[1.1px] text-foreground">
                    {bottomProducts[2].title}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
