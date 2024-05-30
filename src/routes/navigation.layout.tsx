import { createRoute } from "@tanstack/react-router"
import { LoadingLayout } from "../features/loadingLayout"
import { NavigationLayout } from "../features/navigationLayout"
import { rootLayoutRoute } from "./root.route"


export const navigationLayoutRoute = createRoute({
    getParentRoute: () => rootLayoutRoute,
    id: 'navigationLayout',
    pendingComponent: () => <LoadingLayout />,
    beforeLoad: () => {
        return {
            isFromForm: undefined
        }
    },
    component: () => <NavigationLayout />
})
