import { ReactNode } from "react"


type Page = {
    title: string
    description?: string
    children: ReactNode
}

export default function Page(props: Page) {
    return (
        <div className="h-full w-full overflow-auto animate-fadeIn flex flex-col justify-start items-center p-4 md:p-8">
            <div className="w-full max-w-[600px] max-w- flex flex-col justify-start items-stretch gap-4 md:gap-8">
                <div className="flex flex-col justify-start items-start">
                    <h1 className="uppercase text-4xl">{props.title}</h1>
                    <h2 className="text-white/50 text-xl">{props.description}</h2>
                </div>
                <div className="w-full h-full flex flex-col justify-start items-stretch">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
