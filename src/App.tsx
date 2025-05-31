import {BrowserRouter, Route, Routes} from "react-router";

// layouts
import {View} from "./layouts";

// views
import {Home} from "./views/Home.tsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<View/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
