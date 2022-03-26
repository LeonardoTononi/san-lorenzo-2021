import Header from '@/components/organism/Header';
import useLocale from 'hooks/useLocale';
import Seo from '@/components/Layout/Seo';
import ColumnSection from '@/components/organism/ColumnSection';
import Contact from '@/components/organism/Contact';
import Footer from '@/components/organism/Footer';

export default function Posizione() {
  const { t } = useLocale();

  const { title, subTitle, text, cta, sections } = t.position;
  const headerText = { title, subTitle, text };

  const seoAttributes = {
    title: t.seo.lodge,
  };

  return (
    <>
      <Seo {...seoAttributes} />
      <Header
        background='/assets/position/location.png'
        {...headerText}
      />
    
      <img src='/assets/position/location-2.png' class="mb-20 px-2"/>
      <section className={`w-full bg-cover mx-auto grid`}>
        <div className="flex flex-col items-center order-2 max-w-screen-xl my-5 text-center lg:my-20 lg:mx-auto lg:text-center lg:flex-grow md:items-center md:text-left md:pl-2">
        
          <h1 className="mb-8 font-serif text-4xl font-extrabold leading-none text-center text-gray-900 sm:text-6xl lg:text-7xl sm:mb-10">
            {sections[0].title}
          </h1>

          <p className="max-w-screen-lg mb-10 text-lg text-gray-500 lg:mx-auto sm:text-2xl sm:leading-10 sm:mb-11">
            {sections[0].text}
          </p>
        </div>
      </section>
      <img src='/assets/position/gargnano.png' class="mb-20 px-2"/>
     
      <Contact t={t} simplified />
      <Footer t={t} />
    </>
  );
}