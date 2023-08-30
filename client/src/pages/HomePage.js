import React from "react";
import hero_img from "../assets/img/collab.png"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="w-11/12 xl:w-9/12 m-auto">
      <nav className="flex flex-row justify-between mt-6">
        <h3 className="text-2xl italic">blogSimple</h3>
        <button onClick={()=>navigate("/signup")} className="bg-accent px-4 py-2 rounded-full cursor-pointer">Signup</button>
      </nav>
      <header className="flex flex-row bg-background h-screen">
        {/* <p> this is header section</p> */}
        <section className="flex flex-col items-start justify-center  w-6/12">
          <h1 className="text-6xl font-extrabold dark:text-white ">
            Share your ideas with the World.
          </h1>
          <p className="text-lg flex justify-center mb-3">
            
            Share your ideas in the form of text,image or video with the world.<br/>
           No Limitations.
          </p>
          <span className="flex flex-row space-x-4">
          <button onClick={()=>navigate("/signup")} className="bg-accent px-4 py-2 rounded-full cursor-pointer">Signup</button>
          <button onClick={()=>navigate("/login")} className="bg-primary px-4 py-2 rounded-full cursor-pointer">Login</button>

          </span>
          
        </section>
        <main className="flex justify-center items-center w-6/12">
          <img src={hero_img} alt="man-creating-something"></img>
      </main>
      </header>
      </div>
    </>
  );
};

export default HomePage;
