import { PRODUCT_INFO } from '@/shared/constants/data';
import { InstagramIcon, YoutubeIcon } from 'lucide-react';
import { sections } from '../lib/data';
import { ModeToggle } from '@/shared/ui/theme-toggle';

const Footer = () => {
  return (
    <section className="py-32">
      <div className="custom-container">
        <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col items-center justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="https://shadcnblocks.com">
                <img
                  src={PRODUCT_INFO.logo}
                  alt={PRODUCT_INFO.name}
                  title={PRODUCT_INFO.name}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{PRODUCT_INFO.name}</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              A collection of 100+ responsive HTML templates for your startup
              business or side project.
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <InstagramIcon className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <YoutubeIcon className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <InstagramIcon className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <InstagramIcon className="size-6" />
                </a>
              </li>
            </ul>
            <ModeToggle />
          </div>
          <div className="grid w-full grid-cols-3 gap-6 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
          <p>
            © {new Date().getFullYear()} {PRODUCT_INFO.creator}. All rights
            reserved.
          </p>
          <ul className="flex justify-center gap-4 lg:justify-start">
            <li className="hover:text-primary">
              <a href={PRODUCT_INFO.terms_of_use}>Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
