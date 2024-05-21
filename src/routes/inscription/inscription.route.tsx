import { createRoute } from "@tanstack/react-router"
import { InscriptionPage } from "../../features/inscription/inscriptionPage"
import { navigationLayoutRoute } from "../navigation.layout"


export const inscriptionRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/inscription',
    component: () => <InscriptionPage />
})
