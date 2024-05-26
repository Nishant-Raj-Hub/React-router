import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/Nishant-Raj-Hub")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div className=" text-center text-3xl text-white bg-gray-700 p-5 mx-auto ">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="github profile pic" width={300}
        className="rounded-full mt-5" 
      />
    </div>
  );
};

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Nishant-Raj-Hub")
    return response.json()
}