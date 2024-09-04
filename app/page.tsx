import { Suspense } from "react";
import AppGrid from "./(components)/appgrid";
import Hero from "./(components)/hero";
// import AppGridSkeleton from "./(components)/(skeletons)/appgridskeleton";
import Layout from "@/app/(components)/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <AppGrid />
      </Layout>
    </>
  );
}
