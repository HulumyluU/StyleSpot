import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

function NewAnimeArrivals() {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    axios
      .get("https://apishirts-production.up.railway.app/api/tshirts")
      .then((response) => {
        setTshirts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching t-shirts:", error);
      });
  }, []);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="relative  w-full h-[33vh] overflow-hidden mb-10">
        <img
          className="w-full h-full object-cover"
          src="../public/img1.jpg"
          alt="Anime Style T-shirts"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl bg-black bg-opacity-50">
          Anime Style T-shirts
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-w-7xl mx-auto">
        {tshirts.slice(41, 47).map((tshirt) => (
          <Product key={tshirt.id} tshirt={tshirt} />
        ))}
      </div>
    </div>
  );
}

export default NewAnimeArrivals;
