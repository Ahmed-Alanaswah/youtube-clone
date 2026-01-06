import Body from "./components/Body";
import Head from "./components/Head";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Head />

      {/* <Body /> */}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
