import { Link } from "react-router";
import WelcomeSection from "../components/WelcomeSection";
import NewArrivals from "../components/NewArrivals";
import NewAnimeArrivals from "../components/NewAnimeArrivals";
import ExploreMore from "../components/ExploreMore";

function Home() {
   return (
     <div className="max-w-full">
       <WelcomeSection />
       <NewArrivals />
       <NewAnimeArrivals />
       <ExploreMore />
     </div>

   );
 }
 
 export default Home;