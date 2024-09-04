import Link from "next/link";
import React from "react";

function SideProjectTag() {
  return (
    <Link
      href="/projects?tag=side-project"
      className="badge lg:badge-lg badge-sm badge-outline text-pink-600 hover:shadow-lg hover:shadow-pink-600"
    >
      Side-project
    </Link>
  );
}

function LearningTag() {
  return (
    <Link
      href="/projects?tag=learning"
      className="badge lg:badge-lg badge-sm badge-outline text-blue-800 hover:shadow-lg hover:shadow-blue-800"
    >
      Learning
    </Link>
  );
}

export { SideProjectTag, LearningTag };
