import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const HeaderContainer = styled.header`
  --color-green: #4caf50; /* Яркий зеленый цвет */
  --color-red: #e53935; /* Яркий красный цвет */
  --color-text-dark: #1a1a1a;
  --color-text-light: #f0f0f0;
  --color-primary-accent: #007bff;
  --font-family-sans: "Arial", sans-serif;

  background: linear-gradient(
    to bottom,
    var(--color-red) 66.67%,
    /* 2/3 красного */ var(--color-green) 33.33% /* 1/3 зеленого */
  );

  padding-bottom: 2rem;
  color: var(--color-text-dark);
  font-family: var(--font-family-sans);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background-color: var(--color-green); /* Используем зеленый из флага */
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 50px;

    transform: scale(4);
    transition: transform 0.3s ease;
    z-index: 99999;
    padding-top: 15px;
    padding-left: 20px;
  }

  &:hover img {
    transform: scale(4.2);
  }

  @media (max-width: 768px) {
    img {
      height: 3.5rem;
    }
  }
`;

export const NavDesktop = styled.nav`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  color: var(--color-text-light);
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  padding: 0.5rem 0.25rem;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 3px;
    background-color: var(--color-primary-accent);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--color-primary-accent);
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: var(--color-primary-accent);
  }

  &.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 0.75rem 0;
    display: block;
    text-align: center;
    font-size: 1.2rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 0.5rem;
    }
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  height: 100%; /* Make sure it takes full height for hover */
  display: flex;
  align-items: center;

  &:hover > ${NavLink} {
    color: var(--color-primary-accent);
  }
  &:hover > ${NavLink}::after {
    width: 100%;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; /* Position below the "Области" link */
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-width: 150px;
  z-index: 200; /* Ensure it's above other content */
  padding: 10px 0;
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 15px;
  color: var(--color-text-dark);
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap; /* Prevent text wrapping */

  &:hover {
    background-color: #f0f0f0;
    color: var(--color-primary-accent);
  }
`;

export const BottomSection = styled.div`
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 1) 100%
  );

  color: var(--color-text-light);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-image: url("https://placehold.co/1920x1080/000000/FFFFFF?text=Background+Texture"); */
    opacity: 0.1;
    z-index: 10;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2.5rem 1.5rem;
    align-items: center;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 0.75rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
  }
`;

export const Subtitle = styled.h1`
  font-size: 55px;
  margin-bottom: 2rem;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

export const VideoPlaceholder = styled.div`
  width: 350px;
  height: 200px;
  background-color: #ffd700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-dark);
  font-weight: bold;
  font-size: 1.1rem;
  border: 3px dashed var(--color-text-dark);
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 180px;
    font-size: 1rem;
  }
`;
export const LanguageSwitcher = styled.div`
  display: flex; // <--- ИЗМЕНЕНО: Для отображения кнопок в ряд
  gap: 5px; // <--- ИЗМЕНЕНО: Промежуток между кнопками
  @media (max-width: 768px) {
    display: flex; // <--- ИЗМЕНЕНО: Показываем кнопки в мобильной версии
    justify-content: center; // Центрируем кнопки
    margin-top: 1rem;
    width: 100%; // Занимаем всю ширину
  }
`;
export const LanguageButton = styled.button`
  background: ${(props) =>
    props.isActive
      ? "#007bff"
      : "white"}; // Активная кнопка синяя, неактивная белая
  border: 1px solid ${(props) => (props.isActive ? "#007bff" : "#ccc")};
  color: ${(props) =>
    props.isActive ? "white" : "#555"}; // Цвет текста меняется
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem; // Чуть больше шрифт
  transition: all 0.2s ease;
  min-width: 40px; // Минимальная ширина для выравнивания
  &:hover {
    background-color: ${(props) =>
      props.isActive ? "#0056b3" : "#f0f0f0"}; // Темнее при наведении
    color: ${(props) => (props.isActive ? "white" : "#333")};
  }
`;
export const MobileMenuIcon = styled.button`
  // ... (Ваши существующие стили)
`;
export const NavMobile = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: var(--color-green);
  padding: 1rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(
    ${(props) => (props.isOpen ? "0" : "-100%")}
  ); // <--- ИСПОЛЬЗУЕМ isOp
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: transform 0.4s ease, opacity 0.4s ease, visibility 0.4s;
  @media (min-width: 769px) {
    display: none;
  }
`;
