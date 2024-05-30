import { useEffect } from "react"
import Page from "../../components/page"
import { donationRoute } from "../../routes/inscription/donation.route"


export function DonationPage() {

    useEffect(() => { document.title = "Inscription réussie | Spectre" }, [])

    const { fromForm } = donationRoute.useSearch()

    return (
        <Page
            title={!fromForm ? "Participation aux frais" : "Inscription réussie"}
            description="Back to bêtises - 08 06 2024"
        >
            <div className="w-full h-full flex flex-col justify-start items-stretch gap-16">
                <div className="w-full h-full flex flex-col justify-start items-start gap-4 text-white">
                    {
                        !fromForm ? null : (
                            <span className="text-green">
                                Et voilà qui est fait, on se voit très bientôt. On t'enverra les infos le jour J.
                            </span>
                        )
                    }
                    <span className="text-white">
                        C'est aussi grâce à vous que l'on peut organiser des soirées safe et 100% plaisir !
                        Une participation aux frais de 8 euros par personne en moyenne nous permet d'assurer la location du camion et du matériel pour une soirée inoubliable. Cela peut aussi nous permettre de mettre un peu d'argent de côté pour financer encore plus de dingueries. Que demander de plus ?
                    </span>
                    <a
                        href="https://donate.stripe.com/bIY7u0eTJ8U50nK5kl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white px-3 py-2 hover:underline text-white whitespace-nowrap"
                    >
                        Participer aux frais
                    </a>
                </div>
            </div>
        </Page>
    )
    // return (
    //     <Page title="Inscription">
    //         <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
    //             <label>La soirée est sur invitation, veuillez saisir le mot de passe</label>
    //             <InputText
    //                 value={passcode}
    //                 onChange={(value) => setPasscode(value)}
    //             />
    //         </div>
    //     </Page>
    // )
}
