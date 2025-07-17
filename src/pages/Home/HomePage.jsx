import HomeContent from "./HomeComponents/HomeContent/HomeContent";
import HomeSkills from "./HomeComponents/HomeSkills/HomeSkills";


export default function HomePage() {
    return(
        <div className="home-wrapper">          
            <HomeContent />
            <HomeSkills />
        </div>
    )
}