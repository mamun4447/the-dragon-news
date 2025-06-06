import React from "react";
import { useLoaderData } from "react-router-dom";

const Newses = () => {
  const { data } = useLoaderData();

  return <div>{data.length}</div>;
};

export default Newses;
