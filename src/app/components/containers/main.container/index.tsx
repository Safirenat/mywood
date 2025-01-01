import { ReactNode } from "react";
// import Footer from "../../ui/footer";
import s from "./main.container.module.scss";
import Header from "../../ui/header";

const MainContainer = ({ children }: Readonly< { children: ReactNode } > ) => {
  
  return (

    <div className = { s.mainContainer }>

      <Header />

      <div className = { s.content }>
      
        { children }
      
      </div>

      {/* <Footer auth /> */}Footer

    </div>

  );
  
};

export default MainContainer;


