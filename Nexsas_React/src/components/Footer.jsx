import SmartLink from "./SmartLink";

// Social media icons
const socialLinks = [
  { name: "Facebook", icon: "/images/icons/facebook.svg" },
  { name: "Instagram", icon: "/images/icons/instagram.svg" },
  { name: "Youtube", icon: "/images/icons/youtube.svg" },
  { name: "LinkedIn", icon: "/images/icons/linkedin.svg" },
  { name: "Dribbble", icon: "/images/icons/dribbble.svg" },
  { name: "Behance", icon: "/images/icons/behance.svg" },
];

// Footer link columns
const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "financial-management-platform-about.html" },
      { label: "Team", href: "financial-management-platform-team.html" },
      { label: "Why Choose Us", href: "financial-management-platform-why-choose-us.html" },
      { label: "Success Stories", href: "financial-management-platform-success-stories.html" },
      { label: "Contact Us", href: "financial-management-platform-contact.html" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "financial-management-platform-faq.html" },
      { label: "Whitepaper", href: "financial-management-platform-whitepaper.html" },
      { label: "Download", href: "financial-management-platform-download.html" },
      { label: "Blog", href: "financial-management-platform-blog.html" },
      { label: "Tutorials", href: "financial-management-platform-tutorial.html" },
      { label: "Changelog", href: "financial-management-platform-changelog.html" },
    ],
  },
  {
    title: "Legal Policies",
    links: [
      { label: "Terms & Conditions", href: "financial-management-platform-terms-conditions.html" },
      { label: "Privacy Policy", href: "financial-management-platform-privacy-policy.html" },
      { label: "Refund Policy", href: "financial-management-platform-refund-policy.html" },
      { label: "Referral Program", href: "financial-management-platform-referral-program.html" },
      { label: "GDPR", href: "financial-management-platform-gdpr.html" },
      { label: "Legal", href: "financial-management-platform-legal.html" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary relative overflow-hidden">
      <div className="main-container px-5">
        {/* Main footer content */}
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          {/* Logo and description column */}
          <div className="col-span-12 xl:col-span-4">
            <div data-ns-animate data-delay="0.3" className="max-w-[306px]">
              <figure>
                <img src="/images/shared/dark-logo.svg" alt="Nexsas Logo" />
              </figure>
              <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <div key={social.name} className="flex items-center gap-3">
                    <a href="#" className="footer-social-link">
                      <span className="sr-only">{social.name}</span>
                      <img className="size-6" src={social.icon} alt={social.name} />
                    </a>
                    {index < socialLinks.length - 1 && (
                      <div className="bg-stroke-1/20 h-6 w-px"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            {footerColumns.map((column, colIndex) => (
              <div key={column.title} className="col-span-12 md:col-span-4">
                <div
                  data-ns-animate
                  data-delay={0.4 + colIndex * 0.1}
                  className="space-y-8"
                >
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">
                    {column.title}
                  </p>
                  <ul className="space-y-3 sm:space-y-5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <SmartLink href={link.href} className="footer-link">
                          {link.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="relative pt-[26px] pb-[100px] text-center">
          <div className="footer-divider bg-accent/10 absolute top-0 right-0 left-0 mx-auto h-px w-0 origin-center"></div>
          <p
            data-ns-animate
            data-delay="0.7"
            data-offset="10"
            data-start="top 105%"
            className="text-tagline-1 text-primary-50 font-normal"
          >
            Copyright &copy; Nexsas – smart application for modern business
          </p>
        </div>
      </div>
    </footer>
  );
}
