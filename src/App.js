import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";

const App = () => {
  const DontDragRoutes = [
    {
      path: "/",
      name: "Home",
      component: <Home />,
    },
  ];
  return (
    <>
      <Router>
        <Routes>
          {DontDragRoutes.map((r, i) => (
            <Route key={i} path={r.path} element={r.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
