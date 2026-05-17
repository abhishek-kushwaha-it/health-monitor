import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import NutritionPlanner from "./components/NutritionPlanner.tsx";
import ExerciseTracker from "./components/ExerciseTracker.tsx";
import BodyCareTracker from "./components/BodyCareTracker.tsx";
import AppLayout from "./components/AppLayout.tsx";
import Auth from "./components/Auth.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import { RootState } from "./store/index.ts";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  element: ReactNode;
}

const ProtectedRoute = ({ isLoggedIn, element }: ProtectedRouteProps) => {
  return isLoggedIn ? element : <Navigate to="/auth" replace />;
};

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

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