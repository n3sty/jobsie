import NavBar from "../(components)/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body>
    <NavBar />
    {children}
    </body>;

}
