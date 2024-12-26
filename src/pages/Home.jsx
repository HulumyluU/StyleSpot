import { Link } from "react-router";
import WelcomeSection from "../components/WelcomeSection";
import NewArrivals from "../components/NewArrivals";

function Home() {
   return (
     <div className="max-w-full">
       <WelcomeSection />
       <NewArrivals />
     </div>

   );
 }
 
 export default Home;