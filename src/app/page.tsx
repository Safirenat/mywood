import Image from "next/image";
import styles from "./page.module.css";
import MainContainer from "./components/containers/main.container";
import HomeSection from "./components/sections/home.section";
import CategorySectionLayout from "./components/layout/category.section.layout";
import Head from 'next/head';
import CarouselHomeSection from "./components/sections/carousel.home.section";

export default function Home() {

  return (

    <>
      <Head>

        <link rel = "icon" href = "/favicon.ico" />

      </Head>

      <MainContainer>
        <HomeSection/>
        <CategorySectionLayout/>
        {/* <CarouselHomeSection/> */}

      </MainContainer>

    </>
    
  );
}
