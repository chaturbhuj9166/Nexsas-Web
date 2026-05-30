import { useState } from "react";
import SmartLink from "./SmartLink";
import { HoverBg, PixelIcon, ChevronDown } from "./Icons";

// =====================
// Top announcement bar
// =====================
function TopNav() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-ns-cyan top-nav px-5 py-1.5">
      <div className="relative flex items-center justify-between">
        <figcaption className="text-secondary md:text-tagline-2 font-inter-tight mx-auto text-center text-sm leading-[150%] font-normal">
          Financial Management Platform new homepage is live now{" "}
          <a href="#" className="underline">click here</a> to learn more
        </figcaption>
        <figure
          className="close-top-nav absolute top-1/2 right-0 size-3 -translate-y-[85%] cursor-pointer md:size-6 md:-translate-y-1/2"
          onClick={() => setVisible(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <path d="M22.8358 22.3639L22.3643 22.8353C22.104 23.0956 21.6819 23.0956 21.4215 22.8353L16.0004 17.4141L10.5792 22.8352C10.3189 23.0956 9.89675 23.0956 9.6364 22.8352L9.16499 22.3638C8.90464 22.1035 8.90464 21.6814 9.16499 21.421L14.5862 15.9999L9.16499 10.5787C8.90464 10.3184 8.90464 9.89626 9.16499 9.63591L9.63639 9.16451C9.89674 8.90416 10.3189 8.90416 10.5792 9.16451L16.0004 14.5857L21.4215 9.1645C21.6819 8.90415 22.104 8.90415 22.3643 9.1645L22.8358 9.6359C23.0961 9.89625 23.0961 10.3184 22.8358 10.5787L17.4146 15.9999L22.8358 21.421C23.0961 21.6814 23.0961 22.1035 22.8358 22.3639Z" className="fill-secondary" />
          </svg>
        </figure>
      </div>
    </div>
  );
}

// =====================
// Explore mega menu (4 columns)
// =====================
function ExploreMegaMenu() {
  const cols = [
    {
      title: "Company",
      links: [["financial-management-platform-about.html", "About"], ["financial-management-platform-team.html", "Team"], ["financial-management-platform-career.html", "Careers"]],
      cta: {
        href: "financial-management-platform-about.html", label: "Company", desc: "Meet the team behind it",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><path d="M4.2488 15.4988C4.16673 15.4988 4.08546 15.4826 4.00963 15.4512C3.9338 15.4198 3.8649 15.3738 3.80686 15.3157C3.74882 15.2577 3.70279 15.1888 3.67138 15.113C3.63997 15.0371 3.6238 14.9559 3.6238 14.8738L3.62385 11.5383C3.29043 11.6962 2.92249 11.7672 2.55425 11.7447C2.18601 11.7223 1.82943 11.607 1.51769 11.4097C1.20595 11.2124 0.949172 10.9395 0.771239 10.6163C0.593306 10.2932 0.5 9.93022 0.5 9.5613C0.5 9.19237 0.593306 8.82944 0.771239 8.50626C0.949172 8.18308 1.20595 7.91015 1.51769 7.71286C1.82943 7.51557 2.18601 7.40033 2.55425 7.37786C2.92249 7.35539 3.29043 7.42641 3.62385 7.58433L3.62381 4.2488C3.62381 4.16673 3.63997 4.08545 3.67138 4.00962C3.70279 3.93379 3.74883 3.86489 3.80687 3.80685C3.8649 3.74882 3.9338 3.70278 4.00963 3.67137C4.08546 3.63996 4.16674 3.6238 4.24882 3.6238L7.89683 3.62384C7.73891 3.29042 7.66789 2.92248 7.69036 2.55424C7.71283 2.186 7.82808 1.82943 8.02536 1.51769C8.22265 1.20595 8.49558 0.949171 8.81876 0.771239C9.14194 0.593306 9.50487 0.5 9.87379 0.5C10.2427 0.5 10.6056 0.593306 10.9288 0.771239C11.252 0.949171 11.5249 1.20595 11.7222 1.51769C11.9195 1.82943 12.0348 2.186 12.0572 2.55424C12.0797 2.92248 12.0087 3.29042 11.8508 3.62384L15.4988 3.6238C15.6645 3.6238 15.8235 3.68964 15.9407 3.80685C16.0579 3.92406 16.1238 4.08303 16.1238 4.24879L16.1238 7.58433C15.7904 7.42641 15.4225 7.35539 15.0542 7.37786C14.686 7.40033 14.3294 7.51557 14.0177 7.71286C13.7059 7.91015 13.4491 8.18308 13.2712 8.50626C13.0933 8.82944 13 9.19237 13 9.5613C13 9.93022 13.0933 10.2932 13.2712 10.6163C13.4491 10.9395 13.7059 11.2124 14.0177 11.4097C14.3294 11.607 14.686 11.7223 15.0542 11.7447C15.4225 11.7672 15.7904 11.6962 16.1238 11.5383L16.1238 14.8738C16.1238 15.0396 16.0579 15.1985 15.9407 15.3157C15.8235 15.4329 15.6645 15.4988 15.4988 15.4988L4.2488 15.4988Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      },
    },
    {
      title: "Product",
      links: [["financial-management-platform-features.html", "Features"], ["financial-management-platform-integration.html", "Integrations"], ["financial-management-platform-process.html", "Process"], ["financial-management-platform-press.html", "Press"]],
      cta: {
        href: "financial-management-platform-services.html", label: "Product", desc: "Experience the difference",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#pClip)"><path d="M19.167 17.5001V15.8334C19.1664 15.0948 18.9206 14.3774 18.4681 13.7937C18.0156 13.2099 17.3821 12.793 16.667 12.6084" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.1663 17.5V15.8333C14.1663 14.9493 13.8152 14.1014 13.19 13.4763C12.5649 12.8512 11.7171 12.5 10.833 12.5H4.16634C3.28229 12.5 2.43444 12.8512 1.80932 13.4763C1.1842 14.1014 0.833008 14.9493 0.833008 15.8333V17.5" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.50033 9.16667C9.34127 9.16667 10.8337 7.67428 10.8337 5.83333C10.8337 3.99238 9.34127 2.5 7.50033 2.5C5.65938 2.5 4.16699 3.99238 4.16699 5.83333C4.16699 7.67428 5.65938 9.16667 7.50033 9.16667Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="pClip"><rect width="20" height="20" fill="white" /></clipPath></defs></svg>,
      },
    },
    {
      title: "Resources",
      links: [["financial-management-platform-blog.html", "Blog"], ["financial-management-platform-faq.html", "FAQ"], ["financial-management-platform-tutorial.html", "Tutorials"]],
      cta: {
        href: "financial-management-platform-blog.html", label: "Resources", desc: "Access tutorials and guides",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18.3337 15.8333C18.3337 16.2754 18.1581 16.6993 17.8455 17.0118C17.5329 17.3244 17.109 17.5 16.667 17.5H3.33366C2.89163 17.5 2.46771 17.3244 2.15515 17.0118C1.84259 16.6993 1.66699 16.2754 1.66699 15.8333V4.16667C1.66699 3.72464 1.84259 3.30072 2.15515 2.98816C2.46771 2.67559 2.89163 2.5 3.33366 2.5H7.50033L9.16699 5H16.667C17.109 5 17.5329 5.17559 17.8455 5.48816C18.1581 5.80072 18.3337 6.22464 18.3337 6.66667V15.8333Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      },
    },
    {
      title: "Pricing & Account",
      links: [["financial-management-platform-pricing.html", "Plans"], ["financial-management-platform-login.html", "Login"], ["financial-management-platform-signup.html", "Sign Up"]],
      cta: {
        href: "financial-management-platform-pricing.html", label: "Pricing & Account", desc: "Select your plan",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M8.03598 5.35749L9.29875 6.62026L8.03598 7.88303L6.7732 6.62026L8.03598 5.35749Z" className="fill-secondary dark:fill-accent" /><path d="M4.46432 1.78583L5.72709 3.0486L4.46432 4.31137L3.20154 3.0486L4.46432 1.78583Z" className="fill-secondary dark:fill-accent" /><path d="M2.52555 6.61974L1.26277 7.88251L0 6.61974L1.26277 5.35697L2.52555 6.61974Z" className="fill-secondary dark:fill-accent" /></svg>,
      },
    },
  ];
  return (
    <div id="explore-mega-menu" className="dropdown-menu dark:bg-background-6 border-stroke-1/50 dark:border-background-7 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white px-6 pt-3 pb-6 opacity-0 transition-all duration-300 lg:w-[1290px]">
      <div className="grid grid-cols-12 gap-x-6 gap-y-6">
        {cols.map(({ title, links, cta }) => (
          <div key={title} className="col-span-3">
            <div className="flex h-full flex-col">
              <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 p-3 font-medium">{title}</p>
              <ul className="my-8">
                {links.map(([href, label]) => (
                  <li key={label}>
                    <SmartLink href={href} className="group relative block p-3">
                      <HoverBg />
                      <span className="text-tagline-1 text-secondary dark:text-accent relative z-10 font-normal">{label}</span>
                    </SmartLink>
                  </li>
                ))}
              </ul>
              <SmartLink href={cta.href} className="border-stroke-1 dark:border-stroke-7 hover:border-secondary/30 dark:hover:border-stroke-8 shadow-14 mt-auto flex items-start gap-2 rounded-xl border p-3 transition-all duration-300">
                <div className="border-stroke-1 dark:border-stroke-7 mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1">{cta.icon}</div>
                <div>
                  <p className="text-tagline-1 text-secondary dark:text-accent font-normal">{cta.label}</p>
                  <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 font-normal">{cta.desc}</p>
                </div>
              </SmartLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =====================
// Mobile menu accordion
// =====================
function MobileMenu() {
  const [openMenu, setOpenMenu] = useState("Explore");
  const toggle = (key) => setOpenMenu(openMenu === key ? null : key);

  const menus = [
    { label: "Explore", key: "Explore", items: [["financial-management-platform-about.html", "About"], ["financial-management-platform-team.html", "Team"], ["financial-management-platform-career.html", "Careers"], ["financial-management-platform-customer.html", "Customers"], ["financial-management-platform-testimonial.html", "Testimonials"], ["financial-management-platform-contact.html", "Contact Us"]] },
    { label: "Engage", key: "Engage", items: [["financial-management-platform-features.html", "Features"], ["financial-management-platform-integration.html", "Integrations"], ["financial-management-platform-process.html", "Process"], ["financial-management-platform-services.html", "Services"], ["financial-management-platform-download.html", "Download"]] },
    { label: "Insights", key: "Insights", items: [["financial-management-platform-blog.html", "Blog"], ["financial-management-platform-tutorial.html", "Tutorials"], ["financial-management-platform-faq.html", "FAQ"], ["financial-management-platform-analytics.html", "Analytics"], ["financial-management-platform-whitepaper.html", "Whitepaper"], ["financial-management-platform-glossary.html", "Glossary"], ["financial-management-platform-changelog.html", "Changelog"]] },
    { label: "Account", key: "account", items: [["financial-management-platform-pricing.html", "Pricing"], ["financial-management-platform-login.html", "Login"], ["financial-management-platform-signup.html", "Sign Up"]] },
    { label: "Legal & Policies", key: "legal", items: [["financial-management-platform-gdpr.html", "GDPR"], ["financial-management-platform-affiliates.html", "Affiliate"], ["financial-management-platform-legal.html", "Legal"], ["financial-management-platform-referral-program.html", "Referral Program"], ["financial-management-platform-security.html", "Security"]] },
  ];

  return (
    <ul className="space-y-2">
      {menus.map(({ label, key, items }) => {
        const isOpen = openMenu === key;
        return (
          <li key={key} className="space-y-2">
            <button className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5" data-menu={key} onClick={() => toggle(key)}>
              <span className="text-secondary/60 text-tagline-1 block font-normal">{label}</span>
              <span className={`menu-arrow transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 12L14 8L10 4" className="stroke-secondary/60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <ul className={`mobile-submenu ${isOpen ? "block" : "hidden"}`} data-submenu={key}>
              {items.map(([href, itemLabel]) => (
                <li key={itemLabel}>
                  <SmartLink href={href} className="text-tagline-1 text-secondary ml-4 block py-2.5 text-left font-normal transition-all duration-200">{itemLabel}</SmartLink>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

// =====================
// Header (desktop + mobile)
// =====================
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <div
        data-ns-animate data-direction="up" data-offset="20"
        className="financial-management-platform-header lp:!max-w-[1290px] has-top-nav fixed top-14 left-1/2 z-50 mx-auto flex w-full max-w-[335px] -translate-x-1/2 items-center justify-between rounded-[20px] bg-white px-1.5 py-2.5 backdrop-blur-[25px] min-[425px]:max-w-[380px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0"
      >
        {/* Logo */}
        <div>
          <SmartLink href="financial-management-platform.html">
            <span className="sr-only">Home</span>
            <figure className="hidden lg:block lg:max-w-[198px]">
              <img src="/images/shared/main-logo.svg" alt="Nexsas" />
            </figure>
            <figure className="block max-w-[44px] lg:hidden">
              <img src="/images/shared/logo.svg" alt="Nexsas" className="block w-full" />
            </figure>
          </SmartLink>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center xl:flex">
          <ul className="flex items-center gap-6">
            {/* Explore — mega menu */}
            <li className="nav-item relative cursor-pointer py-5" data-menu="explore-mega-menu">
              <a href="#" className="nav-item-link-white flex items-center gap-1">
                <span className="text-secondary/60 hover:text-secondary transition-colors duration-300 ease-in-out">Explore</span>
                <span className="nav-arrow stroke-secondary/60 hover:stroke-secondary block origin-center translate-y-px transition-all duration-300"><ChevronDown /></span>
              </a>
              <div>
                <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[1290px]"></div>
                <ExploreMegaMenu />
              </div>
            </li>

            {/* Engage dropdown */}
            <li className="nav-item relative cursor-pointer py-5" data-menu="engage-dropdown-menu">
              <a href="#" className="nav-item-link-white flex items-center gap-1">
                <span className="text-secondary/60 hover:text-secondary transition-colors duration-300 ease-in-out">Engage</span>
                <span className="nav-arrow stroke-secondary/60 hover:stroke-secondary block origin-center translate-y-px transition-all duration-300"><ChevronDown /></span>
              </a>
              <div>
                <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[300px] -translate-x-1/2 bg-transparent opacity-0"></div>
                <ul id="engage-dropdown-menu" className="dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[300px] -translate-x-1/2 space-y-2.5 rounded-[20px] border bg-white p-3 opacity-0 transition-all duration-300">
                  {[["financial-management-platform-contact.html", "Contact", "Reach out to our team"], ["financial-management-platform-services.html", "Services", "Explore offerings"], ["financial-management-platform-testimonial.html", "Testimonials", "Read reviews"], ["financial-management-platform-customer.html", "Customers", "Meet clients"]].map(([href, label, desc]) => (
                    <li key={label}>
                      <SmartLink href={href} className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300">
                        <HoverBg />
                        <div className="relative z-10">
                          <p className="text-tagline-1 text-secondary dark:text-accent font-normal">{label}</p>
                          <p className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">{desc}</p>
                        </div>
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Insights dropdown */}
            <li className="nav-item relative cursor-pointer py-5" data-menu="insights-dropdown-menu">
              <a href="#" className="nav-item-link-white flex items-center gap-1">
                <span className="text-secondary/60 hover:text-secondary transition-colors duration-300 ease-in-out">Insights</span>
                <span className="nav-arrow stroke-secondary/60 hover:stroke-secondary block origin-center translate-y-px transition-all duration-300"><ChevronDown /></span>
              </a>
              <div>
                <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent opacity-0"></div>
                <ul id="insights-dropdown-menu" className="dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[320px] -translate-x-1/2 rounded-[20px] border bg-white p-3 opacity-0 transition-all duration-300">
                  {[["financial-management-platform-affiliates.html", "Affiliate", "Earn as affiliate"], ["financial-management-platform-analytics.html", "Analytics", "Track your metrics"], ["financial-management-platform-whitepaper.html", "Whitepaper", "Download white papers"], ["financial-management-platform-glossary.html", "Glossary", "Explore definitions"], ["financial-management-platform-changelog.html", "Changelog", "View release notes"]].map(([href, label, desc]) => (
                    <li key={label}>
                      <SmartLink href={href} className="group relative flex items-start gap-3 rounded-2xl p-3 transition-all duration-300">
                        <HoverBg />
                        <div className="dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white p-3"></div>
                        <div className="relative z-10">
                          <p className="text-tagline-1 text-secondary dark:text-accent font-normal">{label}</p>
                          <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">{desc}</p>
                        </div>
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="py-5"><SmartLink href="financial-management-platform-blog.html" className="nav-item-link-white"><span className="text-secondary/60 hover:text-secondary transition-colors duration-300 ease-in-out">Blog</span></SmartLink></li>
            <li className="py-5"><SmartLink href="financial-management-platform-contact.html" className="nav-item-link-white"><span className="text-secondary/60 hover:text-secondary transition-colors duration-300 ease-in-out">Contact us</span></SmartLink></li>
          </ul>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center sm:flex">
            <div className="btn-v3-secondary btn-v3-lg w-fit cursor-pointer rounded-2xl px-1 py-1" data-button-v3>
              <SmartLink href="financial-management-platform-signup.html" className="block">
                <div className="flex items-center gap-x-4">
                  <span className="relative z-20 flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] p-2.5 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" data-button-v3-icon aria-hidden="true"><PixelIcon className="size-6" /></span>
                  <span className="shrink-0 pr-4 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] first-letter:uppercase" data-button-v3-text aria-hidden="true">Get started</span>
                </div>
              </SmartLink>
            </div>
          </div>
          <div className="block xl:hidden">
            <button className="nav-hamburger bg-background-4 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full" onClick={() => setMobileOpen(true)}>
              <span className="sr-only">Menu</span>
              <span className="bg-stroke-9 block h-0.5 w-6"></span>
              <span className="bg-stroke-9 block h-0.5 w-6"></span>
              <span className="bg-stroke-9 block h-0.5 w-6"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <aside className={`sidebar scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full rounded-l-3xl bg-white transition-all duration-300 sm:w-1/2 xl:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="space-y-4 p-5 sm:p-8 lg:p-9">
          <div className="flex items-center justify-between">
            <SmartLink href="financial-management-platform.html">
              <span className="sr-only">Home</span>
              <figure className="max-w-[44px]"><img src="/images/shared/logo.svg" alt="Nexsas" className="block w-full" /></figure>
            </SmartLink>
            <button className="nav-hamburger-close bg-background-4 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full" onClick={() => setMobileOpen(false)}>
              <span className="sr-only">Close Menu</span>
              <span className="bg-stroke-9/60 absolute block h-0.5 w-4 rotate-45"></span>
              <span className="bg-stroke-9/60 absolute block h-0.5 w-4 -rotate-45"></span>
            </button>
          </div>
          <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
            <p className="text-secondary text-tagline-1 before:bg-stroke-4 relative mb-2 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-['']">Menu</p>
            <MobileMenu />
          </div>
        </div>
      </aside>
    </header>
  );
}

// =====================
// Public Navbar export (announcement bar + header)
// =====================
export default function Navbar() {
  return (
    <>
      <TopNav />
      <Header />
    </>
  );
}
