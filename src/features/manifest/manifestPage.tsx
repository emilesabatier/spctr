import Page from "../../components/page";


export default function ManifestPage() {
    return (
        <Page title="Manifeste">
            <div>
                Hello !
                <br />
                Nous c'est Spectre, on est un collectif techno (et un groupe de potes surtout) né en 2021 à Paris. On a déjà une dizaine de soirées à notre actif, dans toutes sortes de lieux !
                <br />
                <br />
                Pour commencer, on voudrait vous présenter nos valeurs. On a à cœur d'organiser des soirées conviviales, basées sur la bienveillance et l'inclusivité : évènements de petite taille, entrées à petit prix ou PAF à prix libre qui nous sert uniquement à louer la sono, transparence sur la moula, engagement à laisser un lieu aussi propre qu'à notre arrivée, tolérance zéro envers les comportements problématiques, présence d'un stand RDR, bref on fait au max pour un moment 100% plaisir!
                <br />
                <br />
                Pour s'assurer que tout le monde passe la meilleure soirée possible, dans un espace safe, on rappelle 4 points principaux :
                <br />
                <ol className="p-4 inline-flex flex-col justify-start items-start gap-2">
                    <li className="inline-flex justify-start items-start gap-2">
                        <span className="text-white/50">•</span>
                        <span><i><b>No means no</b></i>, mais surtout <i><b>Only yes means yes</b></i></span>
                    </li>
                    <li className="inline-flex justify-start items-start gap-2">
                        <span className="text-white/50">•</span>
                        <div>
                            <ol>
                                <li>
                                    <i className="text-white/75">"Cette personne danse si bien, j'aimerais l'attraper par les hanches pour onduler à deux"</i>
                                </li>
                                <li>
                                    <i className="text-white/75">"J'ai pris plein de 3, j'ai trop envie de l'embrasser"</i>
                                </li>
                                <li>
                                    <i className="text-white/75">"Elle me regarde et ça me donne envie de plus"</i>
                                </li>
                            </ol>
                            <span>
                                En toute situation, <b>DEMANDE LE CONSENTEMENT</b>.
                            </span>
                            <br />
                            <span>Nique les règles de drague, nique ce que la société t'apprend, demande explicitement avant de toucher l'autre, avant de faire une remarque, avant de lui payer une trace.</span>
                        </div>
                    </li>
                    <li className="inline-flex justify-start items-start gap-2">
                        <span className="text-white/50">•</span>
                        <span>
                            <b>À chacun.e sa conso, mais à tou.te.s la RDR.</b> Personne n'est là pour te juger.
                            <br />
                            Tu as la conso que tu as, et tu gères comme tu te sens de gérer. Mais n'oublie pas que le mieux, pour kiffer sa soirée, c'est de s'assurer de pouvoir la finir.
                        </span>
                    </li>
                    <li className="inline-flex justify-start items-start gap-2">
                        <span className="text-white/50">•</span>
                        <span>
                            <b>Je veille sur moi et sur les autres.</b>
                            <br />
                            Quelqu'un.e n'a pas l'air de se sentir bien ? Interpelle ses potes, interpelle l'orga.</span>
                    </li>
                    <li className="inline-flex justify-start items-start gap-2">
                        <span className="text-white/50">•</span>
                        <span>
                            Un comportement déplacé ? <b> Transmet l'info, ne reste pas dans le silence.</b>
                            <br />
                            Tu ne te sens pas bien/pas safe? Gère comme tu le sens car ton corps et ta santé t'appartiennent, mais n'hésite pas à en parler autour de toi, ou à l'orga.
                        </span>
                    </li>
                </ol>
                <br />
                <br />
                <b>Rendons la nuit plus safe pour tous.tes !</b>
            </div>
        </Page>
    )
}
