import { Outlet } from "react-router";
import NavBar from "./nav-bar";
import Footer from "./footer";


export default function Layout() {
    return (
        <div className="px-8 pt-4 pb-32 md:pt-8 md:px-24 flex flex-col gap-y-10" id="top">
            <NavBar />
            <main className="flex flex-col gap-y-10">
                <Outlet />
            </main>
            <Footer />

        </div>
    );
}