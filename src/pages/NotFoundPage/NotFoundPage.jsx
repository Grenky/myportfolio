import NotFoundStyle from './styles/NotFoundStyles.module.scss';


export default function NotFoundPage() {
    return(
        <div className={NotFoundStyle['notfound-wrapper']}>
            <h1>404 - This page not found</h1>
            <p>Sorry, this page doesn't exist 😢</p>
        </div>
    );
}