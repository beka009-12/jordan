import AdminPage from "../components/admin/AdminPage";
import HomePage from "../components/home/HomePage";
import Brands from "../components/pages/Brands";

export const link = [
  {
    link: "/",
    element: <HomePage />,
  },
  {
    link: "/New",
    element: "",
    title: "New",
  },
  {
    link: "/Men",
    element: "",
    title: "Men",
  },
  {
    link: "/Women",
    element: "",
    title: "Women",
  },
  {
    link: "/Kids",
    element: "",
    title: "Kids",
  },
  {
    link: "/Jordan",
    element: <Brands />,
    title: "Jordan",
  },
  {
    link: "/Admin",
    element: <AdminPage />,
    title: "Admin",
  },
];
