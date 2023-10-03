import React from "react";
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

export default function AuthNavbar() {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-accent p-5 md:flex md:justify-between flex flex-col sticky h-16">
      <div className="flex justify-between">
        {/* {window.location.href.indexOf('login') > -1 || window.location.href.indexOf('signup') > -1 ?  } */}

        <div>
          <a className="text-background" href="/">
            blogSimple
          </a>
        </div>
      </div>
      <div></div>
    </nav>
  );
}
