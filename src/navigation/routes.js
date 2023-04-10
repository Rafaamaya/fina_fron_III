import { lazy } from "react";

const Home = lazy(() => import('../screens/Home/Home'))
const Contact = lazy(() => import('../screens/Contact/Contact'))
const Favs = lazy(() => import('../screens/Favs/Favs'))
const Detail = lazy(() => import('../screens/Detail/Detail'))
const ErrorPage = lazy(() => import('../screens/ErrorPage/ErrorPage'))


export const navigation = [
  {
    id: 1,
    path: "/",
    Element: Home,
  },
  {
    id: 2,
    path: "/contact",
    Element: Contact,
  },
  {
    id: 3,
    path: "/favs",
    Element: Favs,
  },
  {
    id: 4,
    path: "/home/detail/:id",
    Element: Detail,
  },
  {
    id: 5,
    path: "*",
    Element: ErrorPage,
  }
];
