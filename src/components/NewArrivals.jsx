import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

function NewArrivals() {
  const [tshirts, setTshirts] = useState([]);
  
  useEffect(() => {
    axios.get("https://apishirts-production.up.railway.app/api/tshirts")
      .then((response) => {
        setTshirts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching t-shirts:", error);
      });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
        <div className="w-24 h-1 bg-red-800 mx-auto"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tshirts.slice(0, 6).map((tshirt) => (
          <Product key={tshirt.id} tshirt={tshirt} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;