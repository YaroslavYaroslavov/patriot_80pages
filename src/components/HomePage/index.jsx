import React from "react";
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

// Предположим, что у вас есть language.json или аналогичный источник текста
const languageData = {
  homePage: {
    quoteLeft: {
      ru: '"Нет благороднее миссии, чем сохранение исторической памяти во имя светлого будущего."',
      en: '"There is no nobler mission than preserving historical memory for the sake of a bright future."',
    },
    quoteRight: {
      ru: '"Пусть наследники нацистов даже не мечтают, что когда уйдут последние свидетели геноцида белорусского и других народов, с ними уйдет историческая правда. Мы будем эту тему поднимать на самый высокий международный уровень, чтобы они помнили и не забывали"',
      en: '"Let the heirs of the Nazis not even dream that when the last witnesses of the genocide of the Belarusian and other peoples are gone, historical truth will also disappear with them. We will raise this topic to the highest international level so that they remember and do not forget."',
    },
    author: {
      ru: "А.Г. Лукашенко",
      en: "A.G. Lukashenko",
    },
  },
};

const HomePage = ({ language = "ru" }) => {
  // Принимаем язык как пропс, по умолчанию русский
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

  return (
    <HomePageContainer>
      {/* <FloralBackground /> */}
      <BookContainer>
        <LeftPage>
          <ImageWrapper>
            <img src={president} alt="Portrait of A.G. Lukashenko" />
          </ImageWrapper>
          <QuoteLeft>{getText("homePage.quoteLeft")}</QuoteLeft>
        </LeftPage>
        <RightPage>
          <QuoteRight>{getText("homePage.quoteRight")}</QuoteRight>
          <Signature>{getText("homePage.author")}</Signature>
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
        {/* <p style={{ fontWeight: "bold" }}>{getText("homePage.contacts")}</p> */}
        {/* <p style={{ fontWeight: "bold" }}>{getText("homePage.address")}</p> */}
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
        {getText("homePage.ourCollege")}
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
