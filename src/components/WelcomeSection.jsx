import { Link } from "react-router"

function WelcomeSection({}){
  return <div className="relative w-full h-[calc(100vh-64px)]">
  <img 
    src="../../bg_img1.jpg" 
    alt="bg img" 
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold text-white">Welcome to StyleSpot</h1>
    <p className="text-xl text-gray-200 mt-4">
      Discover the latest trends and styles for your wardrobe.
    </p>
    <Link
        to="/shop"
        className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:text-[#590000] hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 ease-in-out"
        >
        Shop now
     </Link>
  </div>
</div>
}

export default WelcomeSection