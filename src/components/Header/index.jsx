import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  HeaderContainer,
  TopSection,
  LogoWrapper,
  NavDesktop,
  NavLink,
  LanguageSwitcher,
  MobileMenuIcon,
  NavMobile,
  BottomSection,
  TextContent,
  Title,
  Subtitle,
  VideoPlaceholder,
  DropdownContainer, // Import new styled components
  DropdownMenu,
  DropdownItem,
} from "./styled";

// Language data
const languageData = {
  quote: {
    ru: "Подвиг ваш бессмертен, память о нем вечна!",
    en: "Your feat is immortal, your memory eternal!",
    by: "Неизвестный солдат",
  },
  navigation: {
    region: {
      ru: "Области", // Изменено на "Области" для множественного числа
      en: "Regions",
    },
    heroes: {
      ru: "Наши Герои!",
      en: "Our Heroes!",
    },
    map: {
      ru: "Карта",
      en: "Map",
    },
    museums: {
      ru: "Музеи",
      en: "Museums",
    },
    // about: {
    //   ru: "О проекте",
    //   en: "About",
    // },
    regionsList: {
      // Добавлены названия областей
      vitebsk: { ru: "Витебская", en: "Vitebsk" },
      minsk: { ru: "Минская", en: "Minsk" },
      grodno: { ru: "Гродненская", en: "Grodno" },
      mogilev: { ru: "Могилевская", en: "Mogilev" },
      brest: { ru: "Брестская", en: "Brest" },
      gomel: { ru: "Гомельская", en: "Gomel" },
    },
  },
  header: {
    title: {
      ru: "80 страниц истории",
      en: "80 Pages of History",
    },
    subtitle: {
      ru: "Великой Победы",
      en: "of the Great Victory",
    },
  },
};

const Header = () => {
  const [language, setLanguage] = useState("ru");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Новое состояние для выпадающего меню
  const location = useLocation();

  const getText = (keyPath) => {
    const keys = keyPath.split(".");
    let current = languageData;
    for (let i = 0; i < keys.length; i++) {
      if (current[keys[i]] !== undefined) {
        current = current[keys[i]];
      } else {
        return "";
      }
    }
    return current[language] || current["ru"];
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <HeaderContainer>
      <TopSection>
        <LogoWrapper to="/">
          <img
            src="https://placehold.co/80x80/000000/FFFFFF?text=LOGO"
            alt="WWII Victory Anniversary Logo"
          />
        </LogoWrapper>
        <NavDesktop>
          <DropdownContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/regions"
              className={
                location.pathname.startsWith("/regions") ? "active" : ""
              }
            >
              {getText("navigation.region")}
            </NavLink>
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem to="/regions/vitebsk">
                  {getText("navigation.regionsList.vitebsk")}
                </DropdownItem>
                <DropdownItem to="/regions/minsk">
                  {getText("navigation.regionsList.minsk")}
                </DropdownItem>
                <DropdownItem to="/regions/grodno">
                  {getText("navigation.regionsList.grodno")}
                </DropdownItem>
                <DropdownItem to="/regions/mogilev">
                  {getText("navigation.regionsList.mogilev")}
                </DropdownItem>
                <DropdownItem to="/regions/brest">
                  {getText("navigation.regionsList.brest")}
                </DropdownItem>
                <DropdownItem to="/regions/gomel">
                  {getText("navigation.regionsList.gomel")}
                </DropdownItem>
              </DropdownMenu>
            )}
          </DropdownContainer>
          <NavLink
            to="/heroes"
            className={location.pathname === "/heroes" ? "active" : ""}
          >
            {getText("navigation.heroes")}
          </NavLink>
          <NavLink
            to="/map"
            className={location.pathname === "/map" ? "active" : ""}
          >
            {getText("navigation.map")}
          </NavLink>
          <NavLink
            to="/museums"
            className={location.pathname === "/museums" ? "active" : ""}
          >
            {getText("navigation.museums")}
          </NavLink>
          <NavLink
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            {getText("navigation.about")}
          </NavLink>
        </NavDesktop>
        <LanguageSwitcher>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Select language"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </LanguageSwitcher>
        <MobileMenuIcon
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </MobileMenuIcon>
      </TopSection>
      <NavMobile isOpen={isMobileMenuOpen}>
        <NavLink
          to="/regions"
          onClick={toggleMobileMenu}
          className={location.pathname.startsWith("/regions") ? "active" : ""}
        >
          {getText("navigation.region")}
        </NavLink>
        {/* В мобильном меню можно отобразить все регионы напрямую или по клику на "Области" */}
        {/* Для простоты пока оставим только ссылку на главную страницу регионов */}
        <NavLink
          to="/heroes"
          onClick={toggleMobileMenu}
          className={location.pathname === "/heroes" ? "active" : ""}
        >
          {getText("navigation.heroes")}
        </NavLink>
        <NavLink
          to="/map"
          onClick={toggleMobileMenu}
          className={location.pathname === "/map" ? "active" : ""}
        >
          {getText("navigation.map")}
        </NavLink>
        <NavLink
          to="/museums"
          onClick={toggleMobileMenu}
          className={location.pathname === "/museums" ? "active" : ""}
        >
          {getText("navigation.museums")}
        </NavLink>
        <NavLink
          to="/about"
          onClick={toggleMobileMenu}
          className={location.pathname === "/about" ? "active" : ""}
        >
          {getText("navigation.about")}
        </NavLink>
        <LanguageSwitcher
          style={{ display: "block", textAlign: "center", marginTop: "1rem" }}
        >
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              toggleMobileMenu();
            }}
            aria-label="Select language"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </LanguageSwitcher>
      </NavMobile>
      <BottomSection>
        <TextContent>
          <Title>{getText("header.title")}</Title>
          <Subtitle>{getText("header.subtitle")}</Subtitle>
        </TextContent>
        <VideoPlaceholder aria-label="Placeholder for historical video content">
          Video Placeholder
        </VideoPlaceholder>
      </BottomSection>
    </HeaderContainer>
  );
};

export default Header;
