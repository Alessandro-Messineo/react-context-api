import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavbar";

export default function NavbarLayout() {
    return (
        <>
            <header>
                <div className="bg-header">
                    <MainNavBar />
                </div>
            </header>
            <main>
                <div className="bg-main">
                    <Outlet />
                </div>

            </main>
        </>
    )
}