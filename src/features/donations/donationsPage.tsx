import { useEffect } from "react"
import Page from "../../components/page"


export function DonationsPage() {

    useEffect(() => { document.title = "Dons | Spectre" }, [])


    return (
        <Page title="Dons">
            <div className="w-full h-full flex flex-col justify-start items-stretch gap-16">
                <div className="h-full flex flex-col justify-start items-stretch gap-2 md:gap-4">
                    <div className="h-full px-2 flex flex-col justify-start items-start gap-2 flex-wrap">
                        <span>Vous pouvez faire un don à l'association directement sur le lien suivant</span>
                        <a
                            href="https://donate.stripe.com/bIY29G5j93zL6M85km"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white px-3 py-2 hover:bg-white/10"
                        >
                            <span className="text-white">Donner à l'association</span>
                        </a>
                        <br />
                        <span>Cela nous aide à financer les prochains évènements et à terme, notre propre matériel.</span>
                    </div>
                </div>
            </div>
        </Page>
    )
}
