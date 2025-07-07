import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import PriceRangeFilter from "../components/PriceRangeFilter";
import RatingFilter from "../components/RatingFilter";
import StylesFilter from "../components/StylesFilter";
import PhotographerCard from "../components/PhotographerCard";
import { useNavigate } from "react-router-dom";
import CityFilter from "../components/CityFilter";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const [photographers, setPhotographers] = useState([]);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);
  const filters = useSelector((store) => store.filters);
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
            selectedStyles.some((style) =>
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

  if (!photographers.length) return <div>shimmer</div>;
  if (!filteredPhotographers.length) return <div>clearfilters</div>;
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
