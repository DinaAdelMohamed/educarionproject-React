import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from "./App";
import Allabout from "./About/Allabout";
import Allserves from "./Service/Allserves";
import Allconct from "./Conctpage/Allconct";
import Allfeatch from "./FEATER/Allfeatch";
import Allpeodectpage from "./PRODECTS/Allpeodectpage";
import Allcart from "./CART/Allcart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <Allabout/>,
  },
  {
    path: "servise",
    element: <Allserves/>,
  },
  {
    path: "conct",
    element: <Allconct/>,
  },
  {
    path: "featsh",
    element: <Allfeatch/>,
  },
  {
    path: "prodect",
    element: <Allpeodectpage/>,
  },
  {
    path: "cart",
    element: <Allcart/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
