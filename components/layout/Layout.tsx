import React from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

interface Settings {
  business: {
    brandName: string;
    brandLogo?: string;
    brandTagline: string;
    social?: {
      instagram?: string;
      linkedin?: string;
      whatsapp?: string;
    };
  };
  theme: {
    header: {
      showThemeToggle?: boolean;
    };
    footer: {
      showSocial?: boolean;
      copyright: string;
    };
  };
}

interface LayoutProps {
  settings: Settings;
  children: React.ReactNode;
}

export default function Layout({ settings, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        brandName={settings.business.brandName}
        brandLogo={settings.business.brandLogo}
        showThemeToggle={settings.theme?.header?.showThemeToggle}
      />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer
        brandName={settings.business.brandName}
        brandTagline={settings.business.brandTagline}
        copyright={settings.theme?.footer?.copyright || ''}
        showSocial={settings.theme?.footer?.showSocial}
        social={settings.business.social}
      />
    </div>
  );
}

