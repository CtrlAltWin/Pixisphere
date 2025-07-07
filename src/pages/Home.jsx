import React, { useEffect } from "react";
import { setPhotographers } from "../../utils/photographerSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
const dispatch = useDispatch();
  const photographers = useSelector(store=> store.photographers)
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/photographers");
      dispatch(setPhotographers(response.data));
    };
    fetchData();
  }, []);

  return <div>Home</div>;
};

export default Home;
