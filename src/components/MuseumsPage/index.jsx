import React from "react";

import { Link } from "react-router-dom";
import {
  MuseumsPageContainer,
  Title,
  MuseumList,
  MuseumCard,
  MuseumImageWrapper,
  MuseumImage,
  MuseumContent,
  MuseumName,
  MuseumDescription,
  ReadMoreLink,
} from "./styled";

// Примерные данные музеев по всей Беларуси
const museumsData = [
  {
    id: 1,
    name: {
      ru: "Белорусский государственный музей истории Великой Отечественной войны",
      en: "Belarusian State Museum of the History of the Great Patriotic War",
    },
    image: "https://placehold.co/120x120/87CEEB/FFFFFF?text=Музей+ВОВ",
    description: {
      ru: `Крупнейший в Беларуси музей, посвященный событиям Второй мировой войны. Содержит уникальные экспонаты, документы и личные вещи участников войны.`,
      en: `The largest museum in Belarus dedicated to the events of World War II. It contains unique exhibits, documents, and personal belongings of war participants.`,
    },
    wikipediaLink: "https://warmuseum.by/",
  },
  {
    id: 2,
    name: {
      ru: "Мемориальный комплекс «Брестская крепость-герой»",
      en: "Brest Hero-Fortress Memorial Complex",
    },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=Брест+Крепость",
    description: {
      ru: `Музейный комплекс, расположенный на территории легендарной Брестской крепости. Рассказывает о героической обороне крепости в 1941 году.`,
      en: `Museum complex located on the territory of the legendary Brest Fortress. It tells about the heroic defense of the fortress in 1941.`,
    },
    wikipediaLink: "https://brest-fortress.by/",
  },
  {
    id: 3,
    name: {
      ru: "Мемориальный комплекс «Хатынь»",
      en: "Khatyn Memorial Complex",
    },
    image: "https://placehold.co/120x120/90EE90/FFFFFF?text=Хатынь",
    description: {
      ru: `Мемориал в память о сотнях белорусских деревень, сожженных фашистами, и их жителей. Символ трагедии белорусского народа.`,
      en: `A memorial in memory of hundreds of Belarusian villages burned by the Nazis and their inhabitants. A symbol of the tragedy of the Belarusian people.`,
    },
    wikipediaLink: "https://khatyn.by/ru/",
  },
  {
    id: 4,
    name: {
      ru: "Мемориальный комплекс «Тростенец»",
      en: "Trostenets Memorial Complex",
    },
    image: "https://placehold.co/120x120/FFB6C1/FFFFFF?text=Тростенец",
    description: {
      ru: `Один из крупнейших лагерей смерти на оккупированной территории СССР, расположенный под Минском.`,
      en: `One of the largest death camps in the occupied territory of the USSR, located near Minsk.`,
    },
    wikipediaLink: "https://obeliski.by/trostenec",
  },
  {
    id: 5,
    name: {
      ru: "Музей партизанской славы (г.п. Ушачи)",
      en: "Museum of Partisan Glory (Ushachi)",
    },
    image: "https://placehold.co/120x120/FFDAB9/FFFFFF?text=Ушачи",
    description: {
      ru: `Музей, посвященный партизанскому движению на территории Витебской области.`,
      en: `A museum dedicated to the partisan movement in the Vitebsk region.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Музей_партизанской_славы_(Ушачи)",
  },
  {
    id: 6,
    name: {
      ru: "Музей обороны Могилева",
      en: "Museum of the Defense of Mogilev",
    },
    image: "https://placehold.co/120x120/D8BFD8/FFFFFF?text=Могилев",
    description: {
      ru: `Рассказывает о героической обороне города Могилева в первые месяцы войны.`,
      en: `Tells about the heroic defense of the city of Mogilev in the first months of the war.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Музей_обороны_Могилева",
  },
  {
    id: 7,
    name: {
      ru: "Музей истории Витебского гетто",
      en: "Museum of the History of the Vitebsk Ghetto",
    },
    image: "https://placehold.co/120x120/B0E0E6/FFFFFF?text=Витебск+Гетто",
    description: {
      ru: `Посвящен трагедии еврейского населения Витебска в период оккупации.`,
      en: `Dedicated to the tragedy of the Jewish population of Vitebsk during the occupation.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Витебское_гетто",
  },
  {
    id: 8,
    name: {
      ru: "Музей боевой славы (г. Гомель)",
      en: "Museum of Military Glory (Gomel)",
    },
    image: "https://placehold.co/120x120/FFC0CB/FFFFFF?text=Гомель",
    description: {
      ru: `Экспозиции, посвященные героической борьбе жителей Гомельщины в годы войны.`,
      en: `Expositions dedicated to the heroic struggle of the inhabitants of Gomel region during the war.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Гомельский_областной_музей_военной_славы",
  },
  {
    id: 9,
    name: {
      ru: "Музей воинской славы (г. Гродно)",
      en: "Museum of Military Glory (Grodno)",
    },
    image: "https://placehold.co/120x120/8FBC8F/FFFFFF?text=Гродно",
    description: {
      ru: `Представлены материалы об участии гродненцев в Великой Отечественной войне.`,
      en: `Presents materials on the participation of Grodno residents in the Great Patriotic War.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Гродненский_государственный_историко-археологический_музей",
  },
  {
    id: 10,
    name: {
      ru: "Историко-культурный комплекс «Линия Сталина»",
      en: "Historical and Cultural Complex 'Stalin Line'",
    },
    image: "https://placehold.co/120x120/FFDEAD/FFFFFF?text=Линия+Сталина",
    description: {
      ru: `Музей под открытым небом, посвященный оборонительным укреплениям 30-х годов и началу войны.`,
      en: `Open-air museum dedicated to defensive fortifications of the 1930s and the beginning of the war.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Линия_Сталина_(историко-культурный_комплекс)",
  },
  {
    id: 11,
    name: {
      ru: "Музей истории и краеведения (Полоцк)",
      en: "Museum of History and Local Lore (Polotsk)",
    },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=Полоцк",
    description: {
      ru: `Содержит экспозиции, отражающие военную историю Полоцка.`,
      en: `Contains expositions reflecting the military history of Polotsk.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Национальный_Полоцкий_историко-культурный_музей-заповедник",
  },
  {
    id: 12,
    name: {
      ru: "Музей «Озаричи» (Калинковичский район)",
      en: "Ozarichi Museum (Kalinkovichi District)",
    },
    image: "https://placehold.co/120x120/90EE90/FFFFFF?text=Озаричи",
    description: {
      ru: `Посвящен трагедии концентрационного лагеря «Озаричи».`,
      en: `Dedicated to the tragedy of the Ozarichi concentration camp.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Озаричи",
  },
  {
    id: 13,
    name: {
      ru: "Мемориальный музей-усадьба Янки Купалы (Вязынка)",
      en: "Yanka Kupala Memorial Museum-Estate (Viazynka)",
    },
    image: "https://placehold.co/120x120/FFB6C1/FFFFFF?text=Купала",
    description: {
      ru: `Хотя в основном посвящен жизни поэта, содержит элементы, отражающие его переживания в военные годы.`,
      en: `Although primarily dedicated to the life of the poet, it contains elements reflecting his experiences during the war years.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Вязынка",
  },
  {
    id: 14,
    name: {
      ru: "Музей Великой Отечественной войны (Барановичи)",
      en: "Museum of the Great Patriotic War (Baranovichi)",
    },
    image: "https://placehold.co/120x120/FFDAB9/FFFFFF?text=Барановичи",
    description: {
      ru: `Региональный музей, освещающий военные события в районе Барановичей.`,
      en: `A regional museum covering military events in the Baranovichi area.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Барановичи_(город)",
  },
  {
    id: 15,
    name: {
      ru: "Музей народной славы (Жлобин)",
      en: "Museum of People's Glory (Zhlobin)",
    },
    image: "https://placehold.co/120x120/D8BFD8/FFFFFF?text=Жлобин",
    description: {
      ru: `Собирает и хранит экспонаты, связанные с боевыми и трудовыми подвигами жителей Жлобинщины.`,
      en: `Collects and stores exhibits related to the military and labor exploits of the inhabitants of the Zhlobin region.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Жлобинский_историко-краеведческий_музей",
  },
  {
    id: 16,
    name: {
      ru: "Музей истории Могилева",
      en: "Museum of the History of Mogilev",
    },
    image: "https://placehold.co/120x120/B0E0E6/FFFFFF?text=Могилев",
    description: {
      ru: `Включает разделы, посвященные оккупации и освобождению города.`,
      en: `Includes sections dedicated to the occupation and liberation of the city.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Музей_истории_Могилёва",
  },
  {
    id: 17,
    name: {
      ru: "Волковысский военно-исторический музей им. П.И. Багратиона",
      en: "Volkovysk Military History Museum named after P.I. Bagration",
    },
    image: "https://placehold.co/120x120/FFC0CB/FFFFFF?text=Волковыск",
    description: {
      ru: `Музей, имеющий значительные экспозиции по истории войн, включая Великую Отечественную.`,
      en: `A museum with significant exhibitions on the history of wars, including the Great Patriotic War.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Волковысский_военно-исторический_музей_имени_П.И.Багратиона",
  },
  {
    id: 18,
    name: {
      ru: "Музей «Дорога Памяти» (Минск)",
      en: "Museum 'Road of Memory' (Minsk)",
    },
    image: "https://placehold.co/120x120/8FBC8F/FFFFFF?text=Дорога+Памяти",
    description: {
      ru: `Современный интерактивный музей, посвященный подвигу белорусского народа в Великой Отечественной войне.`,
      en: `A modern interactive museum dedicated to the feat of the Belarusian people in the Great Patriotic War.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Музей_истории_Великой_Отечественной_войны", // Ссылка на общий музей, т.к. "Дорога Памяти" может быть частью
  },
  {
    id: 19,
    name: {
      ru: "Пинский музей Белорусского Полесья",
      en: "Pinsk Museum of Belarusian Polesie",
    },
    image: "https://placehold.co/120x120/FFDEAD/FFFFFF?text=Пинск",
    description: {
      ru: `Включает раздел, рассказывающий о трагических событиях войны на Полесье.`,
      en: `Includes a section telling about the tragic events of the war in Polesie.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Музей_Белорусского_Полесья",
  },
  {
    id: 20,
    name: {
      ru: "Музей «Минск в годы войны»",
      en: "Museum 'Minsk during the War Years'",
    },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=Минск+война",
    description: {
      ru: `Экспозиция, посвященная жизни и борьбе Минска в период немецкой оккупации.`,
      en: `An exposition dedicated to the life and struggle of Minsk during the German occupation.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Музей_истории_Минска", // Ссылка на общий музей истории Минска
  },
  {
    id: 21,
    name: {
      ru: "Музей-усадьба А.В. Суворова (Кобрин)",
      en: "A.V. Suvorov Museum-Estate (Kobrin)",
    },
    image: "https://placehold.co/120x120/90EE90/FFFFFF?text=Суворов",
    description: {
      ru: `Хотя посвящен Суворову, содержит исторические справки о войнах на территории Беларуси.`,
      en: `Although dedicated to Suvorov, it contains historical information about wars on the territory of Belarus.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Кобринский_военно-исторический_музей_имени_А.В.Суворова",
  },
  {
    id: 22,
    name: {
      ru: "Музей истории Городка (Витебская область)",
      en: "Gorodok History Museum (Vitebsk Region)",
    },
    image: "https://placehold.co/120x120/FFB6C1/FFFFFF?text=Городок",
    description: {
      ru: `Освещает историю Городокского района, включая период Великой Отечественной войны.`,
      en: `Covers the history of the Gorodok district, including the period of the Great Patriotic War.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Городокский_краеведческий_музей",
  },
  {
    id: 23,
    name: {
      ru: "Музей истории города Бобруйска",
      en: "Museum of the History of Bobruisk",
    },
    image: "https://placehold.co/120x120/FFDAB9/FFFFFF?text=Бобруйск",
    description: {
      ru: `Представлены материалы об обороне Бобруйска и партизанском движении в регионе.`,
      en: `Presents materials on the defense of Bobruisk and the partisan movement in the region.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Бобруйский_краеведческий_музей",
  },
  {
    id: 24,
    name: { ru: "Музей-заповедник «Несвиж»", en: "Nesvizh Museum-Reserve" },
    image: "https://placehold.co/120x120/D8BFD8/FFFFFF?text=Несвиж",
    description: {
      ru: `Хотя основной фокус на истории рода Радзивиллов, иногда проводятся выставки, связанные с войной.`,
      en: `Although the main focus is on the history of the Radziwill family, exhibitions related to the war are sometimes held.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Несвижский_замок",
  },
  {
    id: 25,
    name: {
      ru: "Музей истории Слуцких поясов (Слуцк)",
      en: "Museum of the History of Slutsk Belts (Slutsk)",
    },
    image: "https://placehold.co/120x120/B0E0E6/FFFFFF?text=Слуцк",
    description: {
      ru: `Несмотря на специфику, содержит информацию о городе в период войн.`,
      en: `Despite its specificity, it contains information about the city during the war.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Слуцкий_пояс",
  },
];

const MuseumsPage = ({ language = "ru" }) => {
  const getText = (keyPath, item) => {
    const keys = keyPath.split(".");
    let current = item;
    for (let i = 0; i < keys.length; i++) {
      if (current && current[keys[i]] !== undefined) {
        current = current[keys[i]];
      } else {
        return "";
      }
    }
    return current[language] || current["ru"] || "";
  };

  return (
    <MuseumsPageContainer>
      <Title>МУЗЕИ</Title>
      <MuseumList>
        {museumsData.map((museum) => (
          <MuseumCard
            href={museum.wikipediaLink}
            target="_blank"
            rel="noopener noreferrer"
            key={museum.id}
          >
            <MuseumImageWrapper>
              <MuseumImage src={museum.image} alt={getText("name", museum)} />
            </MuseumImageWrapper>
            <MuseumContent>
              <MuseumName>{getText("name", museum)}</MuseumName>
              <MuseumDescription>
                {getText("description", museum)}
              </MuseumDescription>
              {/* {museum.wikipediaLink && (
                <ReadMoreLink
                  href={museum.wikipediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее..
                </ReadMoreLink>
              )} */}
            </MuseumContent>
          </MuseumCard>
        ))}
      </MuseumList>
    </MuseumsPageContainer>
  );
};

export default MuseumsPage;
