import Header from "../../components/Header/Header";
import HomeContent from "./HomeComponents/HomeContent/HomeContent";


export default function HomePage() {
    return(
        <div className="home-wrapper">
            <Header />
            <HomeContent />
        </div>
    )
}