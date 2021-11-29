import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPubs } from "../../../Redux/Actions/pubAction";
const Offer = () => {
  const dispatch = useDispatch();
  const pubs = useSelector((state) => state.pubReducer.pubs);
  const loading = useSelector((state) => state.pubReducer.loadPub);
  console.log("public", pubs);

  useEffect(() => {
    dispatch(getPubs());
  }, []);

  return (
    <>
      {pubs.map((pub) => (
        <h1>Hi Ali</h1>
      ))}
    </>
  );
};

export default Offer;
