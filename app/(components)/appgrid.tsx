import React from "react";
import AppCard from "./appcard";

function AppGrid() {
  const apps = {
    bookmark: {
      name: "Bookmark",
      summary:
        "Bookmark tells you exactly how long you'll be reading your favorite books. It's a simple app that helps you track your reading progress and it helped me understand API's better.",
      repo: "book-experiment",
      img: "book-experiment.png",
      link: "https://bookmark.jobsie.me/",
    },
    acbud: {
      name: "ACBUD",
      summary: 
        "ACBUD is a simple app that is meant to bring people with productivity goals together. It gives them a platform to gain accountability partners and share their progress.",
      repo: "acbud",
      img: "acbud.png",
      link: "https://acbud.jobsie.me/",
    },
    jobsie: {
      name: "Jobsie",
      summary:
        "You're on the site right now! This is my personal portfolio where I keep all my different projects. On its own, it's a project that allows me to apply all that I've learned and show it off in one place.",
      repo: "jobsie",
      img: "jobsie.png",
      link: "https://jobsie.me/",
    },

  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:max-w-screen-lg max-w-screen-lg gap-8 mt-8">
      <AppCard {...apps.jobsie} />
      <AppCard {...apps.acbud} />
      <AppCard {...apps.bookmark} />
    </div>
  );
}

export default AppGrid;
