import { createRoute } from "@tanstack/react-router"
import { DonationsPage } from "../../features/donations/donationsPage"
import { navigationLayoutRoute } from "../navigation.layout"


export const donationsRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/dons',
    component: () => <DonationsPage />
})
