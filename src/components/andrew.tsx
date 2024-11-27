export function Andrew({
                           children
                       }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex flex-wrap items-center gap-6">
                <div className="w-32 shrink-0">
                    <img className="aspect-[3/2] rounded-lg shadow" src="/briefing.jpg" alt=""/>
                </div>
                <div>
                    <div className="mt-2 text-sm/6 text-zinc-500">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}