import { createRouter } from "@tanstack/react-router"
import { contactRoute } from "./contact/contact.route"
import { donationsRoute } from "./donations/donations.route"
import { eventsRoute } from "./events/events.route"
import { galleryRoute } from "./gallery/gallery.route"
import { homeRoute } from "./home/home.route"
import { donationRoute } from "./inscription/donation.route"
import { inscriptionLayoutRoute } from "./inscription/inscription.layout"
import { inscriptionRoute } from "./inscription/inscription.route"
import { manifestRoute } from "./manifest/manifest.route"
import { navigationLayoutRoute } from "./navigation.layout"
import { rootLayoutRoute } from "./root.route"
import { teamRoute } from "./team/team.route"


const routeTree = rootLayoutRoute.addChildren([
    navigationLayoutRoute.addChildren([
        homeRoute,
        eventsRoute,
        galleryRoute,
        teamRoute,
        manifestRoute,
        contactRoute,
        donationsRoute,
        inscriptionLayoutRoute.addChildren([
            inscriptionRoute,
            donationRoute
        ])
    ])
])


export const router = createRouter({
    routeTree,
    basepath: "/",
    context: {
        isFromForm: undefined
    }
})


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
