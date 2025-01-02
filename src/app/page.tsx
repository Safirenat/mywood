import Image from "next/image";
import styles from "./page.module.css";
import MainContainer from "./components/containers/main.container";
import HomeSection from "./components/sections/home.section";

export default function Home() {

  return (

    <>

    <MainContainer>

      <HomeSection/>

    </MainContainer>

    </>
    
  );
}
