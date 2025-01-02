import Image from "next/image";
import styles from "./page.module.css";
import MainContainer from "./components/containers/main.container";
import HomeSection from "./components/sections/home.section";
import CategorySectionLayout from "./components/layout/category.section.layout";

export default function Home() {

  return (

    <>

    <MainContainer>

      <HomeSection/>
      <CategorySectionLayout/>

    </MainContainer>

    </>
    
  );
}
