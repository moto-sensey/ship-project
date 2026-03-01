import { useState } from 'react';
import { SearchLogo } from "./SearchLogo";
import { MdOutlineClose } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import style from './Header.module.scss';
import { Logo } from './Logo';

export const Header = () => {
    const [visibleSearch, setVisibleSearch] = useState(false);
const [burger, setBurger] = useState(false);

const handleToggleSearch = () => setVisibleSearch((prev) => !prev);
const handleBurger = () => setBurger((prev) => !prev);


return (
    <>
    <header className ={style.header}>
        <div className={style.header__wrapper}>
            <a href='#'><Logo/></a>
            <ul className={`${style.contact} ${burger ? style["contact-active"] : ""}`}>
                <li>
                    <a href="mailto:info@lead-group.com">info@lead-group.com</a>
                </li>
                <li>
                    <a href="tel:+14951234567">+1 (495) 123-45-67</a>
                </li>
            </ul>
        </div>
        {visibleSearch ? (
          <div className={style["header__search-block"]}>
            <input type="text" placeholder="search..." />
            <button onClick={handleToggleSearch}>
              <MdOutlineClose />
            </button>
          </div>
        ) : (
          <button onClick={handleToggleSearch}>
            <SearchLogo />
          </button>
        )}
        <button onClick={handleBurger} className={style.humburger}>
          {burger ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
        </button>
    </header>
    <nav className={`${style.links} ${burger ? style["active-links"] : ""}`}>
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Fleet</a>
          </li>
          <li>
            <a href="/">Investors</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
          <li>
            <a href="/">Press cente</a>
          </li>
          <li>
            <a href="/">Sustainable development</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </nav>
    </>
);
};

