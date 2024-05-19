import { IconMenu } from "@tabler/icons-react"
import { Link, Outlet } from "@tanstack/react-router"
import { SpectreCourt } from "../assets/SpectreCourt"
import { Glitch } from "../assets/glitch"
import { Button } from "../components/button"
import { Navigation } from "../components/navigation"
import { Popover, PopoverContent, PopoverTrigger } from "../components/popover"
import { cn } from "../services/cn.service"
import { useMobileDevice } from "../services/useMobileDevice.service"


export function NavigationLayout() {
    // const { location } = useRouterState()
    const { isMobile } = useMobileDevice()

    return (
        <div className="w-full h-full grid grid-rows-[auto_max-content] md:grid-rows-[auto] grid-cols-[auto] md:grid-cols-[auto_max-content] overflow-auto animate-fadeIn">
            <div className={cn(
                "max-h-full h-full w-full max-w-full p-4 md:p-0 flex flex-row justify-center items-stretch overflow-auto md:overflow-hidden"
            )}>
                <Outlet />
            </div>
            <div className="h-full w-full grid md:grid-cols-[auto_min-content] md:grid-rows-[auto] grid-cols-[auto] grid-rows-[auto_min-content] overflow-auto md:overflow-hidden">
                {
                    (isMobile && location.href !== "/") ?
                        <div className='w-full border-t border-t-white/10 p-4 flex justify-between items-center overflow-hidden'>
                            <Link to="/" className="h-full flex justify-start items-center">
                                <SpectreCourt
                                    className="h-full fill-white stroke-none"
                                />
                            </Link>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button>
                                        <IconMenu className="stroke-white" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-fit bg-background mb-0 mr-4 p-4 rounded-none border-white flex justify-end items-center">
                                    <Navigation />
                                </PopoverContent>
                            </Popover>
                        </div>
                        :
                        <div className={cn(
                            "w-full p-4 md:p-8 flex flex-col justify-between items-end gap-4 md:gap-8",
                            // location.href !== "/" ? "border-l border-white/10" : ""
                        )}>
                            <Navigation />
                            {
                                location.href === "/" ? null : (
                                    <Link to="/" className="w-2/3 flex justify-end items-center">
                                        <div className="relative w-full" >
                                            <div className="relative inset-0 w-full"                >
                                                <SpectreCourt className="fill-none stroke-white" />
                                            </div>
                                            <div
                                                className="h-fit absolute inset-0 z-[10] transition-opacity duration-700 ease-in opacity-0 hover:opacity-100"
                                                style={{
                                                    filter: "url(#glitch)"
                                                }}
                                            >
                                                <SpectreCourt className="absolute fill-white stroke-white" />
                                            </div>
                                            <Glitch />
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}
