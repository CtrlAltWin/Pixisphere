import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import PriceRangeFilter from "../components/PriceRangeFilter";
import RatingFilter from "../components/RatingFilter";
import StylesFilter from "../components/StylesFilter";
import PhotographerCard from "../components/PhotographerCard";
import { useNavigate } from "react-router-dom";
import CityFilter from "../components/CityFilter";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters } from "../../utils/filterSlice";

const Home = () => {
  const navigate = useNavigate();
  const [photographers, setPhotographers] = useState([]);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);
  const filters = useSelector((store) => store.filters);
  const dispatch = useDispatch();
  const {
    searchTerm,
    priceRange,
    minRating,
    selectedStyles,
    selectedCity,
    sortBy,
  } = filters;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/photographers");
      setPhotographers(response.data);
      setFilteredPhotographers(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterAndSortPhotographers = () => {
      const filteredData = photographers.filter((photographer) => {
        return (
          (photographer.name
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase()) ||
            photographer.location
              .toLowerCase()
              .includes(searchTerm.trim().toLowerCase()) ||
            photographer.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.trim().toLowerCase())
            )) &&
          (selectedStyles.length === 0 ||
            selectedStyles.every((style) =>
              photographer.styles.includes(style)
            )) &&
          (!selectedCity || photographer.location === selectedCity) &&
          photographer.price <= priceRange &&
          photographer.rating >= minRating
        );
      });
      switch (sortBy) {
        case "price-asc":
          filteredData.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filteredData.sort((a, b) => b.price - a.price);
          break;
        case "rating-desc":
          filteredData.sort((a, b) => b.rating - a.rating);
          break;
        case "rating-asc":
          filteredData.sort((a, b) => a.rating - b.rating);
          break;
        case "name-asc":
          filteredData.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }
      setFilteredPhotographers(filteredData);
    };
    const timeout = setTimeout(() => {
      filterAndSortPhotographers();
    }, 300);

    return () => clearTimeout(timeout);
  }, [filters, photographers]);

  // if (!photographers.length) return <div>shimmer</div>;
  if (!filteredPhotographers.length)
    return (
      <div className="flex flex-col gap-4 items-center h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-72">
        <p className="font-semibold text-xl">No Photographs Found!!</p>
        <button
          className="h-fit w-fit bg-white border border-gray-300 px-4 py-2 rounded hover:scale-105 duration-400 transition-transform ease-out"
          onClick={() => dispatch(resetFilters())}
        >
          Clear Filters
        </button>
      </div>
    );
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 px-2 sm:px-5 md:px-7">
      <div className="grid md:grid-cols-[320px_1fr] md:space-x-4 lg:space-x-8 py-8 space-y-8">
        <div className="flex-col filter-container space-y-8">
          <PriceRangeFilter />
          <RatingFilter />
          <CityFilter />
          <StylesFilter />
          <button
            className="border border-gray-300 w-full py-2 bg-white rounded-lg hover:scale-102 duration-200 ease-out transition-transform"
            onClick={() => {
              dispatch(resetFilters());
            }}
          >
            Clear Filters
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 h-fit gap-4">
          {filteredPhotographers.map((photographer) => (
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
