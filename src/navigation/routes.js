import { lazy } from "react";

const Home = lazy(() => import('../screens/Home'))
const Contact = lazy(() => import('../screens/Contact'))
const Favs = lazy(() => import('../screens/Favs'))
const Detail = lazy(() => import('../screens/Detail'))
const ErrorPage = lazy(() => import('../screens/ErrorPage'))


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
