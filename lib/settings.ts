import businessSettings from '../content/settings/business.json';
import generalSettings from '../content/settings/general.json';
import themeSettings from '../content/settings/theme.json';
import sectionsSettings from '../content/settings/sections.json';
import productsData from '../content/settings/products.json';

export interface Settings {
  business: typeof businessSettings;
  general: typeof generalSettings;
  theme: typeof themeSettings;
  sections: typeof sectionsSettings;
  products: typeof productsData;
}

export function loadSettings(): Settings {
  return {
    business: businessSettings as typeof businessSettings,
    general: generalSettings as typeof generalSettings,
    theme: themeSettings as typeof themeSettings,
    sections: sectionsSettings as typeof sectionsSettings,
    products: productsData as typeof productsData,
  };
}

