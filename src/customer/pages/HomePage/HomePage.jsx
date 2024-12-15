import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Maincarousel from '../../components/Homecarousel/Maincarousel';
import HomeSection from '../../components/HomeSection/HomeSection';
import { agethree } from '../../../Data/age1/agethree';
import { ageeight } from '../../../Data/age2/ageeight';
import { agetwelve } from '../../../Data/agetwelve';


const HomePage = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">Playtime Paradise</h1>
        <h1 >Where Fun and Imagination Begin!</h1>
      </div>
      <Maincarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Link to="/category/toys/Action">
          <HomeSection data={ageeight} sectionName={"0-3 Years"} />
        </Link>
        <Link to="/category/toys/Action">
          <HomeSection data={agethree} sectionName={"3-8 Years"} />
        </Link>
        <Link to="/category/toys/Action">
          <HomeSection data={agetwelve} sectionName={"8+ Years"} />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
