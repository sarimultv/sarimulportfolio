import About from "./components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Home from "./components/Home";
import Banner from "./components/Banner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Banner />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
