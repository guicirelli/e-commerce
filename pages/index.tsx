import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import TopRibbon from '../components/ui/TopRibbon';
import CtaButton from '../components/ui/CtaButton';
import ProductCard from '../components/ui/ProductCard';
import FeatureCard from '../components/ui/FeatureCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import { loadSettings } from '../lib/settings';
import { getTranslation, type Locale } from '../lib/translations';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home({ settings }: { settings: any }) {
  const router = useRouter();
  const locale = (router.locale || 'en') as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const handleScrollToProducts = () => {
    const element = document.querySelector('#produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>{settings.general.seoTitle}</title>
        <meta name="description" content={settings.general.seoDescription} />
        <meta property="og:title" content={settings.general.seoTitle} />
        <meta property="og:description" content={settings.general.seoDescription} />
        <meta property="og:image" content={settings.general.openGraphImage} />
        <link rel="icon" href={settings.general.favicon} />
      </Head>

      <Layout settings={settings}>
        {/* Top Ribbon */}
        {settings.sections.topRibbon.enabled && (
          <TopRibbon
            message={t('topRibbon')}
            closeable={settings.sections.topRibbon.closeable}
          />
        )}

        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative min-h-[100vh] flex items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/camisapreta.jpg"
              alt="Black T-Shirt"
              fill
              className="object-cover object-center object-[center_top] opacity-70"
              priority
              sizes="100vw"
            />
            {/* Overlay gradiente mais claro para melhorar legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/75 via-gray-700/50 to-gray-800/75 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/70 via-gray-700/40 to-gray-900/80 z-10" />
            {/* Overlay radial mais claro no centro para destacar conteúdo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(55,65,81,0.3)_20%,_rgba(17,24,39,0.5)_60%,_rgba(0,0,0,0.7)_100%)] z-10" />
          </div>

          <div className="relative z-20 max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center py-4 sm:py-6 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
                <span className="block text-white mb-1 sm:mb-2 tracking-tight">{t('hero.title1')}</span>
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-black">
                  {t('hero.title2')}
                </span>
                <span className="block text-white mt-1 sm:mt-2 tracking-tight">
                  <span className="text-white">{t('hero.title3')} </span>
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-black">
                    {t('hero.title4')}
                  </span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-gray-100 drop-shadow-lg px-4">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-10 px-4">
                <CtaButton
                  variant="primary"
                  onClick={handleScrollToProducts}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 !bg-white !text-black hover:!bg-gray-100 shadow-lg font-bold"
                >
                  {t('hero.ctaPrimary')}
                </CtaButton>
                <CtaButton
                  variant="primary"
                  onClick={() => {
                    const element = document.querySelector('#diferenciais');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 !bg-white !text-black hover:!bg-gray-100 shadow-lg font-bold"
                >
                  {t('hero.ctaSecondary')}
                </CtaButton>
              </div>

              {/* Stats */}
              {settings.sections.hero.stats && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-4">
                  {settings.sections.hero.stats.map((stat: any, index: number) => {
                    const statLabels = [
                      t('hero.stats.customers'),
                      t('hero.stats.rating'),
                      t('hero.stats.delivery'),
                    ];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                        className="text-center bg-white text-black rounded-lg p-2 sm:p-3 md:p-4 shadow-lg"
                      >
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-black">{stat.number}</div>
                        <div className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{statLabels[index]}</div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* PRODUTOS SECTION */}
        <PageSection
          id="produtos"
          title={t('products.title')}
          subtitle={t('products.subtitle')}
          bgColor="bg-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {settings.products.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </PageSection>

        {/* DIFERENCIAIS SECTION */}
        <PageSection
          id="diferenciais"
          title={t('features.title')}
          subtitle={t('features.subtitle')}
          bgColor="bg-gray-50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {settings.sections.features.items.map((feature: any, index: number) => {
              const featureKeys = ['quality', 'delivery', 'security', 'design'];
              const featureKey = featureKeys[index] || 'quality';
              return (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={t(`features.items.${featureKey}.title`)}
                  description={t(`features.items.${featureKey}.description`)}
                  index={index}
                />
              );
            })}
          </div>
        </PageSection>

        {/* DEPOIMENTOS SECTION */}
        <PageSection
          id="depoimentos"
          title={t('testimonials.title')}
          bgColor="bg-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {settings.sections.testimonials.items.map((testimonial: any, index: number) => {
              const testimonialData = t(`testimonials.items.${index}`);
              return (
                <TestimonialCard
                  key={index}
                  name={typeof testimonialData === 'object' ? testimonialData.name : testimonial.name}
                  role={typeof testimonialData === 'object' ? testimonialData.role : testimonial.role}
                  rating={testimonial.rating}
                  text={typeof testimonialData === 'object' ? testimonialData.text : testimonial.text}
                  index={index}
                />
              );
            })}
          </div>
        </PageSection>

        {/* CTA FINAL SECTION */}
        <PageSection
          id="cta"
          bgColor="bg-gray-50 text-gray-900"
          vPadding="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
        >
          <div className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {t('cta.title')}
              </h2>
              <p className="text-xl mb-8 text-gray-700">
                {t('cta.subtitle')}
              </p>
              <CtaButton
                variant="primary"
                onClick={handleScrollToProducts}
                className="text-lg px-8 py-4 !bg-black !text-white hover:!bg-gray-900 font-bold"
              >
                {t('cta.button')}
              </CtaButton>
              <p className="text-sm mt-6 text-gray-600">
                {t('cta.secondaryText')}
              </p>
            </motion.div>
          </div>
        </PageSection>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const settings = loadSettings();
  return {
    props: {
      settings,
    },
  };
}
