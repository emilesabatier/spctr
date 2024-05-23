import { createRoute } from "@tanstack/react-router"
import { DonationPage } from "../../features/inscription/donationPage"
import { inscriptionLayoutRoute } from "./inscription.layout"


type DonationSearch = {
    fromForm: boolean | undefined
}

export const donationRoute = createRoute({
    getParentRoute: () => inscriptionLayoutRoute,
    path: '/dons',
    validateSearch: (search: Record<string, unknown>): DonationSearch => {
        return {
            fromForm: Boolean(search?.fromForm ?? undefined),
        }
    },
    component: () => <DonationPage />
})
