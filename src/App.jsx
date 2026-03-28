import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NutritionPlanner from "./components/NutritionPlanner";
import ExerciseTracker from "./components/ExerciseTracker";
import BodyCareTracker from "./components/BodyCareTracker";
import AppLayout from "./components/AppLayout";
import Auth from "./components/Auth";
import ErrorPage from "./components/ErrorPage";

const ProtectedRoute = ({ isLoggedIn, element }) => {
  return isLoggedIn ? element : <Navigate to="/auth" replace />;
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  element: PropTypes.node.isRequired,
};

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <Auth />,
      errorElement: <ErrorPage />
    },
    {
      path: '/',
      element: isLoggedIn ? <AppLayout /> : <Navigate to="/auth" replace />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/exercises', element: <ExerciseTracker /> },
        { path: '/nutrition', element: <NutritionPlanner /> },
        { path: '/bodycare', element: <BodyCareTracker /> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;