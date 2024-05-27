import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Post from "../pages/Post";

const Routing = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default Routing;
