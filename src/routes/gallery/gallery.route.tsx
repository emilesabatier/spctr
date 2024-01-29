import { createRoute } from "@tanstack/react-router"
import { navigationLayoutRoute } from "../navigation.layout"


export const galleryRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/galerie',
    component: () => <></>
})
