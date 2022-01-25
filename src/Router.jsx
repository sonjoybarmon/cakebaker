import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Home } from "./components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
            path="/home/*"
            element={
              <div>
                <Outlet />
              </div>
            }
          >
            <Route path="page1" element={<h1>home page 1</h1>} />
            <Route path="page2" element={<h1>home page 2</h1>} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
