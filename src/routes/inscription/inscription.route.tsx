import { createRoute } from "@tanstack/react-router"
import { InscriptionPage } from "../../features/inscription/inscriptionPage"
import { inscriptionLayoutRoute } from "./inscription.layout"


export const inscriptionRoute = createRoute({
    getParentRoute: () => inscriptionLayoutRoute,
    path: '/',
    component: () => <InscriptionPage />
})
