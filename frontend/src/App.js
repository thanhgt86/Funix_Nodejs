import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import AddProduct from "./components/AddProduct";
import AdminProduct from "./components/AdminProduct";
import EditProduct from "./components/EditProduct";
import { ErrorPage } from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/add-product", element: <AddProduct /> },
      { path: "/admin-product", element: <AdminProduct /> },
      { path: "/edit-product/:prodId", element: <EditProduct /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
