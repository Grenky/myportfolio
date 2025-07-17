import NotFoundStyle from './styles/NotFoundStyles.module.scss';


export default function NotFoundPage() {
    return(
        <div className={NotFoundStyle.wrapper}>
            <h1>404 - This page not found</h1>
            <p>sorry thsi page don't exist 😢</p>
        </div>
    );
}