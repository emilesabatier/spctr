import { createRootRouteWithContext } from "@tanstack/react-router"
import { RootLayout } from "../features/rootLayout"


type RouterContext = {
    isFromForm: boolean | undefined
}

export const rootLayoutRoute = createRootRouteWithContext<RouterContext>()({
    component: RootLayout
})
