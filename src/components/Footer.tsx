import { FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, YoutubeIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Models", href: "#models" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-[0.15em] text-gold">HAVAL MOTORS</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Official Haval dealership bringing bold design and modern engineering to
              Pakistan.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-text-muted transition-all duration-200 hover:border-gold hover:text-gold hover:shadow-[0_0_16px_rgba(201,168,76,0.35)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Lahore, Pakistan
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                +92 300 1234567
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-text-muted">
          &copy; 2025 Haval Motors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
