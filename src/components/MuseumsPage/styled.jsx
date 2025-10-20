import styled from "styled-components";

export const MuseumsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background-color: #f8f8f8;
  min-height: calc(
    100vh - var(--header-height, 100px)
  ); /* Adjust based on your header height */
  font-family: "Arial", sans-serif;
  position: relative;
  overflow: hidden;

  /* Декоративные фоновые элементы (по аналогии с OurHeroes) */
  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 0;
    width: 250px;
    height: 250px;
    background-image: url("https://placehold.co/250x250/E0E0E0/FFFFFF?text=Museum+Deco+1"); /* Замените на ваше изображение */
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.3;
    transform: rotate(-10deg);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 5%;
    right: 0;
    width: 200px;
    height: 200px;
    background-image: url("https://placehold.co/200x200/E8E8E8/FFFFFF?text=Museum+Deco+2"); /* Замените на ваше изображение */
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.2;
    transform: rotate(20deg);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;

export const MuseumList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const MuseumCard = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }
`;

export const MuseumImageWrapper = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;
  border: 3px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;
  }
`;

export const MuseumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MuseumContent = styled.div`
  flex-grow: 1;
`;

export const MuseumName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const MuseumDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;

  display: -webkit-box;
  -webkit-line-clamp: 4; /* Показать до 4 строк */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ReadMoreLink = styled.a`
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;
