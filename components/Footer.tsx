"use client";

import { TwitterLogo, InstagramLogo, LinkedinLogo, Heart } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              ClinicOS
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Elevating healthcare management through design and technology.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  HIPAA Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>© 2026 ClinicOS. All rights reserved. Built with</span>
            <Heart size={14} weight="fill" className="text-red-500 inline-block" />
            <span>for healthcare.</span>
          </div>

          <div className="flex items-center gap-5 text-zinc-400">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors duration-200"
            >
              <TwitterLogo size={20} weight="fill" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-200"
            >
              <InstagramLogo size={20} weight="fill" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-200"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
