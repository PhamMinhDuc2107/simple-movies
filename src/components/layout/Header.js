import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
   const listLink = [
      {
         id: 1,
         name: "Home",
         path: "/",
      },
      {
         id: 2,
         name: "Movies",
         path: "/movies",
      },
   ];
   return (
      <header className="flex items-center justify-center py-10 text-white gap-x-5 ">
         {listLink &&
            listLink.map((item) => (
               <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                     isActive ? "text-primary" : null
                  }
               >
                  {item.name}
               </NavLink>
            ))}
      </header>
   );
};

export default Header;
