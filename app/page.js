"use client";

import SideNavBar from "./components/SideNavBar";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import BusinessList from "./components/BusinessList";

import { useEffect, useState } from "react";
import GlobalApi from "./services/GlobalApi";

export default function Home() {
  // const [businessList, setBusinessList] = useState([]);
  // const [selectedBusiness, setSelectedBusiness] = useState([]);
  useEffect(() => {
    getNearByPlace();
  }, []);

  const getNearByPlace = () => {
    GlobalApi.getNearByPlace("gas_station", "35.5827712", "-80.8484864").then(
      (resp) => {
        console.log(resp);
      }
    );
  }; // llamo a la función getNearByPlace cuando el componente se monta por primera vez. La función getNearByPlace hace una solicitud para obtener lugares cercanos utilizando la API GlobalApi.getNearByPlace y luego imprime la respuesta en la consola.
  return (
    <div className="flex">
      <SideNavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
        <div>
          {/* SearchBar */}
          <SearchBar />
          {/* Category List */}
          <CategoryList />
          {/* Business List  */}
          <BusinessList />
        </div>

        {/* Google Map */}
        <div>Google Map</div>
      </div>
    </div>
  );
}
