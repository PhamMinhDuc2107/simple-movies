import React from "react";

const Button = ({
   onClick,
   className,
   type = "button",
   children,
   bgColor = "primary",
}) => {
   switch (bgColor) {
      case "primary":
         bgColor = "bg-primary";
         break;
      case "secondary":
         bgColor = "bg-secondary";
         break;
      default:
         bgColor = "bg-primary";
   }
   return (
      <button
         type={type}
         onClick={() => onClick()}
         className={` px-6 py-3 mt-auto font-medium capitalize rounded-lg ${bgColor} ${className}`}
      >
         {children}
      </button>
   );
};

export default Button;
