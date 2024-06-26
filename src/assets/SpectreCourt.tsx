import { CSSProperties } from "react"
import { cn } from "../services/cn.service"


type SpectreCourt = {
    className?: string
    style?: CSSProperties
}

export function SpectreCourt(props: SpectreCourt) {
    return (
        <svg
            viewBox="0 0 537.81 514.17"
            width={514.17}
            height={537.81}
            className={cn(
                "overflow-visible w-fit h-fit",
                props.className
            )}
            style={props.style}
        >
            <path
                d="M251.62,386.77c61.47,0,111.76,15.37,144.59,39.12,50.29-52.39,86.61-83.13,86.61-122.24,0-60.07-55.87-78.23-185.1-83.82l-32.83,36.32C377.35,259.64,430.44,275,430.44,326.7c0,24.45-16.07,51-48.2,71.25,2.1-9.08,3.49-15.37,3.49-18.16,0-34.23-57.27-37.72-189.29-44.71-47.5,48.9-93.6,72.64-131.32,72.64-28.64,0-44-13.26-44-36.31,0-21,15.36-36.33,35.62-36.33,23.05,0,36.32,16.07,36.32,44.71v6.28c23-1.4,55.18-18.16,86.62-52.39C82.58,326,39.28,303,39.28,243.58c0-25.15,7.68-43.31,26.54-61.47,0,1.4-.7,3.49-.7,4.89,0,38.42,62.17,62.87,182.31,68.45l32.13-37c-129.92-4.89-185.1-19.55-185.1-88C94.46,54.29,169.9.5,294.93.5,360.59.5,406,15.17,450,39.62l19.55-11.18,9.08,11.88C438.82,67.56,395.51,96.89,356.4,139.5,480,152.77,537.31,189.1,537.31,265.93c0,57.28-44,91.51-106.87,152.27-25.85,25.15-55.18,56.58-88.71,94.3-70.55-27.24-132-41.91-187.2-41.91-60.77,0-113.16,14.67-153,41.91C47,435,140.56,386.77,251.62,386.77ZM369.67,105.28C315.19,57.78,264.2,34.73,213.2,34.73c-43.3,0-69.85,19.56-69.85,47.49,0,49.6,58,48.2,197,55.89Z"
                fill="inherit"
                strokeWidth={2}
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    )
}
