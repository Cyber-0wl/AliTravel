import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../Redux/Actions/postAction";
import "./FormMemory.css";

const FormMemory = (props) => {
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const addPostHandler = (post) => {
    // console.log('clicked')
    if (country === "" && message === "") {
      alert("Please make sure that you fill the country and the message ");
      return;
    }
    dispatch(createPost(post));
  };
  // if(country==="" && message===""){
  //   alert("Please make sure that you")
  // }

  return (
    <div className="memories">
      <div className="addMemories">
        <h1>Hello {user.name} !</h1>
        <p>Share with us your Memories</p>
        {/* <h3>Travel with us </h3> */}

        <input
          className="inputMemory-countries"
          type="text"
          placeholder="the countries"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          className="inputMemory-message"
          type="text"
          placeholder="your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* add image  */}
        <Link to="/">
          <button
            className="memoryBtn"
            onClick={() => addPostHandler({ tags: [country], message })}
          >
            submit
          </button>
        </Link>
      </div>
      <div className="memoriesPic">
        <img src="/img/travel1.jpg" alt="travel1" />
        <img src="/img/tarvel2.jpg" alt="travel2" />

        <img src="/img/travel3.jpg" alt="travel3" />
        <img src="/img/travel4.jpg" alt="travel4" />

        <img src="/img/travel5.jpg" alt="travel5" />
      </div>
    </div>
  );
};

export default FormMemory;
