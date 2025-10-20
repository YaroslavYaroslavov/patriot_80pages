import { BrowserRouter } from "react-router";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import MapPage from "./components/Map";
import RegionsPage from "./components/RegionsPage"; // Импортируйте новый компонент
import OurHeroes from "./components/OurHeroes";
import MuseumsPage from "./components/MuseumsPage";
import {
  landmarksByRegion,
  regionDisplayNames,
} from "./assets/images/landmarks.js";
import {
  vitebskLandmarks,
  minskLandmarks,
  brestLandmarks,
  gomelLandmarks,
  mogilevLandmarks,
  grodnoLandmarks,
} from "./assets/images/landmarks.js";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/map"
          element={
            <MapPage
              initialMapCenter={[53.9, 27.5667]} // Центр Беларуси
              initialMapZoom={7} // Для всей страны
            />
          }
        />
        {/* Динамический маршрут для страниц регионов */}
        <Route
          path="/regions/:regionKey" // :regionKey будет параметром URL
          element={<RegionPageWrapper />}
        />
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

function RegionPageWrapper({ ymapsApiKey }) {
  const { regionKey } = useParams(); // Получаем regionKey из URL
  // Проверяем, существует ли такой регион
  const regionLandmarks = landmarksByRegion[regionKey];
  const regionDisplayName = regionDisplayNames[regionKey];
  if (!regionLandmarks) {
    // Можно отобразить страницу 404 или перенаправить
    return <div>Регион не найден!</div>;
  }
  // Определяем начальный центр карты для конкретного региона
  // Можно взять координаты первой достопримечательности или заранее заданные для региона
  const initialCenter =
    regionLandmarks.length > 0
      ? regionLandmarks[0].coordinates
      : [53.9, 27.5667]; // Дефолт для Минска, если нет достопримечательностей
  return (
    <RegionsPage
      regionName={regionDisplayName}
      landmarks={regionLandmarks}
      initialMapCenter={initialCenter}
      initialMapZoom={10} // Более крупный зум для региона
      ymapsApiKey={ymapsApiKey}
    />
  );
}

export default App;
