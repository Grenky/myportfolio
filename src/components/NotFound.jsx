import Header from "./Header";
import '../styles/NotFound.scss';

export default function NotFound() {
    return(
        <div className="notfound-wrapper">
            <Header />
            <div>
                <h1>Sorry this page not found 😞</h1>
            </div>
        </div>
    )
}