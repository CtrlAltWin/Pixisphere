import React, { useEffect } from "react";
import { setPhotographers } from "../../utils/photographerSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PriceRangeFilter from "../components/PriceRangeFilter";
import RatingFilter from "../components/RatingFilter";
import StylesFilter from "../components/StylesFilter";
import PhotographerCard from "../components/PhotographerCard";
import { useNavigate } from "react-router-dom";
import CityFilter from "../components/CityFilter";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photographers = useSelector((store) => store.photographers);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/photographers");
      dispatch(setPhotographers(response.data));
    };
    fetchData();
  }, []);
  if (!photographers) return <div></div>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 px-2 sm:px-5 md:px-7">
      <div className="grid md:grid-cols-[320px_1fr] md:gap-4 lg:gap-8 py-8">
        <div className="hidden md:flex flex-col filter-container space-y-8">
          <PriceRangeFilter />
          <RatingFilter />
          <CityFilter />
          <StylesFilter />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 h-fit gap-4">
          {photographers.map((photographer) => (
            <PhotographerCard
              photographer={photographer}
              onViewProfile={() => navigate(`/profile/${photographer.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
