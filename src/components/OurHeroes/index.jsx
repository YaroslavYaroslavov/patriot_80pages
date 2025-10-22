import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext"; // Импортируем useLanguage

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

const heroesData = [
  {
    id: 1,
    name: {
      ru: "Богорад Самуил Нахманович",
      en: "Bogorad Samuil Nakhmanovich",
      by: "Багарад Самуіл Нахманавіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=1e8918d3309c8d71a960e49d62809bd1bd0fc47f-12423254-images-thumbs&n=13", // Замените на реальное изображение
    bio: {
      ru: `Самуил Нахманович Богорад родился в Витебске. В 1935 году окончил Ленинградский морской техникум. До 1940 года работал помощником капитана на судах Балтийского морского пароходства. Отличился зимой 1944–1945 гг. Подводная лодка под его командованием за 2 похода потопила 7 вражеских транспортов.`,
      en: `Samuil Nakhmanovich Bogorad was born in Vitebsk. In 1935, he graduated from the Leningrad Maritime Technical School. Until 1940, he worked as an assistant captain on ships of the Baltic Shipping Company. Distinguished himself in the winter of 1944–1945. The submarine under his command sank 7 enemy transports in 2 campaigns.`,
      by: `Самуіл Нахманавіч Багарад нарадзіўся ў Віцебску. У 1935 годзе скончыў Ленінградскі марскі тэхнікум. Да 1940 года працаваў памочнікам капітана на суднах Балтыйскага марскога параходства. Вызначыўся зімой 1944–1945 гг. Падводная лодка пад яго камандаваннем за 2 паходы патапіла 7 варожых транспартаў.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Богорад,_Самуил_Нахманович",
  },
  {
    id: 2,
    name: {
      ru: "Кондратенко Пётр Егорович",
      en: "Kondratenko Pyotr Egorovich",
      by: "Кандраценка Пётр Ягоравіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=42aa14f44f2abc18b7af969a3eabab2a7f0400c7-3768062-images-thumbs&n=13", // Замените на реальное изображение
    bio: {
      ru: `Красноармеец, за освобождение Витебщины стал Героем Советского Союза (1944). Почетный гражданин Витебска (1994). В рассказах о подвиге героя говорится, что он «в ночь на 23 июня он проделал четыре прохода в проволочных заграждениях и обозначил их вешками, обезвредил 387 м.`,
      en: `Red Army soldier, for the liberation of the Vitebsk region became a Hero of the Soviet Union (1944). Honorary citizen of Vitebsk (1994). Stories about the hero's feat say that "on the night of June 23, he made four passages through wire obstacles and marked them with stakes, disarming 387 m."`,
      by: `Чырвонаармеец, за вызваленне Віцебшчыны стаў Героем Савецкага Саюза (1944). Ганаровы грамадзянін Віцебска (1994). У апавяданнях пра подзвіг героя гаворыцца, што ён «у ноч на 23 чэрвеня ён прарабіў чатыры праходы ў драцяных загародах і пазначыў іх вешкамі, абясшкодзіў 387 м.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Кондратенко,_Пётр_Егорович",
  },
  {
    id: 3,
    name: {
      ru: "Иванов Иван Иванович",
      en: "Ivanov Ivan Ivanovich",
      by: "Іваноў Іван Іванавіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=02fa8b33457726c781299814517d46ad608303c8-5219321-images-thumbs&n=13",
    bio: {
      ru: `Летчик-ас, совершивший более 300 боевых вылетов. Проявил исключительное мужество и героизм в воздушных боях над Восточным фронтом. Уничтожил множество вражеских самолетов.`,
      en: `Ace pilot who made over 300 combat sorties. Showed exceptional courage and heroism in air battles over the Eastern Front. Destroyed many enemy aircraft.`,
      by: `Лётчык-ас, які здзейсніў больш за 300 баявых вылетаў. Прадэманстраваў выключную мужнасць і гераізм у паветраных баях над Усходнім фронтам. Знішчыў мноства варожых самалётаў.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Иванов,_Иван_Иванович",
  },
  {
    id: 4,
    name: {
      ru: "Петрова Анна Сергеевна",
      en: "Petrova Anna Sergeevna",
      by: "Пятрова Ганна Сяргееўна",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=7a4e8b5be33a36301c1142bb7f64d59e-5363567-images-thumbs&n=13",
    bio: {
      ru: `Медицинская сестра, спасшая десятки раненых солдат под непрекращающимся огнем. Ее самоотверженность и отвага были примером для всех сослуживцев.`,
      en: `A nurse who saved dozens of wounded soldiers under continuous fire. Her selflessness and courage were an example to all her colleagues.`,
      by: `Медыцынская сястра, якая выратавала дзясяткі параненых салдат пад бесперапынным агнём. Яе самаадданасць і адвага былі прыкладам для ўсіх таварышаў па службе.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Петрова,_Анна_Сергеевна",
  },
  {
    id: 5,
    name: {
      ru: "Сидоров Николай Петрович",
      en: "Sidorov Nikolay Petrovich",
      by: "Сідараў Мікалай Пятровіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=0df919ad8cfb4ebb5c2a8ea310fd120549e5f8e0-5683440-images-thumbs&n=13",
    bio: {
      ru: `Командир танкового экипажа, участвовавший в Курской битве. Его танк первым прорвал оборону противника, открыв путь для наступления основных сил.`,
      en: `Tank crew commander who participated in the Battle of Kursk. His tank was the first to break through enemy defenses, opening the way for the main forces to advance.`,
      by: `Камандзір танкавага экіпажа, які ўдзельнічаў у Курскай бітве. Яго танк першым прарваў абарону праціўніка, адкрыўшы шлях для наступу асноўных сіл.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Сидоров,_Николай_Петрович",
  },
  {
    id: 6,
    name: {
      ru: "Смирнова Елена Викторовна",
      en: "Smirnova Elena Viktorovna",
      by: "Смірнова Алена Віктараўна",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=a943590d93d59a8c17fb886376a43ade-4944850-images-thumbs&n=13",
    bio: {
      ru: `Разведчица, неоднократно добывавшая ценные сведения о расположении и планах противника. Действовала в глубоком тылу врага, проявляя чудеса маскировки и хитрости.`,
      en: `A scout who repeatedly obtained valuable information about the enemy's location and plans. Operated deep behind enemy lines, showing wonders of camouflage and cunning.`,
      by: `Разведчыца, якая неаднаразова здабывала каштоўныя звесткі пра размяшчэнне і планы праціўніка. Дзейнічала ў глыбокім тыле ворага, праяўляючы цуды маскіроўкі і хітрасці.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Смирнова,_Елена_Викторовна",
  },
  {
    id: 7,
    name: {
      ru: "Кузнецов Михаил Андреевич",
      en: "Kuznetsov Mikhail Andreevich",
      by: "Кузняцоў Міхаіл Андрэевіч",
    },
    image:
      "https://avatars.dzeninfra.ru/get-zen_doc/4447423/pub_6045a50c44edc66681b7c34f_6047b414d9fb5535c6800aba/scale_1200",
    bio: {
      ru: `Артиллерист, уничтоживший множество вражеских укреплений и огневых точек. Его меткий огонь обеспечивал успешное продвижение пехоты.`,
      en: `Artilleryman who destroyed many enemy fortifications and firing points. His accurate fire ensured the successful advance of the infantry.`,
      by: `Артылерыст, які знішчыў мноства варожых умацаванняў і агнявых кропак. Яго трапны агонь забяспечваў паспяховае прасоўванне пяхоты.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Кузнецов,_Михаил_Андреевич",
  },
  {
    id: 8,
    name: {
      ru: "Волкова Мария Ивановна",
      en: "Volkova Maria Ivanovna",
      by: "Валкова Марыя Іванаўна",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=cf5b30d7b10437dcb5c149798470a8bc78a8978f-5219049-images-thumbs&n=13",
    bio: {
      ru: `Партизанка, участвовавшая в многочисленных диверсиях против оккупантов. Ее отряд нанес значительный урон вражеским коммуникациям.`,
      en: `Partisan who participated in numerous acts of sabotage against the occupiers. Her detachment inflicted significant damage on enemy communications.`,
      by: `Партызанка, якая ўдзельнічала ў шматлікіх дыверсіях супраць акупантаў. Яе атрад нанёс значны ўрон варожым камунікацыям.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Волкова,_Мария_Ивановна",
  },
  {
    id: 9,
    name: {
      ru: "Герасимов Олег Викторович",
      en: "Gerasimov Oleg Viktorovich",
      by: "Герасімаў Алег Віктаравіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=fd634209a2eb3364a8480c36569ceab4b34b12ea-12512933-images-thumbs&n=13",
    bio: {
      ru: `Снайпер, на счету которого десятки уничтоженных вражеских солдат и офицеров. Его хладнокровие и точность вселяли страх в противника.`,
      en: `Sniper, credited with dozens of destroyed enemy soldiers and officers. His coolness and accuracy instilled fear in the enemy.`,
      by: `Снайпер, на рахунку якога дзясяткі знішчаных варожых салдат і афіцэраў. Яго хладнакроўнасць і дакладнасць усялялі страх у праціўніка.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Герасимов,_Олег_Викторович",
  },
  {
    id: 10,
    name: {
      ru: "Зайцева Светлана Николаевна",
      en: "Zaytseva Svetlana Nikolaevna",
      by: "Зайцава Святлана Мікалаеўна",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=0aa4fcc316ae06b597473e9278826df914fb3ff6-5229243-images-thumbs&n=13",
    bio: {
      ru: `Подпольщица, организовавшая издание и распространение антифашистских листовок в оккупированном городе.`,
      en: `Underground activist who organized the publication and distribution of anti-fascist leaflets in the occupied city.`,
      by: `Падпольшчыца, якая арганізавала выданне і распаўсюджванне антыфашысцкіх улётак у акупаваным горадзе.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Зайцева,_Светлана_Николаевна",
  },
  {
    id: 11,
    name: {
      ru: "Королев Сергей Павлович",
      en: "Korolev Sergey Pavlovich",
      by: "Каралёў Сяргей Паўлавіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=25d472428c03932f0e8775ac42e05fab8fdb5572-5586879-images-thumbs&n=13",
    bio: {
      ru: `Инженер, разработавший и внедривший новые образцы военной техники, сыгравшие ключевую роль в переломе хода войны.`,
      en: `Engineer who developed and introduced new models of military equipment that played a key role in turning the tide of the war.`,
      by: `Інжынер, які распрацаваў і ўкараніў новыя ўзоры ваеннай тэхнікі, што адыгралі ключавую ролю ў пераломе ходу вайны.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Королев,_Сергей_Павлович",
  },
  {
    id: 12,
    name: {
      ru: "Лебедев Виктор Михайлович",
      en: "Lebedev Viktor Mikhailovich",
      by: "Лебедзеў Віктар Міхайлавіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=712e2ca02f3f33d96f91a9bffba6bb95bdbed52d-3990263-images-thumbs&n=13",
    bio: {
      ru: `Матрос, отличившийся в морских сражениях. Неоднократно проявлял мужество и отвагу при защите морских рубежей.`,
      en: `Sailor who distinguished himself in naval battles. Repeatedly showed courage and bravery in defending maritime borders.`,
      by: `Матрос, які вызначыўся ў марскіх бітвах. Неаднаразова праяўляў мужнасць і адвагу пры абароне марскіх рубяжоў.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Лебедев,_Виктор_Михайлович",
  },
  {
    id: 13,
    name: {
      ru: "Морозова Ольга Сергеевна",
      en: "Morozova Olga Sergeevna",
      by: "Марозава Вольга Сяргееўна",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=91ad5f7c622d197642f1376585ce7f70885582ea-7045635-images-thumbs&n=13",
    bio: {
      ru: `Летчица, участница "Ночных ведьм". Совершила множество успешных бомбардировочных вылетов, нанося точные удары по врагу.`,
      en: `Pilot, participant of the "Night Witches". Made many successful bombing sorties, delivering accurate strikes against the enemy.`,
      by: `Лётчыца, удзельніца "Начных ведзьмаў". Здзейсніла мноства паспяховых бамбардзіровачных вылетаў, наносячы дакладныя ўдары па ворагу.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Морозова,_Ольга_Сергеевна",
  },
  {
    id: 14,
    name: {
      ru: "Новиков Дмитрий Алексеевич",
      en: "Novikov Dmitry Alekseevich",
      by: "Новікаў Дзмітрый Аляксеевіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=ba7b234a7f279dd95c81a458a9c0d0d6e0093b52-12644621-images-thumbs&n=13",
    bio: {
      ru: `Пехотинец, участвовавший в штурме Берлина. Проявил исключительное мужество и отвагу в уличных боях.`,
      en: `Infantryman who participated in the storming of Berlin. Showed exceptional courage and bravery in street fighting.`,
      by: `Пяхотнік, які ўдзельнічаў у штурме Берліна. Прадэманстраваў выключную мужнасць і адвагу ў вулічных баях.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Новиков,_Дмитрий_Алексеевич",
  },
  {
    id: 15,
    name: {
      ru: "Орлова Екатерина Петровна",
      en: "Orlova Ekaterina Petrovna",
      by: "Арлова Кацярына Пятроўна",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=00a7567433c184496f98b86c473e69f8e5408b63-5451357-images-thumbs&n=13",
    bio: {
      ru: `Связистка, обеспечивавшая бесперебойную связь в самых сложных условиях. Благодаря ей штаб получал актуальную информацию.`,
      en: `Communications operator who ensured uninterrupted communication in the most difficult conditions. Thanks to her, the headquarters received up-to-date information.`,
      by: `Сувязістка, якая забяспечвала бесперабойную сувязь у самых складаных умовах. Дзякуючы ёй штаб атрымліваў актуальную інфармацыю.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Орлова,_Екатерина_Петровна",
  },
  {
    id: 16,
    name: {
      ru: "Павлов Андрей Сергеевич",
      en: "Pavlov Andrey Sergeevich",
      by: "Паўлаў Андрэй Сяргеевіч",
    },
    image:
      "https://avatars.mds.yandex.net/i?id=2b24ac6fd20f5e8a947ade3481d48c1abdf84515-4255367-images-thumbs&n=13",
    bio: {
      ru: `Пулеметчик, удерживавший важные позиции против многократно превосходящих сил противника.`,
      en: `Machine gunner who held important positions against numerically superior enemy forces.`,
      by: `Кулямётчык, які ўтрымліваў важныя пазіцыі супраць шматкроць перавышаючых сіл праціўніка.`,
    },
    wikipediaLink: "https://ru.wikipedia.org/wiki/Павлов,_Андрей_Сергеевич",
  },
];

const OurHeroes = () => {
  const { language, getText } = useLanguage(); // Получаем текущий язык и функцию getText из контекста

  // Встроенные переводы для статических строк
  const staticTexts = {
    title: {
      ru: "НАШИ ГЕРОИ",
      en: "OUR HEROES",
      by: "НАШЫ ГЕРОІ",
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

  // Функция для получения текста для динамических данных (имя, биография героя)
  // Мы можем упростить ее, так как данные hero.name и hero.bio уже имеют структуру { ru: ..., en: ..., by: ... }
  const getHeroDataText = (data) => {
    return data[language] || data.ru;
  };

  return (
    <OurHeroesContainer>
      <Title>{getStaticText("title")}</Title>
      <HeroList>
        {heroesData.map((hero) => (
          <HeroCard key={hero.id}>
            <HeroImageWrapper>
              <HeroImage src={hero.image} alt={getHeroDataText(hero.name)} />
            </HeroImageWrapper>
            <HeroContent>
              <HeroName>{getHeroDataText(hero.name)}</HeroName>
              <HeroBio>{getHeroDataText(hero.bio)}</HeroBio>
              {hero.wikipediaLink && (
                <ReadMoreLink
                  href={hero.wikipediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getStaticText("readMore")}
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
