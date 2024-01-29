import { createRoute } from "@tanstack/react-router"
import { navigationLayoutRoute } from "../navigation.layout"


export const teamRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/equipe',
    component: () => <></>
})
