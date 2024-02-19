import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Error from "./ui/Error";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import updateOrder from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: Menu.loader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrder.action,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: Order.loader,
        errorElement: <Error />,
        action: updateOrder.action,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
