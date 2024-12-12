import React, { useRef } from "react";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import CurrentFreelancing from "./CurrentFreelancing";
import RecentlyPost from "./RecentlyPost";
import OurFeatures from "./OurFeaturesFreeLancing/OurFeatures";
import BookSlot from "./BookSlot";
import Support from "./Support";
import ListenFreelancers from "./ListenFreelancers";

const Freelancing = () => {
  const freelancingPageRef = useRef(null);

  const scrollToFreelancingPage = () => {
    if (freelancingPageRef.current) {
      freelancingPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header scrollToFreelancingPage={scrollToFreelancingPage} />
      <HowItWorks />
      {/* <div ref={freelancingPageRef}>
        <FreelancingPage />
      </div> */}
      <div ref={freelancingPageRef}>
        <CurrentFreelancing />
      </div>
      {/* <OurSourseSearchByCategory /> */}
      <RecentlyPost />
      <OurFeatures />
      <ListenFreelancers />
      <BookSlot />
      <Support />
    </div>
  );
};

export default Freelancing;
