import { createRouter } from "@tanstack/react-router"
import { contactRoute } from "./contact/contact.route"
import { donationsRoute } from "./donations/donations.route"
import { eventsRoute } from "./events/events.route"
import { galleryRoute } from "./gallery/gallery.route"
import { homeRoute } from "./home/home.route"
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
        donationsRoute
    ])
])


export const router = createRouter({
    routeTree
})


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
