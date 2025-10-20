import React from "react";
import { Link } from "react-router-dom";
import {
  OurHeroesContainer,
  HeroList,
  HeroCard,
  HeroImageWrapper,
  HeroImage,
  HeroContent,
  HeroName,
  HeroBio,
  ReadMoreLink,
  Title,
} from "./styled";

// Примерные данные героев
// В реальном приложении эти данные могли бы приходить с сервера или из файла JSON
const heroesData = [
  {
    id: 1,
    name: {
      ru: "Богорад Самуил Нахманович",
      en: "Bogorad Samuil Nakhmanovich",
    },
    image: "https://placehold.co/120x120/87CEEB/FFFFFF?text=Б.С.Н.", // Замените на реальное изображение
    bio: {
      ru: `Самуил Нахманович Богорад родился в Витебске. В 1935 году окончил Ленинградский морской техникум. До 1940 года работал помощником капитана на судах Балтийского морского пароходства. Отличился зимой 1944–1945 гг. Подводная лодка под его командованием за 2 похода потопила 7 вражеских транспортов.`,
      en: `Samuil Nakhmanovich Bogorad was born in Vitebsk. In 1935, he graduated from the Leningrad Maritime Technical School. Until 1940, he worked as an assistant captain on ships of the Baltic Shipping Company. Distinguished himself in the winter of 1944–1945. The submarine under his command sank 7 enemy transports in 2 campaigns.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Богорад,_Самуил_Нахманович",
  },
  {
    id: 2,
    name: {
      ru: "Кондратенко Пётр Егорович",
      en: "Kondratenko Pyotr Egorovich",
    },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=К.П.Е.", // Замените на реальное изображение
    bio: {
      ru: `Красноармеец, за освобождение Витебщины стал Героем Советского Союза (1944). Почетный гражданин Витебска (1994). В рассказах о подвиге героя говорится, что он «в ночь на 23 июня он проделал четыре прохода в проволочных заграждениях и обозначил их вешками, обезвредил 387 м.`,
      en: `Red Army soldier, for the liberation of the Vitebsk region became a Hero of the Soviet Union (1944). Honorary citizen of Vitebsk (1994). Stories about the hero's feat say that "on the night of June 23, he made four passages through wire obstacles and marked them with stakes, disarming 387 m."`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Кондратенко,_Пётр_Егорович",
  },
  {
    id: 3,
    name: { ru: "Иванов Иван Иванович", en: "Ivanov Ivan Ivanovich" },
    image: "https://placehold.co/120x120/90EE90/FFFFFF?text=И.И.И.",
    bio: {
      ru: `Летчик-ас, совершивший более 300 боевых вылетов. Проявил исключительное мужество и героизм в воздушных боях над Восточным фронтом. Уничтожил множество вражеских самолетов.`,
      en: `Ace pilot who made over 300 combat sorties. Showed exceptional courage and heroism in air battles over the Eastern Front. Destroyed many enemy aircraft.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Иванов,_Иван_Иванович",
  },
  {
    id: 4,
    name: { ru: "Петрова Анна Сергеевна", en: "Petrova Anna Sergeevna" },
    image: "https://placehold.co/120x120/FFB6C1/FFFFFF?text=П.А.С.",
    bio: {
      ru: `Медицинская сестра, спасшая десятки раненых солдат под непрекращающимся огнем. Ее самоотверженность и отвага были примером для всех сослуживцев.`,
      en: `A nurse who saved dozens of wounded soldiers under continuous fire. Her selflessness and courage were an example to all her colleagues.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Петрова,_Анна_Сергеевна",
  },
  {
    id: 5,
    name: { ru: "Сидоров Николай Петрович", en: "Sidorov Nikolay Petrovich" },
    image: "https://placehold.co/120x120/FFDAB9/FFFFFF?text=С.Н.П.",
    bio: {
      ru: `Командир танкового экипажа, участвовавший в Курской битве. Его танк первым прорвал оборону противника, открыв путь для наступления основных сил.`,
      en: `Tank crew commander who participated in the Battle of Kursk. His tank was the first to break through enemy defenses, opening the way for the main forces to advance.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Сидоров,_Николай_Петрович",
  },
  {
    id: 6,
    name: { ru: "Смирнова Елена Викторовна", en: "Smirnova Elena Viktorovna" },
    image:
      "https://i.pinimg.com/originals/16/bc/22/16bc22d80218925bac5b1ece038c195f.jpg",
    bio: {
      ru: `Разведчица, неоднократно добывавшая ценные сведения о расположении и планах противника. Действовала в глубоком тылу врага, проявляя чудеса маскировки и хитрости.`,
      en: `A scout who repeatedly obtained valuable information about the enemy's location and plans. Operated deep behind enemy lines, showing wonders of camouflage and cunning.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Смирнова,_Елена_Викторовна",
  },
  {
    id: 7,
    name: {
      ru: "Кузнецов Михаил Андреевич",
      en: "Kuznetsov Mikhail Andreevich",
    },
    image: "https://placehold.co/120x120/B0E0E6/FFFFFF?text=К.М.А.",
    bio: {
      ru: `Артиллерист, уничтоживший множество вражеских укреплений и огневых точек. Его меткий огонь обеспечивал успешное продвижение пехоты.`,
      en: `Artilleryman who destroyed many enemy fortifications and firing points. His accurate fire ensured the successful advance of the infantry.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Кузнецов,_Михаил_Андреевич",
  },
  {
    id: 8,
    name: { ru: "Волкова Мария Ивановна", en: "Volkova Maria Ivanovna" },
    image: "https://placehold.co/120x120/FFC0CB/FFFFFF?text=В.М.И.",
    bio: {
      ru: `Партизанка, участвовавшая в многочисленных диверсиях против оккупантов. Ее отряд нанес значительный урон вражеским коммуникациям.`,
      en: `Partisan who participated in numerous acts of sabotage against the occupiers. Her detachment inflicted significant damage on enemy communications.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Волкова,_Мария_Ивановна",
  },
  {
    id: 9,
    name: { ru: "Герасимов Олег Викторович", en: "Gerasimov Oleg Viktorovich" },
    image: "https://placehold.co/120x120/8FBC8F/FFFFFF?text=Г.О.В.",
    bio: {
      ru: `Снайпер, на счету которого десятки уничтоженных вражеских солдат и офицеров. Его хладнокровие и точность вселяли страх в противника.`,
      en: `Sniper, credited with dozens of destroyed enemy soldiers and officers. His coolness and accuracy instilled fear in the enemy.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Герасимов,_Олег_Викторович",
  },
  {
    id: 10,
    name: {
      ru: "Зайцева Светлана Николаевна",
      en: "Zaytseva Svetlana Nikolaevna",
    },
    image: "https://placehold.co/120x120/FFDEAD/FFFFFF?text=З.С.Н.",
    bio: {
      ru: `Подпольщица, организовавшая издание и распространение антифашистских листовок в оккупированном городе.`,
      en: `Underground activist who organized the publication and distribution of anti-fascist leaflets in the occupied city.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Зайцева,_Светлана_Николаевна",
  },
  {
    id: 11,
    name: { ru: "Королев Сергей Павлович", en: "Korolev Sergey Pavlovich" },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=К.С.П.",
    bio: {
      ru: `Инженер, разработавший и внедривший новые образцы военной техники, сыгравшие ключевую роль в переломе хода войны.`,
      en: `Engineer who developed and introduced new models of military equipment that played a key role in turning the tide of the war.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Королев,_Сергей_Павлович",
  },
  {
    id: 12,
    name: {
      ru: "Лебедев Виктор Михайлович",
      en: "Lebedev Viktor Mikhailovich",
    },
    image: "https://placehold.co/120x120/90EE90/FFFFFF?text=Л.В.М.",
    bio: {
      ru: `Матрос, отличившийся в морских сражениях. Неоднократно проявлял мужество и отвагу при защите морских рубежей.`,
      en: `Sailor who distinguished himself in naval battles. Repeatedly showed courage and bravery in defending maritime borders.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Лебедев,_Виктор_Михайлович",
  },
  {
    id: 13,
    name: { ru: "Морозова Ольга Сергеевна", en: "Morozova Olga Sergeevna" },
    image: "https://placehold.co/120x120/FFB6C1/FFFFFF?text=М.О.С.",
    bio: {
      ru: `Летчица, участница "Ночных ведьм". Совершила множество успешных бомбардировочных вылетов, нанося точные удары по врагу.`,
      en: `Pilot, participant of the "Night Witches". Made many successful bombing sorties, delivering accurate strikes against the enemy.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Морозова,_Ольга_Сергеевна",
  },
  {
    id: 14,
    name: {
      ru: "Новиков Дмитрий Алексеевич",
      en: "Novikov Dmitry Alekseevich",
    },
    image: "https://placehold.co/120x120/FFDAB9/FFFFFF?text=Н.Д.А.",
    bio: {
      ru: `Пехотинец, участвовавший в штурме Берлина. Проявил исключительное мужество и отвагу в уличных боях.`,
      en: `Infantryman who participated in the storming of Berlin. Showed exceptional courage and bravery in street fighting.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Новиков,_Дмитрий_Алексеевич",
  },
  {
    id: 15,
    name: { ru: "Орлова Екатерина Петровна", en: "Orlova Ekaterina Petrovna" },
    image: "https://placehold.co/120x120/D8BFD8/FFFFFF?text=О.Е.П.",
    bio: {
      ru: `Связистка, обеспечивавшая бесперебойную связь в самых сложных условиях. Благодаря ей штаб получал актуальную информацию.`,
      en: `Communications operator who ensured uninterrupted communication in the most difficult conditions. Thanks to her, the headquarters received up-to-date information.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Орлова,_Екатерина_Петровна",
  },
  {
    id: 16,
    name: { ru: "Павлов Андрей Сергеевич", en: "Pavlov Andrey Sergeevich" },
    image: "https://placehold.co/120x120/B0E0E6/FFFFFF?text=П.А.С.",
    bio: {
      ru: `Пулеметчик, удерживавший важные позиции против многократно превосходящих сил противника.`,
      en: `Machine gunner who held important positions against numerically superior enemy forces.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Павлов,_Андрей_Сергеевич",
  },
  {
    id: 17,
    name: {
      ru: "Рыбакова Надежда Федоровна",
      en: "Rybakova Nadezhda Fedorovna",
    },
    image: "https://placehold.co/120x120/FFC0CB/FFFFFF?text=Р.Н.Ф.",
    bio: {
      ru: `Полевая санитарка, выносившая раненых с поля боя под шквальным огнем.`,
      en: `Field medic who carried the wounded from the battlefield under heavy fire.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Рыбакова,_Надежда_Федоровна",
  },
  {
    id: 18,
    name: { ru: "Соколов Владимир Игоревич", en: "Sokolov Vladimir Igorevich" },
    image: "https://placehold.co/120x120/8FBC8F/FFFFFF?text=С.В.И.",
    bio: {
      ru: `Танкист, совершивший глубокий рейд в тыл врага и уничтоживший стратегически важный объект.`,
      en: `Tanker who made a deep raid behind enemy lines and destroyed a strategically important object.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Соколов,_Владимир_Игоревич",
  },
  {
    id: 19,
    name: { ru: "Тарасова Вера Николаевна", en: "Tarasova Vera Nikolaevna" },
    image: "https://placehold.co/120x120/FFDEAD/FFFFFF?text=Т.В.Н.",
    bio: {
      ru: `Зенитчица, защищавшая небо над городами от вражеских бомбардировщиков.`,
      en: `Anti-aircraft gunner who defended the skies over cities from enemy bombers.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Тарасова,_Вера_Николаевна",
  },
  {
    id: 20,
    name: { ru: "Устинов Георгий Борисович", en: "Ustinov Georgy Borisovich" },
    image: "https://placehold.co/120x120/ADD8E6/FFFFFF?text=У.Г.Б.",
    bio: {
      ru: `Сапер, разминировавший сотни квадратных километров территории и обезвредивший тысячи мин.`,
      en: `Sapper who cleared hundreds of square kilometers of territory and defused thousands of mines.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Устинов,_Георгий_Борисович",
  },
];

const OurHeroes = ({ language = "ru" }) => {
  const getText = (keyPath, hero) => {
    const keys = keyPath.split(".");
    let current = hero;
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
    <OurHeroesContainer>
      <Title>НАШИ ГЕРОИ</Title>
      <HeroList>
        {heroesData.map((hero) => (
          <HeroCard key={hero.id}>
            <HeroImageWrapper>
              <HeroImage src={hero.image} alt={getText("name", hero)} />
            </HeroImageWrapper>
            <HeroContent>
              <HeroName>{getText("name", hero)}</HeroName>
              <HeroBio>{getText("bio", hero)}</HeroBio>
              {hero.wikipediaLink && (
                <ReadMoreLink
                  href={hero.wikipediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее..
                </ReadMoreLink>
              )}
            </HeroContent>
          </HeroCard>
        ))}
      </HeroList>
    </OurHeroesContainer>
  );
};

export default OurHeroes;
