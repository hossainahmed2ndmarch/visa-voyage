import React from "react";
import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";
import { useLoaderData } from "react-router-dom";

const Home = () => {
 const loadedVisas = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <LatestVisas loadedVisas={loadedVisas}></LatestVisas>
    </div>
  );
};

export default Home;
