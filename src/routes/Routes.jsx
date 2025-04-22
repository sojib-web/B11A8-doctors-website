// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DoctorDetails from "../Components/DoctorDetails/DoctorDetails";
// import Booking from "../Components/Booking/Booking";
import BookingList from "../Components/BookingList/BookingList";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>Loading....... please wait</p>,
        loader: () => fetch("../doctors.json"),
      },
      {
        path: "/doctorDetails/:id",
        loader: () => fetch("../doctors.json"),
        Component: DoctorDetails,
      },

      {
        path: "/my_booking",
        loader: () => fetch("../doctors.json"),
        Component: BookingList,
      },

      {
        path: "/blog",
        loader: () => fetch("../question.json"),
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
