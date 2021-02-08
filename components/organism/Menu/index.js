import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from 'assets/home/logo.png';
import useLocale from 'hooks/useLocale';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';

export default function Menu({
  navbar: { home, lodge, apartments, activities, contact },
}) {
  const router = useRouter();
  const { locale, handleChangeLang } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleHamb = () => {
    setTimeout(() => setIsOpen(!isOpen), 300);
  };

  const isMenuActive = (_menu) =>
    router.pathname === _menu ? 'navLink_active' : 'navLink_notActive';

  return (
    <nav className='flex justify-between z-50 font-sans text-white '>
      <div className='z-20 lg:flex lg:gap-5'>
        <img src={Logo} className='w-1/4 lg:w-24 lg:h-16' />
        <h1 className='text-3xl tracking-wider font-medium font-serif lg:w-80'>
          San Lorenzo{' '}
          <span className='block text-lg font-light'>di Persegno</span>
        </h1>
      </div>

      <div onClick={handleHamb} className='z-50  hover:cursor lg:hidden'>
        <UseAnimations
          animation={menu2}
          wrapperStyle={
            (isOpen && { textColor: 'black' }) || { textColor: 'black' }
          }
          reverse={isOpen}
          size={42}
          speed={3}
          strokeColor='white'
          className={` rounded ${isOpen && 'bg-gray-300 fill-current '}`}
        />
      </div>

      <ul
        className={`grid absolute bg-white text-black shadow left-0 top-0 z-20 p-2 w-full lg:flex lg:relative lg:bg-transparent lg:text-white lg:shadow-none lg:justify-end ${
          (isOpen && 'block') || 'hidden'
        }`}>
        <li className={`navLink ${isMenuActive(`/`)}`}>
          <Link href={`/${locale}`}>
            <a>{home}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive(`/agriturismo`)}`}>
          <Link href={`/${locale}/agriturismo`}>
            <a>{lodge}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive('/appartamenti')}`}>
          <Link href={`/${locale}/appartamenti`}>
            <a>{apartments}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive('/attività')}`}>
          <Link href={`/${locale}/attività`}>
            <a>{activities}</a>
          </Link>
        </li>
        <li className={`navLink ${isMenuActive('/contatti')}`}>
          <Link href={`/${locale}/contatti`}>
            <a>{contact}</a>
          </Link>
        </li>
        <li className='navLink navLink_notActive'>
          <select
            onChange={handleChangeLang}
            defaultValue={locale}
            className='text-black rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-900 text-base px-2 cursor-pointer'>
            <option value='en'>EN</option>
            <option value='it'>IT</option>
            <option value='de'>DE</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}