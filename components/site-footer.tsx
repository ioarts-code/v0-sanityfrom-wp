export default function SiteFooter() {
  return (
    <footer className="relative w-full max-w-[1920px] bg-primary border border-foreground">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-4 sm:px-8 lg:px-[40px] py-8 lg:py-[57px] gap-8 lg:gap-[60px]">
        {/* Left section - Brand */}
        <div className="flex flex-col gap-6 lg:gap-[30px] w-full lg:w-auto lg:max-w-[893px] items-start">
          {/* Brand name */}
          <div className="flex flex-col items-center pb-2.5 lg:pb-[10px]">
            <div className="flex flex-col items-center py-2.5 px-9 bg-orange-300">
              <h2 className="font-roboto text-[32px] sm:text-[40px] lg:text-[45px] leading-[32px] sm:leading-[40px] lg:leading-[45px] text-center uppercase tracking-wider font-normal text-foreground">
                Ioarts
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center w-full max-w-[810px]">
            <p className="font-poppins text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-[24px] sm:leading-[30px] lg:leading-[36px] text-muted text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Right section - Links and additional description */}
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-[20px] w-full lg:w-auto lg:max-w-[893px] lg:border-l lg:border-white lg:pl-[40px]">
          <div className="flex flex-col sm:flex-row items-start justify-start gap-6 sm:gap-8 lg:gap-[40px] w-full">
            {/* Contact column */}
            <div className="flex flex-col gap-4 lg:gap-[13px] w-full sm:w-auto items-start">
              <h3 className="font-roboto text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold leading-[28px] sm:leading-[32px] lg:leading-[37px] uppercase text-muted">
                Contact
              </h3>
              <div className="flex flex-col items-start gap-3.5">
                <p className="font-roboto text-[16px] sm:text-[18px] lg:text-[20px] leading-[11px] font-bold text-muted-foreground">
                  +46702312173
                </p>
                <a
                  href="mailto:contact@ioarts.se"
                  className="font-roboto text-[16px] sm:text-[18px] lg:text-[20px] leading-[11px] hover:text-[#FF42A4] transition-colors font-bold text-muted-foreground"
                >
                  contact@ioarts.se
                </a>
              </div>
            </div>

            {/* Highlight column */}
            <div className="flex flex-col gap-4 lg:gap-[13px] w-full sm:w-auto items-start">
              <h3 className="font-roboto text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold leading-[28px] sm:leading-[32px] lg:leading-[37px] uppercase text-muted">
                Highlight
              </h3>
              <div className="flex flex-col items-start gap-3.5">
                <a
                  href="#"
                  className="font-roboto text-[16px] sm:text-[18px] lg:text-[20px] leading-[11px] hover:text-[#FF42A4] transition-colors text-muted-foreground font-extrabold"
                >
                  Latest Work
                </a>
                <a
                  href="#"
                  className="font-roboto text-[16px] sm:text-[18px] lg:text-[20px] leading-[11px] hover:text-[#FF42A4] transition-colors text-muted-foreground font-extrabold"
                >
                  Featured Projects
                </a>
              </div>
            </div>

            {/* Follow column */}
            <div className="flex flex-col gap-4 lg:gap-[13px] w-full sm:w-auto items-start">
              <h3 className="font-roboto text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold leading-[28px] sm:leading-[32px] lg:leading-[37px] uppercase text-muted">
                Follow
              </h3>
              <div className="flex flex-col items-start gap-3.5">
                <a
                  href="https://www.deviantart.com/ioartseu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto text-[16px] sm:text-[18px] lg:text-[20px] leading-[11px] hover:text-[#FF42A4] transition-colors font-bold text-muted"
                >
                  DeviantArt
                </a>
                <a
                  href="https://www.etsy.com/shop/ioartseu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto text-[16px] sm:text-[18px] lg:text-[20px] leading-[11px] hover:text-[#FF42A4] transition-colors font-bold text-muted"
                >
                  Etsy
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full px-0">
            <div className="flex flex-col items-start w-full max-w-[810px]">
              <p className="font-poppins text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-[24px] sm:leading-[30px] lg:leading-[36px] text-muted text-left mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full px-4 py-6 border-t border-white">
        <p className="font-poppins text-[14px] sm:text-[16px] font-normal text-muted text-center">
          © {new Date().getFullYear()} Ioarts. All rights reserved.
        </p>
        <p className="font-poppins text-[12px] sm:text-[14px] font-normal text-[#ADADAD] text-center mt-2">
          By ioarts in Next.js and Sanity
        </p>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-2.5 right-2.5 h-[1px] bg-foreground" />
    </footer>
  )
}
