import { BrowserRouter } from "react-router";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import { MyMap } from "./components/Map";
import RegionsPage from "./components/RegionsPage"; // Импортируйте новый компонент
import OurHeroes from "./components/OurHeroes";
import MuseumsPage from "./components/MuseumsPage";

const vitebskLandmarks = [
  {
    id: 1,
    name: { ru: "Иловский ров", en: "Ilovsky Ditch" },
    coordinates: [55.194722, 30.197222], // 55°11′41″ с. ш., 30°11′50″ в. д. конвертировано
    image:
      "https://avatars.mds.yandex.net/get-altay/1881820/2a0000016aab60d3592d7805e40c1214cd04/XXL_height",
    gallery: [
      "https://avatars.mds.yandex.net/get-altay/1881820/2a0000016aab60d3592d7805e40c1214cd04/XXL_height",
      "https://placehold.co/600x400/CCEEFF/333333?text=Ilovsky+Ditch+2",
      "https://placehold.co/600x400/BBDDFF/333333?text=Ilovsky+Ditch+3",
    ],
    description: {
      ru: "Иловский (Туловский) ров — это противотанковый ров длиной 467 метров, шириной и глубиной по 2 метра. В течение 1941-43 годов немцы полностью заполнили его телами военнопленных, мирных жителей, в основном евреев — узников Витебского гетто. После уничтожения гетто в декабре 1941 года, казни продолжались в 1942—1943 годах. <br/><br/><i>Развернуть</i>",
      en: "The Ilovsky (Tulovsky) ditch is an anti-tank ditch 467 meters long, 2 meters wide and 2 meters deep. During 1941-43, the Germans completely filled it with the bodies of prisoners of war, civilians, mainly Jews - prisoners of the Vitebsk ghetto. After the destruction of the ghetto in December 1941, executions continued in 1942-1943. <br/><br/><i>Expand</i>",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Заглушка аудио
    audioDuration: "2:38",
  },
  {
    id: 2,
    name: {
      ru: "Мемориальный знак на могиле жертв фашизма",
      en: "Memorial to victims of fascism",
    },
    coordinates: [55.198479763031, 30.221198121396],
    image:
      "https://placehold.co/600x400/FFEEDD/333333?text=Memorial+Sign+Image",
    gallery: [
      "https://placehold.co/600x400/FFEEDD/333333?text=Memorial+Sign+1",
      "https://placehold.co/600x400/FFCCAA/333333?text=Memorial+Sign+2",
    ],
    description: {
      ru: "Мемориальный знак, установленный на месте массовых захоронений жертв фашизма в парке 40-летия комсомола.",
      en: "A memorial sign erected at the site of mass graves of fascism victims in the 40th Anniversary of Komsomol Park.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Заглушка аудио
    audioDuration: "1:45",
  },
  {
    id: 3,
    name: {
      ru: "Памятник героям Витебского подполья",
      en: "Monument to Vitebsk Underground Heroes",
    },
    coordinates: [55.205555420246, 30.209346126123],
    image:
      "https://placehold.co/600x400/EEFFDD/333333?text=Underground+Heroes+Image",
    gallery: [
      "https://placehold.co/600x400/EEFFDD/333333?text=Underground+Heroes+1",
    ],
    description: {
      ru: "Посвящен подвигу участников Витебского подпольного движения в годы Великой Отечественной войны.",
      en: "Dedicated to the feat of the participants of the Vitebsk underground movement during the Great Patriotic War.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Заглушка аудио
    audioDuration: "3:00",
  },
  {
    id: 4,
    name: {
      ru: "Витебский областной музей Героя Советского Союза М.Ф.Шмырева",
      en: "Vitebsk Regional Museum of Hero of the Soviet Union M.F. Shmyrev",
    },
    coordinates: [55.203333, 30.203611], // 55°12′12″ с. ш., 30°12′13″ в. д. конвертировано
    image:
      "https://placehold.co/600x400/FFDDEE/333333?text=Shmyrev+Museum+Image",
    gallery: [
      "https://placehold.co/600x400/FFDDEE/333333?text=Shmyrev+Museum+1",
      "https://placehold.co/600x400/FFCCEE/333333?text=Shmyrev+Museum+2",
    ],
    description: {
      ru: "Музей, посвященный жизни и деятельности Героя Советского Союза Миная Филипповича Шмырева, одного из организаторов партизанского движения на Витебщине.",
      en: "A museum dedicated to the life and activities of Hero of the Soviet Union Minay Filippovich Shmyrev, one of the organizers of the partisan movement in the Vitebsk region.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Заглушка аудио
    audioDuration: "2:10",
  },
  {
    id: 5,
    name: { ru: "Памятник детям войны", en: "Monument to Children of War" },
    coordinates: [55.202222, 30.204444], // 55°12′08″ с. ш., 30°12′16″ в. д. конвертировано
    image:
      "https://placehold.co/600x400/EEFFDD/333333?text=Children+of+War+Image",
    gallery: [
      "https://placehold.co/600x400/EEFFDD/333333?text=Children+of+War+1",
    ],
    description: {
      ru: "Трогательный памятник, посвященный детям, пережившим ужасы Великой Отечественной войны.",
      en: "A touching monument dedicated to children who survived the horrors of the Great Patriotic War.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", // Заглушка аудио
    audioDuration: "1:55",
  },
  {
    id: 6,
    name: {
      ru: "Воинский мемориал на Успенской горке",
      en: "Military Memorial on Uspenskaya Hill",
    },
    coordinates: [55.187, 30.213],
    image:
      "https://placehold.co/600x400/FFDDFF/333333?text=Uspenskaya+Hill+Image",
    gallery: [
      "https://placehold.co/600x400/FFDDFF/333333?text=Uspenskaya+Hill+1",
      "https://placehold.co/600x400/FFCCFF/333333?text=Uspenskaya+Hill+2",
    ],
    description: {
      ru: "Мемориал в память о советских воинах, погибших при освобождении Витебска.",
      en: "A memorial in memory of Soviet soldiers who died during the liberation of Vitebsk.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", // Заглушка аудио
    audioDuration: "2:05",
  },
];
const grodnoLandmarks = [
  {
    id: 1,
    name: {
      ru: "Мемориальный комплекс «Курган Славы» в Гродно",
      en: "Mound of Glory Memorial Complex in Grodno",
    },
    coordinates: [53.68, 23.82], // Гродно
    image: "https://placehold.co/600x400/DDFFAA/333333?text=Grodno+1",
    gallery: ["https://placehold.co/600x400/DDFFAA/333333?text=Grodno+1-1"],
    description: {
      ru: "Посвящен воинам, погибшим в годы Великой Отечественной войны.",
      en: "Dedicated to soldiers who died during the Great Patriotic War.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3",
    audioDuration: "2:45",
  },
  {
    id: 2,
    name: {
      ru: "Партизанская землянка (Гродненский район)",
      en: "Partisan Dugout (Grodno District)",
    },
    coordinates: [53.75, 23.95], // Близко к Гродно
    image: "https://placehold.co/600x400/FFCC99/333333?text=Grodno+2",
    gallery: ["https://placehold.co/600x400/FFCC99/333333?text=Grodno+2-1"],
    description: {
      ru: "Воссозданная землянка, напоминающая о жизни партизан.",
      en: "Recreated dugout, reminiscent of partisan life.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3",
    audioDuration: "1:30",
  },
  {
    id: 3,
    name: {
      ru: "Братская могила советских воинов (г. Гродно)",
      en: "Mass grave of Soviet soldiers (Grodno)",
    },
    coordinates: [53.67, 23.83], // Гродно
    image: "https://placehold.co/600x400/AACCFF/333333?text=Grodno+3",
    gallery: ["https://placehold.co/600x400/AACCFF/333333?text=Grodno+3-1"],
    description: {
      ru: "Место вечного покоя воинов-освободителей.",
      en: "The resting place of warrior-liberators.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3",
    audioDuration: "2:00",
  },
  {
    id: 4,
    name: {
      ru: "Мемориал жертвам гетто (Гродно)",
      en: "Ghetto Victims Memorial (Grodno)",
    },
    coordinates: [53.682, 23.815], // Гродно
    image: "https://placehold.co/600x400/CCEEAA/333333?text=Grodno+4",
    gallery: ["https://placehold.co/600x400/CCEEAA/333333?text=Grodno+4-1"],
    description: {
      ru: "Напоминание о трагедии еврейского населения Гродно.",
      en: "A reminder of the tragedy of the Jewish population of Grodno.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3",
    audioDuration: "3:10",
  },
  {
    id: 5,
    name: {
      ru: "Памятник воинам-освободителям (Лида)",
      en: "Monument to Liberator Soldiers (Lida)",
    },
    coordinates: [53.886, 25.305], // Лида
    image: "https://placehold.co/600x400/FFDDCC/333333?text=Grodno+5",
    gallery: ["https://placehold.co/600x400/FFDDCC/333333?text=Grodno+5-1"],
    description: {
      ru: "Установлен в честь освобождения города Лида.",
      en: "Erected in honor of the liberation of the city of Lida.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3",
    audioDuration: "2:10",
  },
  {
    id: 6,
    name: {
      ru: "Музей истории и археологии (Гродно)",
      en: "Museum of History and Archaeology (Grodno)",
    },
    coordinates: [53.676, 23.824], // Гродно
    image: "https://placehold.co/600x400/CCDDAA/333333?text=Grodno+6",
    gallery: ["https://placehold.co/600x400/CCDDAA/333333?text=Grodno+6-1"],
    description: {
      ru: "Содержит экспозиции, посвященные периоду Великой Отечественной войны.",
      en: "Contains expositions dedicated to the period of the Great Patriotic War.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3",
    audioDuration: "2:55",
  },
  {
    id: 7,
    name: {
      ru: "Памятник подпольщикам (Волковыск)",
      en: "Monument to Underground Fighters (Volkovysk)",
    },
    coordinates: [53.15, 24.46], // Волковыск
    image: "https://placehold.co/600x400/EEFFCC/333333?text=Grodno+7",
    gallery: ["https://placehold.co/600x400/EEFFCC/333333?text=Grodno+7-1"],
    description: {
      ru: "В честь героев подпольного движения города Волковыск.",
      en: "In honor of the heroes of the underground movement of the city of Volkovysk.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3",
    audioDuration: "1:50",
  },
  {
    id: 8,
    name: {
      ru: "Мемориал «Звезда» (Сморгонь)",
      en: "Memorial 'Star' (Smorgon)",
    },
    coordinates: [54.475, 26.39], // Сморгонь
    image: "https://placehold.co/600x400/DDFFCC/333333?text=Grodno+8",
    gallery: ["https://placehold.co/600x400/DDFFCC/333333?text=Grodno+8-1"],
    description: {
      ru: "Посвящен памяти жертв войны и участникам освобождения.",
      en: "Dedicated to the memory of war victims and participants in the liberation.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3",
    audioDuration: "2:15",
  },
  {
    id: 9,
    name: {
      ru: "Памятник жертвам фашизма (Новогрудок)",
      en: "Monument to Victims of Fascism (Novogrudok)",
    },
    coordinates: [53.6, 25.82], // Новогрудок
    image: "https://placehold.co/600x400/FFEEEE/333333?text=Grodno+9",
    gallery: ["https://placehold.co/600x400/FFEEEE/333333?text=Grodno+9-1"],
    description: {
      ru: "Установлен на месте бывшего гетто в Новогрудке.",
      en: "Erected on the site of the former ghetto in Novogrudok.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3",
    audioDuration: "2:40",
  },
  {
    id: 10,
    name: {
      ru: "Мемориальный комплекс «Курган Бессмертия» (Скидель)",
      en: "Mound of Immortality Memorial Complex (Skidel)",
    },
    coordinates: [53.58, 24.25], // Скидель
    image: "https://placehold.co/600x400/CCDDFF/333333?text=Grodno+10",
    gallery: ["https://placehold.co/600x400/CCDDFF/333333?text=Grodno+10-1"],
    description: {
      ru: "Памяти воинов-освободителей и жертв фашизма.",
      en: "In memory of warrior-liberators and victims of fascism.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3",
    audioDuration: "3:45",
  },
];

const gomelLandmarks = [
  {
    id: 1,
    name: {
      ru: "Мемориальный комплекс «Освободителям Гомеля»",
      en: "Liberators of Gomel Memorial Complex",
    },
    coordinates: [52.425, 30.983], // Гомель
    image: "https://placehold.co/600x400/F0F8FF/333333?text=Gomel+1",
    gallery: ["https://placehold.co/600x400/F0F8FF/333333?text=Gomel+1-1"],
    description: {
      ru: "Посвящен воинам, освободившим город Гомель от немецко-фашистских захватчиков.",
      en: "Dedicated to the soldiers who liberated the city of Gomel from Nazi invaders.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-51.mp3",
    audioDuration: "3:10",
  },
  {
    id: 2,
    name: {
      ru: "Музей военной славы (Гомель)",
      en: "Military Glory Museum (Gomel)",
    },
    coordinates: [52.43, 31.0], // Гомель
    image: "https://placehold.co/600x400/FFFACD/333333?text=Gomel+2",
    gallery: ["https://placehold.co/600x400/FFFACD/333333?text=Gomel+2-1"],
    description: {
      ru: "Экспозиции, рассказывающие о подвигах советских солдат и партизан.",
      en: "Expositions telling about the exploits of Soviet soldiers and partisans.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-52.mp3",
    audioDuration: "2:40",
  },
  {
    id: 3,
    name: {
      ru: "Памятник подпольщикам (Гомель)",
      en: "Monument to Underground Fighters (Gomel)",
    },
    coordinates: [52.435, 30.985], // Гомель
    image: "https://placehold.co/600x400/ADD8E6/333333?text=Gomel+3",
    gallery: ["https://placehold.co/600x400/ADD8E6/333333?text=Gomel+3-1"],
    description: {
      ru: "Посвящен участникам Гомельского подполья.",
      en: "Dedicated to the participants of the Gomel underground.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-53.mp3",
    audioDuration: "2:00",
  },
  {
    id: 4,
    name: {
      ru: "Братская могила советских воинов (Мозырь)",
      en: "Mass grave of Soviet soldiers (Mozyr)",
    },
    coordinates: [52.04, 29.23], // Мозырь
    image: "https://placehold.co/600x400/DDA0DD/333333?text=Gomel+4",
    gallery: ["https://placehold.co/600x400/DDA0DD/333333?text=Gomel+4-1"],
    description: {
      ru: "Место захоронения воинов, павших при освобождении Мозыря.",
      en: "Burial place of soldiers who died during the liberation of Mozyr.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-54.mp3",
    audioDuration: "1:55",
  },
  {
    id: 5,
    name: {
      ru: "Мемориал «Аллея Героев» (Жлобин)",
      en: "Alley of Heroes Memorial (Zhlobin)",
    },
    coordinates: [52.88, 30.03], // Жлобин
    image: "https://placehold.co/600x400/BA55D3/333333?text=Gomel+5",
    gallery: ["https://placehold.co/600x400/BA55D3/333333?text=Gomel+5-1"],
    description: {
      ru: "В честь героев Советского Союза - уроженцев Жлобинского района.",
      en: "In honor of the Heroes of the Soviet Union - natives of the Zhlobin district.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-55.mp3",
    audioDuration: "2:30",
  },
  {
    id: 6,
    name: {
      ru: "Памятник «Партизанская слава» (Речица)",
      en: "Monument 'Partisan Glory' (Rechitsa)",
    },
    coordinates: [52.34, 30.4], // Речица
    image: "https://placehold.co/600x400/B0E0E6/333333?text=Gomel+6",
    gallery: ["https://placehold.co/600x400/B0E0E6/333333?text=Gomel+6-1"],
    description: {
      ru: "Посвящен партизанам и подпольщикам Речицкого района.",
      en: "Dedicated to the partisans and underground fighters of the Rechitsa district.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-56.mp3",
    audioDuration: "2:10",
  },
  {
    id: 7,
    name: { ru: "Мемориал «Озаричи»", en: "Ozarichi Memorial" },
    coordinates: [52.12, 29.17], // Калинковичский район
    image: "https://placehold.co/600x400/E6E6FA/333333?text=Gomel+7",
    gallery: ["https://placehold.co/600x400/E6E6FA/333333?text=Gomel+7-1"],
    description: {
      ru: "Место трагедии концентрационного лагеря, где содержались мирные жители.",
      en: "The site of the tragedy of the concentration camp where civilians were held.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-57.mp3",
    audioDuration: "3:40",
  },
  {
    id: 8,
    name: {
      ru: "Памятник «Детям-жертвам войны» (Лельчицы)",
      en: "Monument 'To Children-Victims of War' (Lelchitsy)",
    },
    coordinates: [51.78, 27.83], // Лельчицы
    image: "https://placehold.co/600x400/BDB76B/333333?text=Gomel+8",
    gallery: ["https://placehold.co/600x400/BDB76B/333333?text=Gomel+8-1"],
    description: {
      ru: "В память о детях, погибших в годы войны.",
      en: "In memory of children who died during the war.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-58.mp3",
    audioDuration: "2:05",
  },
  {
    id: 9,
    name: {
      ru: "Братская могила на площади Ленина (Добруш)",
      en: "Mass grave on Lenin Square (Dobrush)",
    },
    coordinates: [52.41, 31.33], // Добруш
    image: "https://placehold.co/600x400/8FBC8F/333333?text=Gomel+9",
    gallery: ["https://placehold.co/600x400/8FBC8F/333333?text=Gomel+9-1"],
    description: {
      ru: "Место захоронения солдат, павших при освобождении Добруша.",
      en: "Burial place of soldiers who died during the liberation of Dobrush.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-59.mp3",
    audioDuration: "1:40",
  },
  {
    id: 10,
    name: {
      ru: "Памятник-самолет (Наровля)",
      en: "Aircraft Monument (Narovlya)",
    },
    coordinates: [51.79, 29.5], // Наровля
    image: "https://placehold.co/600x400/A2CD5A/333333?text=Gomel+10",
    gallery: ["https://placehold.co/600x400/A2CD5A/333333?text=Gomel+10-1"],
    description: {
      ru: "В память о героических летчиках, защищавших небо.",
      en: "In memory of the heroic pilots who defended the sky.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-60.mp3",
    audioDuration: "2:25",
  },
];
const brestLandmarks = [
  {
    id: 1,
    name: {
      ru: "Мемориальный комплекс «Брестская крепость-герой»",
      en: "Brest Hero-Fortress Memorial Complex",
    },
    coordinates: [52.0833, 23.6558], // Брест
    image:
      "https://avatars.mds.yandex.net/i?id=06ccf2d4bda0e367aa0247acfd11e5058a71647e-2366455-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=06ccf2d4bda0e367aa0247acfd11e5058a71647e-2366455-images-thumbs&n=13",
    ],
    description: {
      ru: "Символ мужества и стойкости советского народа в начале Великой Отечественной войны.",
      en: "A symbol of the courage and resilience of the Soviet people at the beginning of the Great Patriotic War.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-41.mp3",
    audioDuration: "4:30",
  },
  {
    id: 2,
    name: {
      ru: "Музей обороны Брестской крепости",
      en: "Museum of the Defense of Brest Fortress",
    },
    coordinates: [52.083, 23.65], // Брест
    image:
      "https://avatars.mds.yandex.net/i?id=a493c01f02556d2172b2c8d8ece8dbe5_l-4034584-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=a493c01f02556d2172b2c8d8ece8dbe5_l-4034584-images-thumbs&n=13",
    ],
    description: {
      ru: "Экспозиции, посвященные героической обороне крепости.",
      en: "Expositions dedicated to the heroic defense of the fortress.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-42.mp3",
    audioDuration: "3:40",
  },
  {
    id: 3,
    name: { ru: "Памятник «Жажда»", en: "Monument 'Thirst'" },
    coordinates: [52.085, 23.652], // Брест
    image: "https://i.ytimg.com/vi/5Nj17MN6e9o/maxresdefault.jpg",
    gallery: ["https://i.ytimg.com/vi/5Nj17MN6e9o/maxresdefault.jpg"],
    description: {
      ru: "Символизирует мучения защитников крепости, страдающих от жажды.",
      en: "Symbolizes the suffering of the fortress defenders, tormented by thirst.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-43.mp3",
    audioDuration: "2:10",
  },
  {
    id: 4,
    name: {
      ru: "Вечный огонь Брестской крепости",
      en: "Eternal Flame of Brest Fortress",
    },
    coordinates: [52.084, 23.654], // Брест
    image: "https://brsm.by/images/storage/news/002633_665945_big.jpg",
    gallery: ["https://brsm.by/images/storage/news/002633_665945_big.jpg"],
    description: {
      ru: "Горит в память о павших героях.",
      en: "Burns in memory of the fallen heroes.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-44.mp3",
    audioDuration: "1:30",
  },
  {
    id: 5,
    name: {
      ru: "Музей железнодорожной техники (Брест)",
      en: "Railway Equipment Museum (Brest)",
    },
    coordinates: [52.095, 23.67], // Брест
    image:
      "https://avatars.mds.yandex.net/i?id=8b195553472464abd8d94e1e77b9c725_l-9855103-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=8b195553472464abd8d94e1e77b9c725_l-9855103-images-thumbs&n=13",
    ],
    description: {
      ru: "Представлены военные паровозы и техника времен войны.",
      en: "Features military locomotives and equipment from the war.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-45.mp3",
    audioDuration: "2:50",
  },
  {
    id: 6,
    name: {
      ru: "Памятник пограничникам (Брест)",
      en: "Monument to Border Guards (Brest)",
    },
    coordinates: [52.08, 23.66], // Брест
    image:
      "https://img.belta.by/uploads/2024-Images/000022_4779ACE4BF026458432586D800160900_248180.jpg",
    gallery: [
      "https://img.belta.by/uploads/2024-Images/000022_4779ACE4BF026458432586D800160900_248180.jpg",
    ],
    description: {
      ru: "Посвящен героической обороне государственной границы.",
      en: "Dedicated to the heroic defense of the state border.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-46.mp3",
    audioDuration: "2:10",
  },
  {
    id: 7,
    name: { ru: "Памятник «Звезда» (Кобрин)", en: "Monument 'Star' (Kobrin)" },
    coordinates: [52.2, 24.36], // Кобрин
    image:
      "https://avatars.mds.yandex.net/i?id=d0a824df1379c6bae7e380416e403dc8_l-5313814-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=d0a824df1379c6bae7e380416e403dc8_l-5313814-images-thumbs&n=13",
    ],
    description: {
      ru: "В честь освобождения Кобрина от немецко-фашистских захватчиков.",
      en: "In honor of the liberation of Kobrin from Nazi invaders.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-47.mp3",
    audioDuration: "2:00",
  },
  {
    id: 8,
    name: { ru: "Мемориал «Дуброва» (Пинск)", en: "Dubrova Memorial (Pinsk)" },
    coordinates: [52.12, 26.11], // Пинск
    image:
      "https://ldd.by/wp-content/uploads/2025/01/pinsk-memorialnyj-kompleks.webp",
    gallery: [
      "https://ldd.by/wp-content/uploads/2025/01/pinsk-memorialnyj-kompleks.webp",
    ],
    description: {
      ru: "На месте массовых казней гражданского населения.",
      en: "At the site of mass executions of civilians.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-48.mp3",
    audioDuration: "3:00",
  },
  {
    id: 9,
    name: {
      ru: "Мемориал «Рубеж» (Брестский район)",
      en: "Memorial 'Rubizh' (Brest District)",
    },
    coordinates: [52.05, 23.8], // Брестский район
    image:
      "https://avatars.mds.yandex.net/i?id=d2207d6c7dd621d128ecfd8629f97bf93981304a-10268314-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=d2207d6c7dd621d128ecfd8629f97bf93981304a-10268314-images-thumbs&n=13",
    ],
    description: {
      ru: "Линия обороны, где шли ожесточенные бои.",
      en: "Defense line where fierce battles took place.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-50.mp3",
    audioDuration: "2:35",
  },
];

const mogilevLandmarks = [
  {
    id: 1,
    name: {
      ru: "Мемориальный комплекс «Буйничское поле»",
      en: "Buinichi Field Memorial Complex",
    },
    coordinates: [53.84, 30.29], // Возле Могилева
    image:
      "https://avatars.mds.yandex.net/get-altay/2701879/2a00000174fbfe46b3c06605315ac0dacb59/XXL_height",
    gallery: [
      "https://avatars.mds.yandex.net/get-altay/2701879/2a00000174fbfe46b3c06605315ac0dacb59/XXL_height",
    ],
    description: {
      ru: "Место героической обороны Могилева в 1941 году.",
      en: "The site of the heroic defense of Mogilev in 1941.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3",
    audioDuration: "3:20",
  },
  {
    id: 2,
    name: {
      ru: "Памятник-танк Т-34 (Могилев)",
      en: "T-34 Tank Monument (Mogilev)",
    },
    coordinates: [53.9, 30.34], // Могилев
    image:
      "https://avatars.mds.yandex.net/i?id=d59fd7952c8460d2791e6dc950f69fea_l-5244179-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=d59fd7952c8460d2791e6dc950f69fea_l-5244179-images-thumbs&n=13",
    ],
    description: {
      ru: "Установлен в честь освободителей города Могилева.",
      en: "Erected in honor of the liberators of the city of Mogilev.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-32.mp3",
    audioDuration: "2:00",
  },
  {
    id: 3,
    name: {
      ru: "Мемориал жертвам фашизма (Могилев)",
      en: "Memorial to the Victims of Fascism (Mogilev)",
    },
    coordinates: [53.905, 30.335], // Могилев
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOsFPZljCAYShTEY3JorSJbrRw8Pzti8yarDkeL=w600-k",
    gallery: [
      "https://lh3.googleusercontent.com/p/AF1QipOsFPZljCAYShTEY3JorSJbrRw8Pzti8yarDkeL=w600-k",
    ],
    description: {
      ru: "Посвящен мирным жителям, погибшим от рук оккупантов.",
      en: "Dedicated to civilians who died at the hands of the occupiers.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-33.mp3",
    audioDuration: "2:40",
  },
  {
    id: 4,
    name: {
      ru: "Памятник защитникам Могилева",
      en: "Monument to the Defenders of Mogilev",
    },
    coordinates: [53.91, 30.35], // Могилев
    image:
      "https://avatars.mds.yandex.net/i?id=914449d40018eab13ee5a9ff824f63da43913cb6-12483207-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=914449d40018eab13ee5a9ff824f63da43913cb6-12483207-images-thumbs&n=13",
    ],
    description: {
      ru: "В честь тех, кто доблестно оборонял город в 1941 году.",
      en: "In honor of those who bravely defended the city in 1941.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-35.mp3",
    audioDuration: "2:10",
  },
  {
    id: 6,
    name: {
      ru: "Музей истории Могилева",
      en: "Museum of the Defense of Mogilev",
    },
    coordinates: [53.902, 30.33], // Могилев
    image:
      "https://avatars.mds.yandex.net/get-altay/2776464/2a0000017394f1d321c92db8ca7ef9318f22/XXXL",
    gallery: [
      "https://avatars.mds.yandex.net/get-altay/2776464/2a0000017394f1d321c92db8ca7ef9318f22/XXXL",
    ],
    description: {
      ru: "Экспозиции, посвященные героической обороне города.",
      en: "Expositions dedicated to the heroic defense of the city.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-36.mp3",
    audioDuration: "3:05",
  },
  {
    id: 7,
    name: {
      ru: "Соженная деревня «Золотое дно»(Быховский район)",
      en: "Memorial to Burned Villages (Bykhov District)",
    },
    coordinates: [53.5, 30.0], // Быховский район
    image:
      "https://avatars.mds.yandex.net/get-altay/15037629/2a00000194894b74a12b8976b1a4d8d872f8/XXXL",
    gallery: [
      "https://avatars.mds.yandex.net/get-altay/15037629/2a00000194894b74a12b8976b1a4d8d872f8/XXXL",
    ],
    description: {
      ru: "Посвящен деревням, уничтоженным оккупантами.",
      en: "Dedicated to villages destroyed by the occupiers.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-38.mp3",
    audioDuration: "2:15",
  },
  {
    id: 9,
    name: {
      ru: "Памятник в память подвига курсантов и офицеров Бобруйского военно-тракторного училища, участников оборонительных боёв с немецко-фашистскими захватчиками на реке Березина в июне 1941 года",
      en: "Monument to Military Pilots (Bobruisk)",
    },
    coordinates: [53.15, 29.23], // Бобруйск
    image:
      "https://avatars.mds.yandex.net/get-altay/5100737/2a0000017c7016b05beee47434ec74788df8/XXXL",
    gallery: [
      "https://avatars.mds.yandex.net/get-altay/5100737/2a0000017c7016b05beee47434ec74788df8/XXXL",
    ],
    description: {
      ru: "В память о подвигах авиаторов в годы войны.",
      en: "In memory of the feats of aviators during the war.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-39.mp3",
    audioDuration: "2:30",
  },
  {
    id: 10,
    name: { ru: "Бобруйская крепость", en: "Bobruisk Fortress" },
    coordinates: [53.14, 29.21], // Бобруйск
    image:
      "https://avatars.mds.yandex.net/get-altay/5485733/2a0000017cc1c69678a8b5df2b72a7c91809/XXXL",
    gallery: [
      "https://avatars.mds.yandex.net/get-altay/5485733/2a0000017cc1c69678a8b5df2b72a7c91809/XXXL",
    ],
    description: {
      ru: "Один из важных оборонительных объектов, подвергшийся разрушениям.",
      en: "One of the important defensive structures that suffered destruction.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-40.mp3",
    audioDuration: "3:10",
  },
];
const minskLandmarks = [
  {
    id: 1,
    name: {
      ru: "Мемориальный комплекс «Курган Славы»",
      en: "Mound of Glory Memorial Complex",
    },
    coordinates: [54.0222, 27.9142], // Возле Минска
    image:
      "https://zorkanews.by/app/uploads/2021/06/kuda_skhodit_v_minske_3-1536x1199-1024x799.jpg",
    gallery: [
      "https://zorkanews.by/app/uploads/2021/06/kuda_skhodit_v_minske_3-1536x1199-1024x799.jpg",
    ],
    description: {
      ru: "Памятник героям Великой Отечественной войны, освободившим Беларусь.",
      en: "Monument to the heroes of the Great Patriotic War who liberated Belarus.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    audioDuration: "3:00",
  },
  {
    id: 2,
    name: {
      ru: "Музей истории Великой Отечественной войны",
      en: "Museum of the Great Patriotic War History",
    },
    coordinates: [53.9099, 27.5258], // Минск
    image: "https://o.quizlet.com/R.NhOfxo5scFp.w23hspBQ.png",
    gallery: ["https://o.quizlet.com/R.NhOfxo5scFp.w23hspBQ.png"],
    description: {
      ru: "Крупнейший в Беларуси музей, посвященный событиям 1941-1945 годов.",
      en: "The largest museum in Belarus dedicated to the events of 1941-1945.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    audioDuration: "4:15",
  },
  {
    id: 3,
    name: {
      ru: "Памятник «Яма» (Минское гетто)",
      en: "Monument 'The Pit' (Minsk Ghetto)",
    },
    coordinates: [53.9103, 27.5491], // Минск
    image:
      "https://avatars.mds.yandex.net/i?id=691523bb6d84a71458fb8ceffd3ce27755ddb7e9-10619913-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=691523bb6d84a71458fb8ceffd3ce27755ddb7e9-10619913-images-thumbs&n=13",
    ],
    description: {
      ru: "Мемориал на месте массового расстрела евреев Минского гетто.",
      en: "Memorial at the site of the mass execution of Jews from the Minsk Ghetto.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    audioDuration: "2:50",
  },
  {
    id: 4,
    name: { ru: "Памятник Победы", en: "Victory Monument" },
    coordinates: [53.9048, 27.5684], // Минск
    image:
      "https://avatars.mds.yandex.net/i?id=41e09b8aaf01500b096aa9b52b4bcfe6a4cd2201-5232416-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=41e09b8aaf01500b096aa9b52b4bcfe6a4cd2201-5232416-images-thumbs&n=13",
    ],
    description: {
      ru: "Один из центральных символов Минска, посвященный победе в Великой Отечественной войне.",
      en: "One of the central symbols of Minsk, dedicated to the victory in the Great Patriotic War.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    audioDuration: "2:20",
  },
  {
    id: 5,
    name: {
      ru: "Мемориальный комплекс «Масюковщина»",
      en: "Masyukovshchina Memorial Complex",
    },
    coordinates: [53.94, 27.46], // Минск
    image:
      "https://avatars.mds.yandex.net/i?id=b2339b351f6bd72f15eee3edb7e32a6fd5983c55-4034366-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=b2339b351f6bd72f15eee3edb7e32a6fd5983c55-4034366-images-thumbs&n=13",
    ],
    description: {
      ru: "На месте бывшего лагеря смерти для советских военнопленных.",
      en: "On the site of the former death camp for Soviet prisoners of war.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    audioDuration: "3:30",
  },
  {
    id: 6,
    name: { ru: "Парк Победы", en: "Victory Park" },
    coordinates: [53.9213, 27.5144], // Минск
    image:
      "https://avatars.mds.yandex.net/i?id=c0284dd8f76671fd69b14b0352a3d6867b763fb9-4907660-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=c0284dd8f76671fd69b14b0352a3d6867b763fb9-4907660-images-thumbs&n=13",
    ],
    description: {
      ru: "Крупный городской парк, посвященный победе в Великой Отечественной войне.",
      en: "A large city park dedicated to the victory in the Great Patriotic War.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    audioDuration: "2:00",
  },
  {
    id: 7,
    name: {
      ru: "Памятник-обелиск «Минск — город-герой»",
      en: "Obelisk 'Minsk - Hero City'",
    },
    coordinates: [53.9189, 27.5459], // Минск
    image:
      "https://avatars.mds.yandex.net/i?id=80c541ab06a500d255a9a38743dba6a7_l-8486953-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=80c541ab06a500d255a9a38743dba6a7_l-8486953-images-thumbs&n=13",
    ],
    description: {
      ru: "Установлен в честь присвоения Минску звания города-героя.",
      en: "Erected in honor of Minsk being awarded the title of hero city.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
    audioDuration: "1:40",
  },
  {
    id: 8,
    name: {
      ru: "Дом-музей I съезда РСДРП",
      en: "House-Museum of the I Congress of the RSDLP",
    },
    coordinates: [53.9008, 27.5683], // Минск
    image:
      "https://avatars.mds.yandex.net/i?id=87f9d7b718d15e2636633dba7fdf4394536b8b6a-5905616-images-thumbs&n=13",
    gallery: [
      "https://avatars.mds.yandex.net/i?id=87f9d7b718d15e2636633dba7fdf4394536b8b6a-5905616-images-thumbs&n=13",
    ],
    description: {
      ru: "Несмотря на довоенное значение, во время войны стал символом разрушения и восстановления.",
      en: "Despite its pre-war significance, during the war it became a symbol of destruction and reconstruction.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3",
    audioDuration: "2:30",
  },
  {
    id: 9,
    name: { ru: "Комплекс «Тростенец»", en: "Trostenets Memorial Complex" },
    coordinates: [53.8643, 27.7056], // Возле Минска
    image:
      "https://sch1-negoreloe.schoolnet.by/files/00708/Obj/120/31593/img/photo_2022-03-23_21-52-34.jpg",
    gallery: [
      "https://sch1-negoreloe.schoolnet.by/files/00708/Obj/120/31593/img/photo_2022-03-23_21-52-34.jpg",
    ],
    description: {
      ru: "Один из крупнейших лагерей смерти на оккупированной территории СССР.",
      en: "One of the largest death camps in the occupied territory of the USSR.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3",
    audioDuration: "4:00",
  },
  {
    id: 10,
    name: {
      ru: "Памятник подпольщикам",
      en: "Monument to Underground Fighters",
    },
    coordinates: [53.901395, 27.561638], // Минск
    image:
      "https://minsknews.by/wp-content/uploads/2020/05/IMG_20200508_144229_1-e1588944632970.jpg",
    gallery: [
      "https://minsknews.by/wp-content/uploads/2020/05/IMG_20200508_144229_1-e1588944632970.jpg",
    ],
    description: {
      ru: "Посвящен участникам минского подполья.",
      en: "Dedicated to the participants of the Minsk underground.",
    },
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3",
    audioDuration: "1:58",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MyMap />} />
        <Route
          path="/regions/vitebsk"
          element={
            <RegionsPage
              regionName="Витебская область"
              landmarks={vitebskLandmarks}
              initialMapCenter={[55.1906, 30.2078]}
              initialMapZoom={10}
              // ymapsApiKey="YOUR_YANDEX_MAPS_API_KEY" // ОБЯЗАТЕЛЬНО ЗАМЕНИТЕ
            />
          }
        />
        <Route
          path="/regions/minsk"
          element={
            <RegionsPage
              regionName="Минская область"
              landmarks={minskLandmarks}
              initialMapCenter={[53.9, 27.5667]} // Центр Минска
              initialMapZoom={9}
            />
          }
        />
        <Route
          path="/regions/grodno"
          element={
            <RegionsPage
              regionName="Гродненская область"
              landmarks={grodnoLandmarks}
              initialMapCenter={[53.68, 23.82]} // Центр Гродно
              initialMapZoom={10}
            />
          }
        />
        <Route
          path="/regions/mogilev"
          element={
            <RegionsPage
              regionName="Могилевская область"
              landmarks={mogilevLandmarks}
              initialMapCenter={[53.9, 30.34]} // Центр Могилева
              initialMapZoom={10}
            />
          }
        />
        <Route
          path="/regions/brest"
          element={
            <RegionsPage
              regionName="Брестская область"
              landmarks={brestLandmarks}
              initialMapCenter={[52.0833, 23.6558]} // Центр Бреста
              initialMapZoom={10}
            />
          }
        />
        <Route
          path="/regions/gomel"
          element={
            <RegionsPage
              regionName="Гомельская область"
              landmarks={gomelLandmarks}
              initialMapCenter={[52.435, 30.985]} // Центр Гомеля
              initialMapZoom={10}
            />
          }
        />
        <Route path="/heroes" element={<OurHeroes />} />
        <Route path="/museums" element={<MuseumsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
