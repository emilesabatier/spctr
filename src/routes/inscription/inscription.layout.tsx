import { Outlet, createRoute } from "@tanstack/react-router"
import { LoadingLayout } from "../../features/loadingLayout"
import { navigationLayoutRoute } from "../navigation.layout"


export const inscriptionLayoutRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: "/inscription",
    beforeLoad: () => {
        return {
            isFromForm: true
        }
    },
    pendingComponent: () => <LoadingLayout />,
    component: () => <Outlet />
})
