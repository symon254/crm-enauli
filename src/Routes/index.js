import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
//const Layout = lazy(() => import("../container/Layout1"));
const Fleet = lazy(() => import("../Pages/Fleet/Fleet"));
const Operator = lazy(() => import("../Pages/Operator/Operator"));
const Officials = lazy(() => import("../Pages/Officials/Official"));
const Sacco = lazy(() => import("../Pages/Sacco/Sacco"));
const Charge = lazy(() => import("../Pages/Charge/Charge"));

const screens = [
    {
        component: Home,
        path: "/home",
    },
    {
        component: Sacco,
        path: "/sacco",
    },
    {
        component: Fleet,
        path: "/fleet",
    },
    {
        component: Operator,
        path: "/operator",
    },
    {
        component: Officials,
        path: "/official",
    },
    {
        component: Charge,
        path: "/charge",
    },
];

export default screens;
