import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext"; // Импортируем useLanguage

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
      by: "Беларускі дзяржаўны музей гісторыі Вялікай Айчыннай вайны",
    },
    image: "https://placehold.co/120x120/87CEEB/FFFFFF?text=Музей+ВОВ",
    description: {
      ru: `Крупнейший в Беларуси музей, посвященный событиям Второй мировой войны. Содержит уникальные экспонаты, документы и личные вещи участников войны.`,
      en: `The largest museum in Belarus dedicated to the events of World War II. It contains unique exhibits, documents, and personal belongings of war participants.`,
      by: `Найбуйнейшы ў Беларусі музей, прысвечаны падзеям Другой сусветнай вайны. Змяшчае ўнікальныя экспанаты, дакументы і асабістыя рэчы ўдзельнікаў вайны.`,
    },
    wikipediaLink: "https://warmuseum.by/",
  },
  {
    id: 2,
    name: {
      ru: "Мемориальный комплекс «Брестская крепость-герой»",
      en: "Brest Hero-Fortress Memorial Complex",
      by: "Мемарыяльны комплекс «Брэсцкая крэпасць-герой»",
    },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=Брест+Крепость",
    description: {
      ru: `Музейный комплекс, расположенный на территории легендарной Брестской крепости. Рассказывает о героической обороне крепости в 1941 году.`,
      en: `Museum complex located on the territory of the legendary Brest Fortress. It tells about the heroic defense of the fortress in 1941.`,
      by: `Музейны комплекс, размешчаны на тэрыторыі легендарнай Брэсцкай крэпасці. Распавядае пра гераічную абарону крэпасці ў 1941 годзе.`,
    },
    wikipediaLink: "https://brest-fortress.by/",
  },
  {
    id: 3,
    name: {
      ru: "Мемориальный комплекс «Хатынь»",
      en: "Khatyn Memorial Complex",
      by: "Мемарыяльны комплекс «Хатынь»",
    },
    image: "https://placehold.co/120x120/90EE90/FFFFFF?text=Хатынь",
    description: {
      ru: `Мемориал в память о сотнях белорусских деревень, сожженных фашистами, и их жителей. Символ трагедии белорусского народа.`,
      en: `A memorial in memory of hundreds of Belarusian villages burned by the Nazis and their inhabitants. A symbol of the tragedy of the Belarusian people.`,
      by: `Мемарыял у памяць пра сотні беларускіх вёсак, спаленых фашыстамі, і іх жыхароў. Сімвал трагедыі беларускага народа.`,
    },
    wikipediaLink: "https://khatyn.by/ru/",
  },
  {
    id: 4,
    name: {
      ru: "Мемориальный комплекс «Тростенец»",
      en: "Trostenets Memorial Complex",
      by: "Мемарыяльны комплекс «Трасцянец»",
    },
    image: "https://placehold.co/120x120/FFB6C1/FFFFFF?text=Тростенец",
    description: {
      ru: `Один из крупнейших лагерей смерти на оккупированной территории СССР, расположенный под Минском.`,
      en: `One of the largest death camps in the occupied territory of the USSR, located near Minsk.`,
      by: `Адзін з найбуйнейшых лагераў смерці на акупаванай тэрыторыі СССР, размешчаны пад Мінскам.`,
    },
    wikipediaLink: "https://obeliski.by/trostenec",
  },
  {
    id: 5,
    name: {
      ru: "Музей партизанской славы (г.п. Ушачи)",
      en: "Museum of Partisan Glory (Ushachi)",
      by: "Музей партызанскай славы (г.п. Ушачы)",
    },
    image: "https://placehold.co/120x120/FFDAB9/FFFFFF?text=Ушачи",
    description: {
      ru: `Музей, посвященный партизанскому движению на территории Витебской области.`,
      en: `A museum dedicated to the partisan movement in the Vitebsk region.`,
      by: `Музей, прысвечаны партызанскаму руху на тэрыторыі Віцебскай вобласці.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Музей_партизанской_славы_(Ушачи)",
  },
  {
    id: 6,
    name: {
      ru: "Музей обороны Могилева",
      en: "Museum of the Defense of Mogilev",
      by: "Музей абароны Магілёва",
    },
    image: "https://placehold.co/120x120/D8BFD8/FFFFFF?text=Могилев",
    description: {
      ru: `Рассказывает о героической обороне города Могилева в первые месяцы войны.`,
      en: `Tells about the heroic defense of the city of Mogilev in the first months of the war.`,
      by: `Распавядае пра гераічную абарону горада Магілёва ў першыя месяцы вайны.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Музей_обороны_Могилева",
  },
  {
    id: 7,
    name: {
      ru: "Музей истории Витебского гетто",
      en: "Museum of the History of the Vitebsk Ghetto",
      by: "Музей гісторыі Віцебскага гета",
    },
    image: "https://placehold.co/120x120/B0E0E6/FFFFFF?text=Витебск+Гетто",
    description: {
      ru: `Посвящен трагедии еврейского населения Витебска в период оккупации.`,
      en: `Dedicated to the tragedy of the Jewish population of Vitebsk during the occupation.`,
      by: `Прысвечаны трагедыі яўрэйскага насельніцтва Віцебска ў перыяд акупацыі.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Витебское_гетто",
  },
  {
    id: 8,
    name: {
      ru: "Музей боевой славы (г. Гомель)",
      en: "Museum of Military Glory (Gomel)",
      by: "Музей баявой славы (г. Гомель)",
    },
    image: "https://placehold.co/120x120/FFC0CB/FFFFFF?text=Гомель",
    description: {
      ru: `Экспозиции, посвященные героической борьбе жителей Гомельщины в годы войны.`,
      en: `Expositions dedicated to the heroic struggle of the inhabitants of Gomel region during the war.`,
      by: `Экспазіцыі, прысвечаныя гераічнай барацьбе жыхароў Гомельшчыны ў гады вайны.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Гомельский_областной_музей_военной_славы",
  },
  {
    id: 9,
    name: {
      ru: "Музей воинской славы (г. Гродно)",
      en: "Museum of Military Glory (Grodno)",
      by: "Музей воінскай славы (г. Гродна)",
    },
    image: "https://placehold.co/120x120/8FBC8F/FFFFFF?text=Гродно",
    description: {
      ru: `Представлены материалы об участии гродненцев в Великой Отечественной войне.`,
      en: `Presents materials on the participation of Grodno residents in the Great Patriotic War.`,
      by: `Прадстаўлены матэрыялы аб удзеле гарадзенцаў у Вялікай Айчыннай вайне.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Гродненский_государственный_историко-археологический_музей",
  },
  {
    id: 10,
    name: {
      ru: "Историко-культурный комплекс «Линия Сталина»",
      en: "Historical and Cultural Complex 'Stalin Line'",
      by: "Гісторыка-культурны комплекс «Лінія Сталіна»",
    },
    image: "https://placehold.co/120x120/FFDEAD/FFFFFF?text=Линия+Сталина",
    description: {
      ru: `Музей под открытым небом, посвященный оборонительным укреплениям 30-х годов и началу войны.`,
      en: `Open-air museum dedicated to defensive fortifications of the 1930s and the beginning of the war.`,
      by: `Музей пад адкрытым небам, прысвечаны абарончым умацаванням 30-х гадоў і пачатку вайны.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Линия_Сталина_(историко-культурный_комплекс)",
  },
  {
    id: 11,
    name: {
      ru: "Музей истории и краеведения (Полоцк)",
      en: "Museum of History and Local Lore (Polotsk)",
      by: "Музей гісторыі і краязнаўства (Полацк)",
    },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=Полоцк",
    description: {
      ru: `Содержит экспозиции, отражающие военную историю Полоцка.`,
      en: `Contains expositions reflecting the military history of Polotsk.`,
      by: `Змяшчае экспазіцыі, якія адлюстроўваюць ваенную гісторыю Полацка.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Национальный_Полоцкий_историко-культурный_музей-заповедник",
  },
  {
    id: 12,
    name: {
      ru: "Музей «Озаричи» (Калинковичский район)",
      en: "Ozarichi Museum (Kalinkovichi District)",
      by: "Музей «Азарычы» (Калінкавіцкі раён)",
    },
    image: "https://placehold.co/120x120/90EE90/FFFFFF?text=Озаричи",
    description: {
      ru: `Посвящен трагедии концентрационного лагеря «Озаричи».`,
      en: `Dedicated to the tragedy of the Ozarichi concentration camp.`,
      by: `Прысвечаны трагедыі канцэнтрацыйнага лагера «Азарычы».`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Озаричи",
  },
  {
    id: 13,
    name: {
      ru: "Мемориальный музей-усадьба Янки Купалы (Вязынка)",
      en: "Yanka Kupala Memorial Museum-Estate (Viazynka)",
      by: "Мемарыяльны музей-сядзіба Янкі Купалы (Вязынка)",
    },
    image: "https://placehold.co/120x120/FFB6C1/FFFFFF?text=Купала",
    description: {
      ru: `Хотя в основном посвящен жизни поэта, содержит элементы, отражающие его переживания в военные годы.`,
      en: `Although primarily dedicated to the life of the poet, it contains elements reflecting his experiences during the war years.`,
      by: `Хоць у асноўным прысвечаны жыццю паэта, змяшчае элементы, якія адлюстроўваюць яго перажыванні ў ваенныя гады.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Вязынка",
  },
  {
    id: 14,
    name: {
      ru: "Музей Великой Отечественной войны (Барановичи)",
      en: "Museum of the Great Patriotic War (Baranovichi)",
      by: "Музей Вялікай Айчыннай вайны (Баранавічы)",
    },
    image: "https://placehold.co/120x120/FFDAB9/FFFFFF?text=Барановичи",
    description: {
      ru: `Региональный музей, освещающий военные события в районе Барановичей.`,
      en: `A regional museum covering military events in the Baranovichi area.`,
      by: `Рэгіянальны музей, які асвятляе ваенныя падзеі ў раёне Баранавіч.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Барановичи_(город)",
  },
  {
    id: 15,
    name: {
      ru: "Музей народной славы (Жлобин)",
      en: "Museum of People's Glory (Zhlobin)",
      by: "Музей народнай славы (Жлобін)",
    },
    image: "https://placehold.co/120x120/D8BFD8/FFFFFF?text=Жлобин",
    description: {
      ru: `Собирает и хранит экспонаты, связанные с боевыми и трудовыми подвигами жителей Жлобинщины.`,
      en: `Collects and stores exhibits related to the military and labor exploits of the inhabitants of the Zhlobin region.`,
      by: `Збірае і захоўвае экспанаты, звязаныя з баявымі і працоўнымі подзвігамі жыхароў Жлобіншчыны.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Жлобинский_историко-краеведческий_музей",
  },
  {
    id: 16,
    name: {
      ru: "Музей истории Могилева",
      en: "Museum of the History of Mogilev",
      by: "Музей гісторыі Магілёва",
    },
    image: "https://placehold.co/120x120/B0E0E6/FFFFFF?text=Могилев",
    description: {
      ru: `Включает разделы, посвященные оккупации и освобождению города.`,
      en: `Includes sections dedicated to the occupation and liberation of the city.`,
      by: `Уключае раздзелы, прысвечаныя акупацыі і вызваленню горада.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Музей_истории_Могилёва",
  },
  {
    id: 17,
    name: {
      ru: "Волковысский военно-исторический музей им. П.И. Багратиона",
      en: "Volkovysk Military History Museum named after P.I. Bagration",
      by: "Ваўкавыскі ваенна-гістарычны музей імя П.І. Баграціёна",
    },
    image: "https://placehold.co/120x120/FFC0CB/FFFFFF?text=Волковыск",
    description: {
      ru: `Музей, имеющий значительные экспозиции по истории войн, включая Великую Отечественную.`,
      en: `A museum with significant exhibitions on the history of wars, including the Great Patriotic War.`,
      by: `Музей, які мае значныя экспазіцыі па гісторыі войнаў, уключаючы Вялікую Айчынную.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Волковысский_военно-исторический_музей_имени_П.И.Багратиона",
  },
  {
    id: 18,
    name: {
      ru: "Музей «Дорога Памяти» (Минск)",
      en: "Museum 'Road of Memory' (Minsk)",
      by: "Музей «Дарога Памяці» (Мінск)",
    },
    image: "https://placehold.co/120x120/8FBC8F/FFFFFF?text=Дорога+Памяти",
    description: {
      ru: `Современный интерактивный музей, посвященный подвигу белорусского народа в Великой Отечественной войне.`,
      en: `A modern interactive museum dedicated to the feat of the Belarusian people in the Great Patriotic War.`,
      by: `Сучасны інтэрактыўны музей, прысвечаны подзвігу беларускага народа ў Вялікай Айчыннай вайне.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Музей_истории_Великой_Отечественной_войны", // Ссылка на общий музей, т.к. "Дорога Памяти" может быть частью
  },
  {
    id: 19,
    name: {
      ru: "Пинский музей Белорусского Полесья",
      en: "Pinsk Museum of Belarusian Polesie",
      by: "Пінскі музей Беларускага Палесся",
    },
    image: "https://placehold.co/120x120/FFDEAD/FFFFFF?text=Пинск",
    description: {
      ru: `Включает раздел, рассказывающий о трагических событиях войны на Полесье.`,
      en: `Includes a section telling about the tragic events of the war in Polesie.`,
      by: `Уключае раздзел, які распавядае пра трагічныя падзеі вайны на Палессі.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Музей_Белорусского_Полесья",
  },
  {
    id: 20,
    name: {
      ru: "Музей «Минск в годы войны»",
      en: "Museum 'Minsk during the War Years'",
      by: "Музей «Мінск у гады вайны»",
    },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=Минск+война",
    description: {
      ru: `Экспозиция, посвященная жизни и борьбе Минска в период немецкой оккупации.`,
      en: `An exposition dedicated to the life and struggle of Minsk during the German occupation.`,
      by: `Экспазіцыя, прысвечаная жыццю і барацьбе Мінска ў перыяд нямецкай акупацыі.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Музей_истории_Минска", // Ссылка на общий музей истории Минска
  },
  {
    id: 21,
    name: {
      ru: "Музей-усадьба А.В. Суворова (Кобрин)",
      en: "A.V. Suvorov Museum-Estate (Kobrin)",
      by: "Музей-сядзіба А.В. Суворава (Кобрын)",
    },
    image: "https://placehold.co/120x120/90EE90/FFFFFF?text=Суворов",
    description: {
      ru: `Хотя посвящен Суворову, содержит исторические справки о войнах на территории Беларуси.`,
      en: `Although dedicated to Suvorov, it contains historical information about wars on the territory of Belarus.`,
      by: `Хоць прысвечаны Сувораву, змяшчае гістарычныя даведкі пра войны на тэрыторыі Беларусі.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Кобринский_военно-исторический_музей_имени_А.В.Суворова",
  },
  {
    id: 22,
    name: {
      ru: "Музей истории Городка (Витебская область)",
      en: "Gorodok History Museum (Vitebsk Region)",
      by: "Музей гісторыі Гарадка (Віцебская вобласць)",
    },
    image: "https://placehold.co/120x120/FFB6C1/FFFFFF?text=Городок",
    description: {
      ru: `Освещает историю Городокского района, включая период Великой Отечественной войны.`,
      en: `Covers the history of the Gorodok district, including the period of the Great Patriotic War.`,
      by: `Асвятляе гісторыю Гарадоцкага раёна, уключаючы перыяд Вялікай Айчыннай вайны.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Городокский_краеведческий_музей",
  },
  {
    id: 23,
    name: {
      ru: "Музей истории города Бобруйска",
      en: "Museum of the History of Bobruisk",
      by: "Музей гісторыі горада Бабруйска",
    },
    image: "https://placehold.co/120x120/FFDAB9/FFFFFF?text=Бобруйск",
    description: {
      ru: `Представлены материалы об обороне Бобруйска и партизанском движении в регионе.`,
      en: `Presents materials on the defense of Bobruisk and the partisan movement in the region.`,
      by: `Прадстаўлены матэрыялы аб абароне Бабруйска і партызанскім руху ў рэгіёне.`,
    },
    wikipediaLink:
      "https://ru.wikipedia.org/wiki/Бобруйский_краеведческий_музей",
  },
  {
    id: 24,
    name: {
      ru: "Музей-заповедник «Несвиж»",
      en: "Nesvizh Museum-Reserve",
      by: "Музей-запаведнік «Нясвіж»",
    },
    image: "https://placehold.co/120x120/D8BFD8/FFFFFF?text=Несвиж",
    description: {
      ru: `Хотя основной фокус на истории рода Радзивиллов, иногда проводятся выставки, связанные с войной.`,
      en: `Although the main focus is on the history of the Radziwill family, exhibitions related to the war are sometimes held.`,
      by: `Хоць асноўны фокус на гісторыі роду Радзівілаў, часам праводзяцца выставы, звязаныя з вайной.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Несвижский_замок",
  },
  {
    id: 25,
    name: {
      ru: "Музей истории Слуцких поясов (Слуцк)",
      en: "Museum of the History of Slutsk Belts (Slutsk)",
      by: "Музей гісторыі Слуцкіх паясоў (Слуцк)",
    },
    image: "https://placehold.co/120x120/B0E0E6/FFFFFF?text=Слуцк",
    description: {
      ru: `Несмотря на специфику, содержит информацию о городе в период войн.`,
      en: `Despite its specificity, it contains information about the city during the war.`,
      by: `Нягледзячы на спецыфіку, змяшчае інфармацыю аб горадзе ў перыяд войнаў.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Слуцкий_пояс",
  },
];

const MuseumsPage = () => {
  const { language } = useLanguage(); // Получаем текущий язык из контекста

  // Встроенные переводы для статических строк
  const staticTexts = {
    title: {
      ru: "МУЗЕИ",
      en: "MUSEUMS",
      by: "МУЗЕІ",
    },
    readMore: {
      ru: "Подробнее..",
      en: "Read more..",
      by: "Падрабязней..",
    },
  };

  // Функция для получения текста для статических строк
  const getStaticText = (key) => {
    return staticTexts[key][language] || staticTexts[key].ru;
  };

  // Функция для получения текста для динамических данных (название, описание музея)
  const getMuseumDataText = (data) => {
    return data[language] || data.ru;
  };

  return (
    <MuseumsPageContainer>
      <Title>{getStaticText("title")}</Title>
      <MuseumList>
        {museumsData.map((museum) => (
          <MuseumCard
            href={museum.wikipediaLink}
            target="_blank"
            rel="noopener noreferrer"
            key={museum.id}
          >
            <MuseumImageWrapper>
              {/* Локализуем alt-текст */}
              <MuseumImage
                src={museum.image}
                alt={getMuseumDataText(museum.name)}
              />
            </MuseumImageWrapper>
            <MuseumContent>
              {/* Локализуем название музея */}
              <MuseumName>{getMuseumDataText(museum.name)}</MuseumName>
              {/* Локализуем описание музея */}
              <MuseumDescription>
                {getMuseumDataText(museum.description)}
              </MuseumDescription>
              {/* Если нужна ссылка "Подробнее", она также будет локализована */}
              {/*
              {museum.wikipediaLink && (
                <ReadMoreLink
                  href={museum.wikipediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getStaticText("readMore")}
                </ReadMoreLink>
              )}
              */}
            </MuseumContent>
          </MuseumCard>
        ))}
      </MuseumList>
    </MuseumsPageContainer>
  );
};

export default MuseumsPage;
