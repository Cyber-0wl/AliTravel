import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../Redux/Actions/postAction";
import OffersCard from "../../OffersCard/OffersCard";
import "./Memories.css";

const Memories = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  const loading = useSelector((state) => state.postReducer.loadPost);

  console.log("posts", posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="offers">
      <p>Discover more memories</p>
      {loading ? (
        <p>loading</p>
      ) : (
        // ??? lol
        posts?.posts?.map((el) => (
          <div className="offers1">
            <OffersCard el={el} className="offersCards" />
          </div>
        ))
      )}
    </div>
  );
};

export default Memories;
