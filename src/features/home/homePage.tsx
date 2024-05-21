import { SpectreLong } from "../../assets/SpectreLong"
import { Glitch } from "../../assets/glitch"


export default function HomePage() {
    return (
        <div className="w-full h-full flex justify-center items-center" >
            <div className="relative w-full md:w-1/2" >
                <div className="relative inset-0 w-full"                >
                    <SpectreLong className="fill-none stroke-white" />
                </div>
                <div
                    className="h-fit absolute inset-0 z-[10] transition-opacity duration-700 ease-in opacity-0 hover:opacity-100"
                    style={{
                        filter: "url(#glitch)"
                    }}
                >
                    <div className="absolute top-0 right-0 animate-blink">
                        <span className="text-md text-red text-right">08 06 2024</span>
                    </div>
                    <div className="h-fit absolute inset-0">
                        <SpectreLong className="absolute fill-none stroke-red drop-shadow-neon" />
                    </div>
                </div>
                <Glitch />
            </div>
        </div>
    )
}
