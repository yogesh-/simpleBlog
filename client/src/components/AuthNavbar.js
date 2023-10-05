import React from "react";
import DarkModeToggle from "./DarkModeToggle";
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

export default function AuthNavbar() {
  return (
    <nav className="bg-accent p-5 md:flex md:justify-between flex flex-col sticky h-16">
      <div className="flex justify-between">
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
