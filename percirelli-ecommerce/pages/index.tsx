import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import TopRibbon from '../components/ui/TopRibbon';
import CtaButton from '../components/ui/CtaButton';
import ProductCard from '../components/ui/ProductCard';
import FeatureCard from '../components/ui/FeatureCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import { loadSettings } from '../lib/settings';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home({ settings }: { settings: any }) {
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
            message={settings.sections.topRibbon.message}
            closeable={settings.sections.topRibbon.closeable}
          />
        )}

        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center pt-32 pb-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/camisapreta.jpg"
              alt="Camiseta Preta"
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

          <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
                <span className="block text-white mb-3 tracking-tight">Camisetas que</span>
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-black">
                  Combinam
                </span>
                <span className="block text-white mt-3 tracking-tight">
                  <span className="text-white">Estilo e </span>
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-black">
                    Qualidade
                  </span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 drop-shadow-lg">
                {settings.sections.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <CtaButton
                  variant="primary"
                  onClick={handleScrollToProducts}
                  className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-200 shadow-lg"
                >
                  {settings.sections.hero.ctaPrimary}
                </CtaButton>
                <CtaButton
                  variant="primary"
                  onClick={() => {
                    const element = document.querySelector('#diferenciais');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-200 shadow-lg"
                >
                  {settings.sections.hero.ctaSecondary}
                </CtaButton>
              </div>

              {/* Stats */}
              {settings.sections.hero.stats && (
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {settings.sections.hero.stats.map((stat: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className="text-center bg-white text-black rounded-lg p-4 shadow-lg"
                    >
                      <div className="text-3xl md:text-4xl font-bold mb-2 text-black">{stat.number}</div>
                      <div className="text-sm md:text-base text-gray-700 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* PRODUTOS SECTION */}
        <PageSection
          id="produtos"
          title="Nossas Camisas"
          subtitle="Descubra nossa coleção exclusiva de camisetas premium"
          bgColor="bg-white dark:bg-gray-900"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {settings.products.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </PageSection>

        {/* DIFERENCIAIS SECTION */}
        <PageSection
          id="diferenciais"
          title={settings.sections.features.title}
          subtitle={settings.sections.features.subtitle}
          bgColor="bg-gray-50 dark:bg-gray-800"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {settings.sections.features.items.map((feature: any, index: number) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </PageSection>

        {/* DEPOIMENTOS SECTION */}
        <PageSection
          id="depoimentos"
          title={settings.sections.testimonials.title}
          bgColor="bg-white dark:bg-gray-900"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {settings.sections.testimonials.items.map((testimonial: any, index: number) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
                text={testimonial.text}
                index={index}
              />
            ))}
          </div>
        </PageSection>

        {/* CTA FINAL SECTION */}
        <PageSection
          id="cta"
          bgColor="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
          vPadding="py-20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {settings.sections.cta.title}
              </h2>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-200">
                {settings.sections.cta.subtitle}
              </p>
              <CtaButton
                variant="primary"
                onClick={handleScrollToProducts}
                className="text-lg px-8 py-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                {settings.sections.cta.button}
              </CtaButton>
              <p className="text-sm mt-6 text-gray-600 dark:text-gray-400">
                {settings.sections.cta.secondaryText}
              </p>
            </motion.div>
          </div>
        </PageSection>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const settings = loadSettings();
  return {
    props: {
      settings,
    },
  };
}
