import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import AllProfiles from "./pages/AllProfiles";

const App = () => {
  const location = useLocation();

  // যেসব রাউটে Navbar/Footer লুকাতে হবে
  const hideLayoutRoutes = ["/login", "/register"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div>
      {/* Navbar শো করবে শুধু তখনই, যদি hideLayout না হয় */}
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route
          path="/find-matches"
          element={
            <PrivateRoute>
              <AllProfiles />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* Footer শো করবে শুধু তখনই, যদি hideLayout না হয় */}
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default App;
