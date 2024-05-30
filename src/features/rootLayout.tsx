import { Outlet } from "@tanstack/react-router"
import noise from "../assets/noise-transparent.png"


export function RootLayout() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-background">
            <div
                className="w-[200%] h-[200%] fixed top-[-50%] bottom-[-50%] left-[-50%] right-[-50%] animate-background opacity-100 bg-repeat"
                style={{
                    backgroundImage: `url(${noise})`
                }}
            />
            <div className="h-full w-full relative">
                <Outlet />
            </div>
        </div>
    )
}
