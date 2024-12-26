import Header from "./header";

function Layout({ children }) {
  return (
    <div className="bg-gradient-to-br from-background to-muted min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-6 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Maksym Sovyk. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
