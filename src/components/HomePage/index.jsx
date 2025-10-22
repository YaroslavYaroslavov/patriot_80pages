import React from "react";
import { useLanguage } from "../../context/LanguageContext"; // Импортируем useLanguage

import {
  HomePageContainer,
  BookContainer,
  LeftPage,
  RightPage,
  ImageWrapper,
  QuoteLeft,
  QuoteRight,
  Signature,
  FloralBackground,
} from "./styled";
import president from "../../assets/images/president.jpg";

// Данные для локализации, встроенные в компонент
const homePageLanguageData = {
  quoteLeft: {
    ru: '"Нет благороднее миссии, чем сохранение исторической памяти во имя светлого будущего."',
    en: '"There is no nobler mission than preserving historical memory for the sake of a bright future."',
    by: '"Няма больш высакароднай місіі, чым захаванне гістарычнай памяці ў імя светлай будучыні."',
  },
  quoteRight: {
    ru: '"Пусть наследники нацистов даже не мечтают, что когда уйдут последние свидетели геноцида белорусского и других народов, с ними уйдет историческая правда. Мы будем эту тему поднимать на самый высокий международный уровень, чтобы они помнили и не забывали"',
    en: '"Let the heirs of the Nazis not even dream that when the last witnesses of the genocide of the Belarusian and other peoples are gone, historical truth will also disappear with them. We will raise this topic to the highest international level so that they remember and do not forget."',
    by: '"Няхай нашчадкі нацыстаў нават не мараць, што калі сыдуць апошнія сведкі генацыду беларускага і іншых народаў, з імі сыдзе гістарычная праўда. Мы будзем гэтую тэму падымаць на самы высокі міжнародны ўзровень, каб яны памяталі і не забывалі."',
  },
  author: {
    ru: "А.Г. Лукашенко",
    en: "A.G. Lukashenko",
    by: "А.Г. Лукашэнка",
  },
  ourCollege: {
    ru: "Наш колледж",
    en: "Our College",
    by: "Наш каледж",
  },
};

const HomePage = () => {
  const { language } = useLanguage(); // Получаем текущий язык из контекста

  // Функция для получения текста на текущем языке
  const getText = (key) => {
    return (
      homePageLanguageData[key][language] || homePageLanguageData[key]["ru"]
    ); // Возвращаем текст на текущем языке или на русском по умолчанию
  };

  return (
    <HomePageContainer>
      {/* <FloralBackground /> */}
      <BookContainer>
        <LeftPage>
          <ImageWrapper>
            <img src={president} alt={getText("author")} />
          </ImageWrapper>
          <QuoteLeft>{getText("quoteLeft")}</QuoteLeft>
        </LeftPage>
        <RightPage>
          <QuoteRight>{getText("quoteRight")}</QuoteRight>
          <Signature>{getText("author")}</Signature>
        </RightPage>
      </BookContainer>
      {/* Дополнительный контент из нижней части изображения */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "black",
        }}
      >
        {/* Здесь можно добавить дополнительный локализованный контент, если потребуется */}
        {/* Например: <p style={{ fontWeight: "bold" }}>{getText("contacts")}</p> */}
        {/* <p style={{ fontWeight: "bold" }}>{getText("address")}</p> */}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        {getText("ourCollege")}
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
