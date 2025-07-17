import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import Resume from "../pages/Resume/Resume";
import Contacts from "../pages/Contacts/Contacts";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />}/>
                <Route path="resume" element={<Resume />}/>
                <Route path="contacts" element={<Contacts />}/>

                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
}