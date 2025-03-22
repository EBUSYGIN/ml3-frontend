import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <div>Hello world</div>,
      },
    ],
  },
]);
