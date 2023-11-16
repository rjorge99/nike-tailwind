import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className='padding-x py-8 w-full z-10 absolute'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    <img src={headerLogo} width={130} height={30} alt='header logo' />
                </a>
                <ul className='flex flex-1 gap-16 max-lg:hidden justify-center items-center'>
                    {navLinks.map((link) => (
                        <li>
                            <a
                                href={link.href}
                                key={link.label}
                                className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <img
                        className='lg:hidden'
                        src={hamburger}
                        width={30}
                        height={30}
                        alt='hamburger'
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
