import React from "react";
import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";
import { useLoaderData } from "react-router-dom";
import WorkWith from "../components/WorkWith";
import TopServices from "../components/TopServices";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const loadedVisas = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home | VisaVoyage</title>
      </Helmet>
      <Banner></Banner>
      <LatestVisas loadedVisas={loadedVisas}></LatestVisas>
      <WorkWith></WorkWith>
      <TopServices></TopServices>
    </div>
  );
};

export default Home;
