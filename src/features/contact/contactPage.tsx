import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react"
import { useEffect } from "react"
import Page from "../../components/page"


export function ContactPage() {

    useEffect(() => { document.title = "Contact | Spectre" }, [])

    return (
        <Page title="Contact">
            <div className="w-full h-full flex flex-col justify-start items-stretch gap-16">
                <div className="h-full flex flex-col justify-start items-stretch gap-2 md:gap-4">
                    <h2 className="text-lg opacity-50 font-light uppercase">Informations</h2>
                    <p><b>Spectre</b> est une <b>association</b> loi du 1er juillet 1901 déclarée au répertoire national des associations sous le numéro <b>W921010341</b>.</p>
                </div>
                <div className="h-full flex flex-col justify-start items-stretch gap-2 md:gap-4">
                    <h2 className="text-lg opacity-50 font-light uppercase">Contact</h2>
                    <span>Vous pouvez nous contacter à l'adresse email suivante&nbsp;
                        <a
                            href="mailto:spectre.tchno@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-white underline hover:no-underline">spectre.tchno@gmail.com</span>
                        </a>
                    </span>
                </div>
                <div className="h-full flex flex-col justify-start items-stretch gap-2 md:gap-4">
                    <h2 className="text-lg opacity-50 font-light uppercase">Réseaux sociaux</h2>
                    <div className="flex flex-col justify-start items-start gap-2 flex-wrap">
                        <span>Vous pouvez nous retrouver sur Facebook et Instagram aux liens suivants</span>
                        <div className="inline-flex justify-start items-center gap-2">
                            <a
                                href="https://www.facebook.com/people/%F0%9D%94%96%F0%9D%94%AD%F0%9D%94%A2%F0%9D%94%A0%F0%9D%94%B1%F0%9D%94%AF%F0%9D%94%A2/100076098559530/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white p-2 group"
                            >
                                <IconBrandFacebook className="stroke-white border-b border-transparent group-hover:border-white" />
                            </a>
                            <a
                                href="https://www.instagram.com/spectre.tchno/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white p-2 group"
                            >
                                <IconBrandInstagram className="stroke-white border-b border-transparent group-hover:border-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
