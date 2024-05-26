import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="bg-slate-700 text-white text-center p-4 flex flex-col justify-around items-center min-h-screen">
      <h1 className="font-bold text-2xl">{data.name}</h1>
      <h1>Github Followrs: {data.followers}</h1>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

const githubInfo = async () => {
  const res = await fetch("https://api.github.com/users/saikat-kar");

  return res.json();
};

export { githubInfo };
export default Github;
