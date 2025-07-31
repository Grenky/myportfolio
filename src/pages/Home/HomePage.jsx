import HomeContent from "./HomeComponents/HomeContent/HomeContent";
import HomeProjects from "./HomeComponents/HomeProjects/HomeProjects";
import HomeSkills from "./HomeComponents/HomeSkills/HomeSkills";


export default function HomePage() {
    return(
        <div className="home-wrapper">          
            <HomeContent />
            <HomeSkills />
            <HomeProjects />
        </div>
    )
}