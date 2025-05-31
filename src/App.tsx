import {BrowserRouter, Route, Routes} from "react-router";
import loadable from "@loadable/component"

// layouts
import {View} from "./layouts";
import {Suspense} from "react";

// components
import {SplashScreen} from "./components";

// views
const Home = loadable(() => import("./views/Home"))

export const App = () => {
    return (
        <Suspense fallback={<SplashScreen/>}>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<View/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
