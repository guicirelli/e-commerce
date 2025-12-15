import Link from 'next/link';
import { useRouter } from 'next/router';
import { getTranslation, type Locale } from '../lib/i18n';

export default function Header() {
  const router = useRouter();
  const { asPath, locale = 'en' } = router;
  const currentLocale = (locale as Locale) || 'en';
  const t = (key: string) => getTranslation(currentLocale, key);
  
  // Fallback caso locales não esteja disponível
  const availableLocales: Locale[] = ['en', 'pt'];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-2">
            {availableLocales.map((loc) => (
              <Link 
                href={asPath} 
                locale={loc} 
                key={loc}
                className={`px-4 py-2 rounded hover:bg-gray-800 transition-colors ${
                  locale === loc 
                    ? 'bg-black text-white' 
                    : 'bg-gray-200 text-gray-700 hover:text-white'
                }`}
              >
                {loc === 'en' ? 'EN' : 'PT'}
              </Link>
            ))}
          </div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-700">{t('home')}</Link></li>
            <li><Link href="/cart" className="hover:text-gray-700">{t('cart')}</Link></li>
            <li><Link href="/checkout" className="hover:text-gray-700">{t('checkout')}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}