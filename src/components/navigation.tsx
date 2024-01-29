import { useNavigate, useRouterState } from "@tanstack/react-router"
import { cn } from "../services/cn.service"
import { Button } from "./button"


const routes = [
    {
        key: "events",
        to: "/evenements",
        label: "évènements"
    },
    {
        key: "manifest",
        to: "/manifeste",
        label: "manifeste"
    },
    {
        key: "contact",
        to: "/contact",
        label: "contact"
    },
    {
        key: "donations",
        to: "/dons",
        label: "dons"
    }
] as const

export function Navigation() {
    const navigate = useNavigate()
    const { location } = useRouterState()

    return (
        <nav className="w-fit h-fit overflow-auto">
            <ol className="flex flex-col justify-start items-stretch">
                {
                    routes.map(route => (
                        <li
                            key={route.key}
                            className="flex justify-end items-center"
                        >
                            <Button onClick={() => navigate({ to: route.to })}>
                                <span className={cn(
                                    "text-right w-full text-2xl text-white hover:underline cursor-pointer",
                                    location.href === route.to ? "text-white" : ""
                                )}>
                                    {route.label}
                                </span>
                            </Button>
                        </li>
                    ))
                }
            </ol>
        </nav>

    )
}
