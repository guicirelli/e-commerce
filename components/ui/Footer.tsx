import React from 'react';
import { useRouter } from 'next/router';
import { FiInstagram, FiLinkedin, FiMessageCircle } from 'react-icons/fi';
import { getTranslation, type Locale } from '../../lib/translations';

// Wrapper para compatibilidade com React 19
const InstagramIcon = FiInstagram as React.ComponentType<{ size?: number; className?: string }>;
const LinkedInIcon = FiLinkedin as React.ComponentType<{ size?: number; className?: string }>;
const WhatsAppIcon = FiMessageCircle as React.ComponentType<{ size?: number; className?: string }>;

interface FooterProps {
  brandName: string;
  brandTagline: string;
  copyright: string;
  showSocial?: boolean;
  social?: {
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export default function Footer({
  brandName,
  brandTagline,
  copyright,
  showSocial = true,
  social
}: FooterProps) {
  const router = useRouter();
  const locale = (router.locale || 'en') as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">
              PERCIRELLI
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">{t('footer.tagline')}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg lg:text-xl text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base lg:text-lg">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.features')}
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.testimonials')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          {showSocial && social && (
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg lg:text-xl text-white">{t('footer.social')}</h4>
              <div className="flex space-x-3 sm:space-x-4 md:space-x-5">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </a>
                )}
                {social.whatsapp && (
                  <a
                    href={social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 md:pt-10 text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

