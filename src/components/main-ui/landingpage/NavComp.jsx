import React, { useState } from "react";
import bg1 from "../../../assets/landingpage/bg1.png";
import { Link } from "react-router-dom";

export const NavComp = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  return (
    <section id="home">
      <div
        class="w-full pb-24 px-2"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <ul class="flex items-center justify-evenly bg-gray-100  flex-wrap gap-10 text-white text-xl py-8 px-8">
          <li
            class="inline-block  font-semibold"
            style={{ fontFamily: "Lekton", fontSize: "40px" }}
          >
            App Pilot
          </li>
          <li className="max-md:flex max-md:flex-wrap max-md:flex-col max-md:ml-10 max-md:gap-6">
            <button
              className={`mr-12 max-sm:mr-12 ${
                activeSection === "home" ? "active" : ""
              }`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className={`mr-12 max-sm:mr-12 ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => scrollToSection("about")}
            >
              About Us
            </button>
            <button
              className={`mr-12 max-sm:mr-12 ${
                activeSection === "features" ? "active" : ""
              }`}
              onClick={() => scrollToSection("features")}
            >
              Features
            </button>
            <button
              className={`mr-12 max-sm:mr-12 ${
                activeSection === "security" ? "active" : ""
              }`}
              onClick={() => scrollToSection("security")}
            >
              Security
            </button>
          </li>
          <li class="inline-block font-semibold text-lg">
            <Link to="/app-pilot">
              <button className="border rounded-lg p-4 px-11   ">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
        <div className="d-flex flex-column flex-wrap items-center justify-center xl:ml-60 sm:justify-center mt-10 pb-10 max-md:text-center max-xl:text-center">
          <button className="text-bg-secondary font-semibold p-3 px-5 py-3 rounded-md mb-1 bg-[#2e2e2e] text-xl">
            Who We Are
          </button>
          <h1 className="text-6xl font-semibold text-white leading-snug tracking-wide max-md:text-5xl">
            Welcome to App Pilot <br/>Your Ultimate AI Powered<br/>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(238,29,35, 0.5), rgb(0, 0, 0,0))",
                color: "red",
              }}
            >
              Knowledge Platform
            </span>
          </h1>
          <p className="text-white mt-5 text-xl">
          An all-in-one platform for all your queries and prompts, based on a knowledge base,
            <br />  delivered in seconds.
          </p>
         
        </div>
      </div>
    </section>
  );
};
