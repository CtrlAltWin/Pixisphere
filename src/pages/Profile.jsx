import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await axios.get(
        `http://localhost:3001/photographers/${id}`
      );
      setPhotographer(responce.data);
    };
    fetchData();
  }, [id]);

  return <div>Profile</div>;
};

export default Profile;
