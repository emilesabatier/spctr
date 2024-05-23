import { createRoute } from "@tanstack/react-router"
import EventsPage from "../../features/events/eventsPage"
import { navigationLayoutRoute } from "../navigation.layout"


export const eventsRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/evenements',
    beforeLoad: () => {
        return {
            isFromForm: false
        }
    },
    component: () => <EventsPage />
})
