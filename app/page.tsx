import { Suspense } from "react";
import AppGrid from "./(components)/appgrid";
import Hero from "./(components)/hero";
import NavBar from "./(components)/navbar";
import AppGridSkeleton from "./(components)/(skeletons)/appgridskeleton";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center px-8 py-4 lg:p-24">
        <Hero />
        <Suspense fallback={<AppGridSkeleton />}>
          <AppGrid />
        </Suspense>
      </main>
    </>
  );
}
