import styled from "styled-components";
import bg2 from "../../assets/images/bg2.png";

export const OurHeroesContainer = styled.div`
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
  overflow: hidden; /* For background decorative elements */

  background-image: url(${bg2});
  background-position: 80% 100%;
  background-size: 105%;
  background-attachment: fixed;
  /* Decorative background elements as in the image */
  &::before {
    content: "";
    position: absolute;
    top: 5%;
    right: 0;
    width: 300px; /* Adjust size */
    height: 300px; /* Adjust size */
    background-image: url("https://placehold.co/300x300/F0F0F0/FFFFFF?text=Decorative+Element+1"); /* Replace with your actual image */
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.4;
    transform: rotate(15deg);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5%;
    left: 10%;
    width: 200px; /* Adjust size */
    height: 200px; /* Adjust size */
    background-image: url("https://placehold.co/200x200/E8E8E8/FFFFFF?text=Decorative+Element+2"); /* Replace with your actual image */
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.3;
    transform: rotate(-25deg);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    &::before,
    &::after {
      display: none; /* Hide decorative elements on mobile */
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #7781ff;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 1; /* Bring title above background elements */

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;

export const HeroList = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(400px, 1fr)
  ); /* Responsive grid */
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1; /* Bring hero cards above background elements */

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 1.5rem;
  }
`;

export const HeroCard = styled.div`
  display: flex;
  align-items: flex-start; /* Align content to the top */
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

export const HeroImageWrapper = styled.div`
  flex-shrink: 0; /* Prevent image from shrinking */
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;
  border: 3px solid #ccc; /* Subtle border */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  flex-grow: 1; /* Allow content to take up remaining space */
`;

export const HeroName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const HeroBio = styled.p`
  font-size: 22px;
  text-align: justify;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;

  /* Ограничить количество строк */
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
