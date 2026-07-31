import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon } from "../ui/BrandIcons";

const socials = [
  { icon: Mail, href: "mailto:bloombytes14@gmail.com", label: "Email" },
  { icon: InstagramIcon, href: "https://www.instagram.com/bloombytes_freelancer/", label: "Instagram" },
  { icon: GithubIcon, href: "https://github.com/freelancermerlyn14-dotcom", label: "GitHub" },
];

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-gradient">
              <span className="h-2 w-2 rounded-full bg-white/90" />
            </span>
            <span className="font-bold text-lg text-ink">BloomBytes</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-muted hover:text-ink hover:border-border-hover transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} BloomBytes. All rights reserved.</p>
          <p>Websites · Presentations · Excel Solutions</p>
        </div>
      </div>
    </footer>
  );
}
