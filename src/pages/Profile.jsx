import axios from "axios";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import PortfolioCard from "../components/PortfolioCard";
import ReviewCard from "../components/ReviewCard";
import ContactCard from "../components/ContactCard";
import QuickInfoCard from "../components/QuickInfoCard";

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
  if (!photographer) return <div></div>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="bg-white opacity-80 backdrop-blur-sm font-semibold text-sm border-b border-gray-300 py-6 px-2 sm:px-5 md:px-7">
        <div className="grid grid-cols-2 px-2 sm:px-5 md:px-7">
          <Link to={"/"}>
            {" "}
            <div className="flex justify-start items-center gap-2">
              <ArrowLeft width={15} />
              <p> Back to Browse</p>
            </div>
          </Link>

          <div className="flex justify-end items-center gap-8">
            <div className="inline-flex items-center gap-2">
              <Heart width={15} />
              <p>Save</p>
            </div>
            <div className="inline-flex items-center gap-2">
              <Share2 width={15} />
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr] px-2 sm:px-5 md:px-7 py-8 gap-8">
        <div className="space-y-8">
          <ProfileCard photographer={photographer} />
          <PortfolioCard portfolio={photographer.portfolio} />
          <ReviewCard reviews={photographer.reviews} />
        </div>
        <div className="space-y-8">
          <ContactCard photographer={photographer} />
          <QuickInfoCard photographer={photographer} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
