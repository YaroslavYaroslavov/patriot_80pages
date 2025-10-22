import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext"; // <--- ИМПОРТИРУЕМ useLanguage

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
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  // LanguageButton, // <--- УДАЛЕНО: Этот компонент не используется
} from "./styled";

import logo from "../../assets/images/logo.png";
import vid from "../../assets/images/header_vid.mp4";

// Language data - Добавлен 'by'
const languageData = {
  quote: {
    ru: "Подвиг ваш бессмертен, память о нем вечна!",
    en: "Your feat is immortal, your memory eternal!",
    by: "Подзвіг ваш бессмяротны, памяць пра яго вечная!", // Добавлено на белорусском
  },
  navigation: {
    region: {
      ru: "Области",
      en: "Regions",
      by: "Вобласці", // Добавлено на белорусском
    },
    heroes: {
      ru: "Наши Герои",
      en: "Our Heroes",
      by: "Нашы Героі", // Добавлено на белорусском
    },
    map: {
      ru: "Карта",
      en: "Map",
      by: "Карта", // Добавлено на белорусском
    },
    museums: {
      ru: "Музеи",
      en: "Museums",
      by: "Музеі", // Добавлено на белорусском
    },
    // about: { // <--- ЗАКОММЕНТИРОВАН ИЛИ УДАЛЕН, ЕСЛИ ЕГО НЕТ В НАВИГАЦИИ
    //   ru: "О проекте",
    //   en: "About",
    //   by: "Пра праект",
    // },
    regionsList: {
      vitebsk: { ru: "Витебская", en: "Vitebsk", by: "Віцебская" },
      minsk: { ru: "Минская", en: "Minsk", by: "Мінская" },
      grodno: { ru: "Гродненская", en: "Grodno", by: "Гродзенская" },
      mogilev: { ru: "Могилевская", en: "Mogilev", by: "Магілёўская" },
      brest: { ru: "Брестская", en: "Brest", by: "Брэсцкая" },
      gomel: { ru: "Гомельская", en: "Gomel", by: "Гомельская" },
    },
  },
  header: {
    title: {
      ru: "80 страниц истории",
      en: "80 Pages of History",
      by: "80 старонак гісторыі",
    },
    subtitle: {
      ru: "Великой Победы",
      en: "of the Great Victory",
      by: "Вялікай Перамогі",
    },
  },
};

const Header = () => {
  // const [language, setLanguage] = useState("ru"); // <--- УДАЛЯЕМ ЛОКАЛЬНОЕ СОСТОЯНИЕ
  const { language, setLanguage, getText } = useLanguage(); // <--- ИСПОЛЬЗУЕМ ХУК ЯЗЫКА

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // <--- УДАЛЯЕМ ЛОКАЛЬНУЮ ФУНКЦИЮ getText, теперь используем getText из контекста

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Функция для обработки смены языка через select
  const handleLanguageSelectChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <HeaderContainer>
      <TopSection>
        <LogoWrapper to="/patriot_80pages">
          <img src={logo} alt="WWII Victory Anniversary Logo" />
        </LogoWrapper>

        <NavDesktop>
          <DropdownContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/regions/vitebsk" // Примерная ссылка на страницу регионов по умолчанию
              className={
                location.pathname.startsWith("/regions") ? "active" : ""
              }
            >
              {getText(languageData.navigation.region)}{" "}
              {/* ИСПОЛЬЗУЕМ getText ИЗ КОНТЕКСТА */}
            </NavLink>
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem to="/regions/vitebsk">
                  {getText(languageData.navigation.regionsList.vitebsk)}{" "}
                  {/* ИСПОЛЬЗУЕМ getText */}
                </DropdownItem>
                <DropdownItem to="/regions/minsk">
                  {getText(languageData.navigation.regionsList.minsk)}
                </DropdownItem>
                <DropdownItem to="/regions/grodno">
                  {getText(languageData.navigation.regionsList.grodno)}
                </DropdownItem>
                <DropdownItem to="/regions/mogilev">
                  {getText(languageData.navigation.regionsList.mogilev)}
                </DropdownItem>
                <DropdownItem to="/regions/brest">
                  {getText(languageData.navigation.regionsList.brest)}
                </DropdownItem>
                <DropdownItem to="/regions/gomel">
                  {getText(languageData.navigation.regionsList.gomel)}
                </DropdownItem>
              </DropdownMenu>
            )}
          </DropdownContainer>

          <NavLink
            to="/heroes"
            className={location.pathname === "/heroes" ? "active" : ""}
          >
            {getText(languageData.navigation.heroes)} {/* ИСПОЛЬЗУЕМ getText */}
          </NavLink>
          <NavLink
            to="/map"
            className={location.pathname === "/map" ? "active" : ""}
          >
            {getText(languageData.navigation.map)} {/* ИСПОЛЬЗУЕМ getText */}
          </NavLink>
          <NavLink
            to="/museums"
            className={location.pathname === "/museums" ? "active" : ""}
          >
            {getText(languageData.navigation.museums)}{" "}
            {/* ИСПОЛЬЗУЕМ getText */}
          </NavLink>
          {/* <NavLink // <--- УДАЛЕНА ССЫЛКА НА /ABOUT, ЕСЛИ ЕЕ НЕ БЫЛО
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            {getText(languageData.navigation.about)}
          </NavLink> */}
        </NavDesktop>

        <LanguageSwitcher>
          <select
            value={language}
            onChange={handleLanguageSelectChange} // <--- ИСПОЛЬЗУЕМ НОВУЮ ФУНКЦИЮ
            aria-label="Select language"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="by">Беларускі</option>{" "}
            {/* <--- ДОБАВЛЕН БЕЛОРУССКИЙ ЯЗЫК */}
          </select>
        </LanguageSwitcher>
      </TopSection>

      <NavMobile isOpen={isMobileMenuOpen}>
        {" "}
        {/* is MobileMenuOpen уже используется для стилей */}
        {/* Для мобильного меню: можно сделать DropdownContainer или просто ссылку */}
        <NavLink
          to="/regions/vitebsk" // Примерная ссылка на страницу регионов по умолчанию
          onClick={toggleMobileMenu}
          className={location.pathname.startsWith("/regions") ? "active" : ""}
        >
          {getText(languageData.navigation.region)}
        </NavLink>
        <NavLink
          to="/heroes"
          onClick={toggleMobileMenu}
          className={location.pathname === "/heroes" ? "active" : ""}
        >
          {getText(languageData.navigation.heroes)}
        </NavLink>
        <NavLink
          to="/map"
          onClick={toggleMobileMenu}
          className={location.pathname === "/map" ? "active" : ""}
        >
          {getText(languageData.navigation.map)}
        </NavLink>
        <NavLink
          to="/museums"
          onClick={toggleMobileMenu}
          className={location.pathname === "/museums" ? "active" : ""}
        >
          {getText(languageData.navigation.museums)}
        </NavLink>
        {/* <NavLink // <--- УДАЛЕНА ССЫЛКА НА /ABOUT, ЕСЛИ ЕЕ НЕ БЫЛО
          to="/about"
          onClick={toggleMobileMenu}
          className={location.pathname === "/about" ? "active" : ""}
        >
          {getText(languageData.navigation.about)}
        </NavLink> */}
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
            <option value="by">Беларускі</option>{" "}
            {/* <--- ДОБАВЛЕН БЕЛОРУССКИЙ ЯЗЫК */}
          </select>
        </LanguageSwitcher>
      </NavMobile>

      <BottomSection>
        <TextContent>
          <Title>{getText(languageData.header.title)}</Title>
          <Subtitle>{getText(languageData.header.subtitle)}</Subtitle>
        </TextContent>
        <video
          style={{
            "z-index": "0",
            opacity: "0.7",
          }}
          width="440"
          muted={true}
          filter={"grayscale(1)"}
          loop
          autoPlay={true}
        >
          <source src={vid} type="video/mp4" />
        </video>
      </BottomSection>
    </HeaderContainer>
  );
};

export default Header;
