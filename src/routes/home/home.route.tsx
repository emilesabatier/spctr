import { createRoute } from "@tanstack/react-router"
import HomePage from "../../features/home/homePage"
import { navigationLayoutRoute } from "../navigation.layout"


export const homeRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/',
    component: () => <HomePage />
})
