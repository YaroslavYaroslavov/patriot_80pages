import styled from "styled-components";

export const MapPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: calc(100vh - var(--header-height, 100px));
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

export const FullWidthMapContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* Ограничиваем ширину для больших экранов */
  height: 600px; /* Фиксированная высота карты */
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Для применения border-radius к карте */

  @media (max-width: 768px) {
    height: 400px; /* Меньшая высота на мобильных */
  }
`;
