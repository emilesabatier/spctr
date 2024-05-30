import { createRoute } from "@tanstack/react-router"
import { ContactPage } from "../../features/contact/contactPage"
import { navigationLayoutRoute } from "../navigation.layout"


export const contactRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/contact',
    component: () => <ContactPage />
})
