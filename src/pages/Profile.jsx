import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clearPhotographer, setPhotographer } from "../../utils/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const photographer = useSelector((store) => store.profile);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await axios.get(
        `http://localhost:3001/photographers/${id}`
      );
      dispatch(setPhotographer(responce.data));
    };
    fetchData();
    return () => dispatch(clearPhotographer());
  }, [id]);

  return <div>Profile</div>;
};

export default Profile;
