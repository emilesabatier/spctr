

export function LoadingLayout() {
    return (
        <main className="h-full w-full bg-transparent flex flex-col justify-center items-center gap-4 p-32">
            <div className="relative inline-block w-16 h-16">
                <div className="absolute border-2 border-solid border-neutral-800 rounded-full animate-loading opacity-100" />
                <div className="absolute border-2 border-solid border-neutral-800 rounded-full animate-loading opacity-100 -delay-500"></div>
            </div>
        </main >
    )
}
