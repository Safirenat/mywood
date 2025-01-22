import { FC, SVGProps } from "react";

interface HamburgerIconProps extends SVGProps< SVGSVGElement > {};

const HamburgerIcon: FC< HamburgerIconProps > = () => {

  return (

    <svg width="60" height="24" viewBox="0 0 60 24">

        <rect width="60" height="3" rx="1.5" fill="#FAFAF2" />
        <rect y="10" width="60" height="3" rx="1.5" fill="#FAFAF2" />
        <rect y="20" width="60" height="3" rx="1.5" fill="#FAFAF2" />
        
    </svg>

  );

};

export default HamburgerIcon;