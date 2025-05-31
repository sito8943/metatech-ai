import {Outlet} from "react-router";

// components
import {Navbar, Footer} from "./components";

// styles
import "./styles.css"

export const View = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};
