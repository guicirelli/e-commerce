import React from 'react';
import { FiInstagram, FiLinkedin, FiMessageCircle } from 'react-icons/fi';

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
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-white">PERCI</span>
              <span className="text-gray-400">RELLI</span>
            </h3>
            <p className="text-gray-400 text-sm">{brandTagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          {showSocial && social && (
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={24} />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={24} />
                  </a>
                )}
                {social.whatsapp && (
                  <a
                    href={social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={24} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

