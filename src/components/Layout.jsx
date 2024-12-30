import Footer from "./Footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="bg-gradient-to-br from-background to-muted min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
