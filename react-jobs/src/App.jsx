import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Homecards } from "./components/Homecards";
import { JobListings } from "./components/JobListings";
import { ViewAllJobs } from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Homecards />
    <JobListings />
    <ViewAllJobs />

    </>
  );
};

export default App;
