 import Hero from "../../components/home/Hero";

import CategorySection from "../../components/home/CategorySection";

import FeaturedListings from "../../components/home/FeaturedListings";

import TopLocations from "../../components/home/TopLocations";

import HowItWorks from "../../components/home/HowItWorks";

import RegisterCTA from "../../components/home/RegisterCTA";



export default function Home() {

  return (

    <div>

      <Hero />

      <CategorySection />

      <FeaturedListings />

      <TopLocations />

      <HowItWorks />

      <RegisterCTA />

    </div>

  );

}