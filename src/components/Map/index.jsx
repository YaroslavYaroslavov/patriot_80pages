import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const MyMap = () => (
  <YMaps>
    <div>
      <Map
        style={{ height: "600px" }}
        defaultState={{ center: [55.194722, 30.197222], zoom: 17 }}
      >
        <Placemark
          geometry={[55.194722, 30.197222]}
          properties={{ hintContent: "Иловский ров" }}
        />
        <Placemark
          geometry={[55.198479763031, 30.221198121396]}
          properties={{
            hintContent:
              "Мемориальный знак на могиле жертв фашизма в парке 40-летия комсомола",
          }}
        />
        <Placemark
          geometry={[55.205555420246, 30.209346126123]}
          properties={{ hintContent: "Памятник героям Витебского подполья" }}
        />
        <Placemark
          geometry={[55.203333, 30.203611]}
          properties={{
            hintContent:
              "Витебский областной музей Героя Советского Союза М.Ф.Шмырева. Монументальная скульптура «М.Ф. Шмырев»",
          }}
        />
        <Placemark
          geometry={[55.202222, 30.204444]}
          properties={{ hintContent: "Памятник детям войны" }}
        />
        <Placemark
          geometry={[55.187, 30.213]}
          properties={{ hintContent: "Воинский мемориал на Успенской горке" }}
        />
      </Map>
    </div>
  </YMaps>
);
