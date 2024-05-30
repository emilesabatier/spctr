import { createRoute } from "@tanstack/react-router"
import ManifestPage from "../../features/manifest/manifestPage"
import { navigationLayoutRoute } from "../navigation.layout"


export const manifestRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/manifeste',
    component: () => <ManifestPage />
})
