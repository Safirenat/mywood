import Link from "next/link";
import { FC } from "react";
import s from "./logo.module.scss";
import LogoIcon from "../../icons/logo";

const Logo: FC = () => {

  return (

    <div className = { s.link }>
      
      <Link href = '/' className = { s.link }>
      
        <LogoIcon />

      </Link>
      
    </div>

  );

};

export default Logo;