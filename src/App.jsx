import React, { useEffect } from "react"; // Убрали useLocation из импорта React
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom"; // Все из react-router-dom

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MapPage from "./components/Map"; // Убедитесь, что это правильное имя файла для MapPage
import RegionsPage from "./components/RegionsPage";
import OurHeroes from "./components/OurHeroes";
import MuseumsPage from "./components/MuseumsPage";
import { LanguageProvider, useLanguage } from "./context/LanguageContext.jsx";

// Проверьте этот путь! Обычно данные лежат в src/data/allLandmarks.js
import {
  landmarksByRegion,
  regionDisplayNames,
  // allLandmarks, // Если MapPage использует allLandmarks, убедитесь, что он импортирован там
} from "./assets/images/landmarks.js";
import ScrollToTopButton from "./components/ScrollToTopButton/index.jsx";

// Если MapPage использует ymapsApiKey, он должен получать его через пропсы
// или иметь свой дефолтный, если нет централизованного управления.
// Я оставил его здесь для примера, но лучше управлять им централизованно.
const YMAPS_API_KEY = "92ef74ac-91c7-48b8-96a8-210b6ddf84e1";

// Компонент для скролла, который использует useLocation
const ScrollToTop = ({ children, scrollOffset = 0 }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: scrollOffset, // Используем переданное смещение
      behavior: "smooth",
    });
  }, [location.pathname, scrollOffset]); // Зависимости: изменение пути и смещения

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Header /> {/* Header находится вне Routes, так как он постоянный */}
        <ScrollToTopButton scrollOffset={406}>
          {" "}
          {/* Обертываем Routes в компонент скролла */}
          <Routes>
            <Route path="/patriot_80pages" element={<HomePage />} />
            <Route
              path="/map"
              element={
                <MapPage
                  ymapsApiKey={YMAPS_API_KEY} // Передаем API ключ в MapPage
                  initialMapCenter={[53.9, 27.5667]}
                  initialMapZoom={7}
                />
              }
            />
            {/* Динамический маршрут для страниц регионов */}
            <Route
              path="/regions/:regionKey"
              element={<RegionPageWrapper ymapsApiKey={YMAPS_API_KEY} />} // Передаем API ключ в обертку
            />

            {/* Убраны повторяющиеся статические маршруты для регионов */}

            <Route path="/heroes" element={<OurHeroes />} />
            <Route path="/museums" element={<MuseumsPage />} />
          </Routes>
        </ScrollToTopButton>
      </LanguageProvider>
    </BrowserRouter>
  );
}

// Компонент-обертка для RegionsPage
function RegionPageWrapper({ ymapsApiKey }) {
  const { regionKey } = useParams();
  const { language, getText } = useLanguage(); // Используем хук языка
  const regionLandmarks = landmarksByRegion[regionKey];
  // regionDisplayName теперь будет извлекаться через getText
  const regionDisplayNameTranslations = regionDisplayNames[regionKey];
  if (!regionLandmarks || !regionDisplayNameTranslations) {
    return (
      <div>
        {getText({
          ru: `Регион "${regionKey}" не найден!`,
          en: `Region "${regionKey}" not found!`,
          by: `Рэгіён "${regionKey}" не знойдзен!`,
        })}
      </div>
    );
  }
  const initialCenter =
    regionLandmarks.length > 0
      ? regionLandmarks[0].coordinates
      : [53.9, 27.5667];
  return (
    <RegionsPage
      regionName={getText(regionDisplayNameTranslations)} // Передаем переведенное имя региона
      landmarks={regionLandmarks}
      initialMapCenter={initialCenter}
      initialMapZoom={10}
      ymapsApiKey={ymapsApiKey}
      currentLanguage={language} // Передаем текущий язык в RegionsPage
    />
  );
}

export default App;
