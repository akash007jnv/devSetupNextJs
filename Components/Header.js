import React from "react";

const Header = () => {
  return (
    <nav
      className=" backdrop-filter backdrop-blur-lg z-50 h-auto flex shadow-md 	
 stick justify-center items-center top-0 w-full"
    >
      {/* ... Header Content ... */}
      <div className="text-center p-6 flex-row  flex justify-center items-center  gap-3">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="mx-auto w-[100px] bg- h-[100px]"
        />
      </div>
    </nav>
  );
};

export default Header;
