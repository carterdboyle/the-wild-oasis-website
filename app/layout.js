import Navigation from "./components/navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>&copy; Copyright by the The Wild Oasis</footer>
      </body>
    </html>
  );
}
