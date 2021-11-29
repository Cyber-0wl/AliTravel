import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PubOffers = () => {
  const dispatch = useDispatch();
  const pubs = useSelector((state) => state.pubReducer.pubs);
  const loading = useSelector((state) => state.pubReducer.loadPub);
  console.log("public", pub);
  return <div></div>;
};

export default PubOffers;
