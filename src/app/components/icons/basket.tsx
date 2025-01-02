import { FC, SVGProps } from "react";

interface BasketIconProps extends SVGProps< SVGSVGElement > {};

const BasketIcon: FC< BasketIconProps > = () => {

  return (

    <svg 

      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"

    >
      
    <path d="M9 22.3877C9.55228 22.3877 10 21.94 10 21.3877C10 20.8354 9.55228 20.3877 9 20.3877C8.44772 20.3877 8 20.8354 8 21.3877C8 21.94 8.44772 22.3877 9 22.3877Z" stroke="#FAFAF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    
    <path d="M20 22.3877C20.5523 22.3877 21 21.94 21 21.3877C21 20.8354 20.5523 20.3877 20 20.3877C19.4477 20.3877 19 20.8354 19 21.3877C19 21.94 19.4477 22.3877 20 22.3877Z" stroke="#FAFAF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    
    <path d="M1 1.3877H5L7.68 14.7777C7.77144 15.2381 8.02191 15.6517 8.38755 15.946C8.75318 16.2403 9.2107 16.3967 9.68 16.3877H19.4C19.8693 16.3967 20.3268 16.2403 20.6925 15.946C21.0581 15.6517 21.3086 15.2381 21.4 14.7777L23 6.3877H6" stroke="#FAFAF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    
    </svg>

  );

};

export default BasketIcon;