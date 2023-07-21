import React, { useEffect } from "react";

export default function MainPage() {
    const fetchData = async () => {
        const res_data =  await fetch('http://localhost:3001/api/get-blog')
        const final = await res_data.json();
        console.log(final)
    }
    useEffect(()=>{
       fetchData();
    },[])  
  return (
    <div className="flex justify-center">
      <div className="w-7/12 bg-secondary h-screen flex flex-col items-center">
        <div className=" w-6/12 flex flex-col items-center border border- mb-5 mt-5 rounded">
          <h1 className="font-bold underline underline-offset-4 mb-2 mt-2">This is title of the blog</h1>

          <p>The is the blog text here from the database</p>
          <div className="flex space-x-2 mb-2">
          <h4 className="bg-primary pr-1 pl-1 rounded">User id</h4>
          <h4 className="bg-primary pr-1 pl-1 rounded">TimeStamp</h4>
          </div>
          
        </div>
        <div className=" w-6/12 flex flex-col items-center border border- mb-5 mt-5 rounded">
          <h1 className="font-bold underline underline-offset-4 mb-2 mt-2">This is title of the blog</h1>

          <p>The is the blog text here from the database</p>
          <div className="flex space-x-2 mb-2">
          <h4 className="bg-primary pr-1 pl-1 rounded">User id</h4>
          <h4 className="bg-primary pr-1 pl-1 rounded">TimeStamp</h4>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
