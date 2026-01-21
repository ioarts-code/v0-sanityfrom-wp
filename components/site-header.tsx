export default function SiteHeader({ activePage }: { activePage: "home" | "products" | "contact" }) {
  return (
    <header className="relative flex h-auto min-h-[80px] lg:h-[100.5px] w-full max-w-[1920px] flex-col items-center bg-primary mb-0">
      <div className="hidden lg:flex h-[40px] flex-row items-center justify-center pt-0">
        <span className="font-roboto text-[12px] font-black uppercase leading-[12px] tracking-[4.8px] px-1.5 py-0.5 pl-10 pb-1 pt-1 border-stone-500 border-r-0 pr-10 text-orange-50 bg-transparent">
          Get in touch
        </span>
      </div>

      <div className="flex h-auto lg:h-[60.5px] w-full flex-col lg:flex-row items-center justify-center lg:justify-between border-y border-primary-foreground px-4 lg:px-[40px] py-4 lg:py-0">
        <div className="flex h-[40px] lg:h-[55px] flex-col items-center justify-center mb-3 lg:mb-0 bg-transparent">
          <span className="font-roboto text-[28px] lg:text-[40px] font-semibold uppercase leading-[28px] lg:leading-[40px] text-muted">
            IOARTS
          </span>
        </div>

        <nav className="flex flex-row items-center gap-[15px] lg:gap-[20px]">
          <a
            href="/"
            className="flex flex-col items-center gap-[2px] px-2 lg:px-[7px] py-2 lg:py-[15px] hover:text-[#FF42A4] transition-colors"
          >
            <span className="font-poppins text-[18px] lg:text-[25px] font-semibold uppercase leading-[18px] lg:leading-[26px] text-muted">
              HOME
            </span>
            <div className={`h-[2px] w-full bg-muted ${activePage === "home" ? "" : "opacity-0"}`} />
          </a>
          <a
            href="/products"
            className="flex flex-col items-center gap-[2px] px-2 lg:px-[7px] py-2 lg:py-[15px] hover:text-[#FF42A4] transition-colors"
          >
            <span className="font-poppins text-[18px] lg:text-[25px] font-semibold uppercase leading-[18px] lg:leading-[26px] text-muted">
              PRODUCTS
            </span>
            <div className={`h-[2px] w-full bg-muted ${activePage === "products" ? "" : "opacity-0"}`} />
          </a>
          <a
            href="/contact"
            className="flex flex-col items-center gap-[2px] px-2 lg:px-[7px] py-2 lg:py-[15px] hover:text-[#FF42A4] transition-colors"
          >
            <span className="font-poppins text-[18px] lg:text-[25px] font-semibold uppercase leading-[18px] lg:leading-[26px] text-muted">
              CONTACT
            </span>
            <div className={`h-[2px] w-full bg-muted ${activePage === "contact" ? "" : "opacity-0"}`} />
          </a>
        </nav>
      </div>
    </header>
  )
}
