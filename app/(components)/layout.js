import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center px-8 py-4 lg:p-24">{children}</main>
    </>
  );
}
