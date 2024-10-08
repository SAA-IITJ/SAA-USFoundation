import { create } from "domain";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Why from "./routes/why";
import Initiatives from "./routes/Initiatives";
import Contact from "./routes/Contact";
import AnnualReport from "./routes/AnnualReport";
import AuditReport from "./routes/AuditReport";
import Donate from "./routes/Donate";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/why",
      element: <Why />,
    },
    {
      path: "/initiatives",
      element: <Initiatives />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/annual-report",
      element: <AnnualReport />,
    },
    {
      path: "/audit-report",
      element: <AuditReport />,
    },
    {
      path: "/donate",
      element: <Donate />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
