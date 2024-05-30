import { Link } from "@tanstack/react-router"
import { Fragment } from "react"
import banner_20210722 from "../../assets/banners/20210722.png"
import banner_20210728 from "../../assets/banners/20210728.png"
import banner_20210901 from "../../assets/banners/20210901.png"
import banner_20211104 from "../../assets/banners/20211104.png"
import banner_20211126 from "../../assets/banners/20211126.png"
import banner_20220318 from "../../assets/banners/20220318.png"
import banner_20220422 from "../../assets/banners/20220422.png"
import banner_20220610 from "../../assets/banners/20220610.png"
import banner_20230701 from "../../assets/banners/20230701.png"
import banner_20230909 from "../../assets/banners/20230909.png"
import banner_20240608 from "../../assets/banners/20240608.jpg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/accordion"
import Page from "../../components/page"


type Event = {
    id: string
    date: string
    name: string
    banner: string
    lineUp: {
        timeStartHour: string
        timeEndHour: string
        timeStartMin: string
        timeEndMin: string
        name: string[]
    }[]
}

const pastEvents: Event[] = [
    {
        id: "boom-boom-boom-i-want-you-in-the-woods_09092023",
        date: "09 09 2023",
        name: "Boom Boom Boom Boom I Want You In The Woods",
        banner: banner_20230909,
        lineUp: [
            {
                timeStartHour: "22",
                timeEndHour: "23",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["R4"]
            },
            {
                timeStartHour: "23",
                timeEndHour: "00",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Hepeme"]
            },
            {
                timeStartHour: "00",
                timeEndHour: "01",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Redz"]
            },
            {
                timeStartHour: "01",
                timeEndHour: "02",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["AXLR"]
            },
            {
                timeStartHour: "02",
                timeEndHour: "03",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Osmium"]
            },
            {
                timeStartHour: "03",
                timeEndHour: "04",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["RESONANCE"]
            },
            {
                timeStartHour: "04",
                timeEndHour: "05",
                timeStartMin: "30",
                timeEndMin: "30",
                name: ["Tox."]
            },
            {
                timeStartHour: "05",
                timeEndHour: "??",
                timeStartMin: "30",
                timeEndMin: "??",
                name: ["One Step Further"]
            }
        ]
    },
    {
        id: "vincennes-1_01072023",
        date: "01 07 2023",
        name: "Objectif Lune",
        banner: banner_20230701,
        lineUp: [
            {
                timeStartHour: "22",
                timeEndHour: "23",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["FMR"]
            },
            {
                timeStartHour: "23",
                timeEndHour: "00",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["R4"]
            },
            {
                timeStartHour: "00",
                timeEndHour: "01",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Ritual Cleanse"]
            },
            {
                timeStartHour: "01",
                timeEndHour: "02",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["DSL"]
            },
            {
                timeStartHour: "02",
                timeEndHour: "03",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Redz"]
            },
            {
                timeStartHour: "03",
                timeEndHour: "04",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Osmium"]
            },
            {
                timeStartHour: "04",
                timeEndHour: "05",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Nomaid"]
            },
            {
                timeStartHour: "05",
                timeEndHour: "06",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Tox."]
            }
        ]
    },
    {
        id: "liebe-4_10062022",
        date: "10 06 2022",
        name: "Liebe x Spectre - Once again",
        banner: banner_20220610,
        lineUp: [
            {
                timeStartHour: "20",
                timeEndHour: "21",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Kokosmelk"]
            },
            {
                timeStartHour: "21",
                timeEndHour: "22",
                timeStartMin: "30",
                timeEndMin: "30",
                name: ["CMR"]
            },
            {
                timeStartHour: "22",
                timeEndHour: "00",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["PTNC"]
            },
            {
                timeStartHour: "00",
                timeEndHour: "01",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Monk not found"]
            },
            {
                timeStartHour: "01",
                timeEndHour: "03",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Monk not found", "One Step Further"]
            },
            {
                timeStartHour: "03",
                timeEndHour: "04",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["One Step Further"]
            },
            {
                timeStartHour: "04",
                timeEndHour: "05",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Tox."]
            }
        ]
    },
    {
        id: "liebe-3_22042022",
        date: "22 04 2022",
        name: "Liebe x Spectre invite Ultracks Records",
        banner: banner_20220422,
        lineUp: [
            {
                timeStartHour: "20",
                timeEndHour: "21",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Ponaroïd"]
            },
            {
                timeStartHour: "21",
                timeEndHour: "23",
                timeStartMin: "30",
                timeEndMin: "15",
                name: ["One Step Further"]
            },
            {
                timeStartHour: "23",
                timeEndHour: "01",
                timeStartMin: "15",
                timeEndMin: "00",
                name: ["DSL"]
            },
            {
                timeStartHour: "01",
                timeEndHour: "02",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["OMBRAR"]
            },
            {
                timeStartHour: "02",
                timeEndHour: "04",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["Instant Confusion"]
            },
            {
                timeStartHour: "04",
                timeEndHour: "05",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Louison le manoeuvreur de disque"]
            }
        ]
    },
    {
        id: "liebe-2_18032022",
        date: "18 03 2022",
        name: "Liebe x Spectre II",
        banner: banner_20220318,
        lineUp: [
            {
                timeStartHour: "19",
                timeEndHour: "21",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["Sueurs Froides"]
            },
            {
                timeStartHour: "21",
                timeEndHour: "22",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Monk"]
            },
            {
                timeStartHour: "22",
                timeEndHour: "00",
                timeStartMin: "30",
                timeEndMin: "30",
                name: ["OSF"]
            },
            {
                timeStartHour: "00",
                timeStartMin: "30",
                timeEndHour: "02",
                timeEndMin: "30",
                name: ["DSL"]
            },
            {
                timeStartHour: "02",
                timeEndHour: "04",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["CMR"]
            },
            {
                timeStartHour: "04",
                timeEndHour: "05",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Instant Confusion"]
            }
        ]
    },
    {
        id: "liebe-1_26112021",
        date: "26 11 2021",
        name: "Liebe x Spectre",
        banner: banner_20211126,
        lineUp: [
            {
                timeStartHour: "18",
                timeEndHour: "19",
                timeStartMin: "30",
                timeEndMin: "30",
                name: ["Jinn"]
            },
            {
                timeStartHour: "19",
                timeEndHour: "21",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["DSL"]
            },
            {
                timeStartHour: "21",
                timeEndHour: "22",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Tox."]
            },
            {
                timeStartHour: "22",
                timeEndHour: "00",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["Border Police"]
            },
            {
                timeStartHour: "00",
                timeEndHour: "02",
                timeStartMin: "00",
                timeEndMin: "00",
                name: ["Instant Confusion"]
            }
        ]
    },
    {
        id: "45-tours-2_04112021",
        date: "04 11 2021",
        name: "Le 45 Tours x Spectre II",
        banner: banner_20211104,
        lineUp: [
            {
                timeStartHour: "19",
                timeEndHour: "21",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["Julie Spello"]
            },
            {
                timeStartHour: "21",
                timeEndHour: "22",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Louison le Manoeuvreur de Disques"]
            },
            {
                timeStartHour: "22",
                timeEndHour: "00",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["One Step Further"]
            },
            {
                timeStartHour: "00",
                timeEndHour: "01",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["ALXxMDV"]
            }
        ]
    },
    {
        id: "45-tours-1_01092021",
        date: "01 09 2021",
        name: "Le 45 Tours x Spectre",
        banner: banner_20210901,
        lineUp: [
            {
                timeStartHour: "18",
                timeEndHour: "19",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["sk9"]
            },
            {
                timeStartHour: "19",
                timeEndHour: "21",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["Fishsoüp"]
            },
            {
                timeStartHour: "21",
                timeEndHour: "22",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Border Police"]
            },
            {
                timeStartHour: "22",
                timeEndHour: "00",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["Aérienne"]
            },
            {
                timeStartHour: "00",
                timeEndHour: "01",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["DSL"]
            }
        ]
    },
    {
        id: "cavern-2_28072021",
        date: "28 07 2021",
        name: "Cavern x Spectre II",
        banner: banner_20210728,
        lineUp: [
            {
                timeStartHour: "18",
                timeEndHour: "19",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Anon."]
            },
            {
                timeStartHour: "19",
                timeEndHour: "21",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["RDHL"]
            },
            {
                timeStartHour: "21",
                timeEndHour: "22",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["toolman"]
            },
            {
                timeStartHour: "22",
                timeEndHour: "00",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["Tox."]
            },
            {
                timeStartHour: "00",
                timeEndHour: "01",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Tachycardia"]
            }
        ]
    },
    {
        id: "cavern-1_22072021",
        date: "22 07 2021",
        name: "Cavern x Spectre",
        banner: banner_20210722,
        lineUp: [
            {
                timeStartHour: "19",
                timeEndHour: "21",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["21x29,7"]
            },
            {
                timeStartHour: "21",
                timeEndHour: "22",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["JYGE"]
            },
            {
                timeStartHour: "22",
                timeEndHour: "00",
                timeStartMin: "30",
                timeEndMin: "00",
                name: ["DSL"]
            },
            {
                timeStartHour: "00",
                timeEndHour: "01",
                timeStartMin: "00",
                timeEndMin: "30",
                name: ["Instant Confusion"]
            }
        ]
    }
]

const nextEvent: Event | undefined = {
    id: "back_to_betise_08062024",
    date: "08 06 2024",
    name: "Back to bêtises",
    banner: banner_20240608,
    lineUp: []
}

export default function EventsPage() {
    return (
        <Page title="Évènements">
            <div className="w-full h-full flex flex-col justify-start items-stretch gap-16">
                <div className="h-full flex flex-col justify-start items-stretch gap-2 md:gap-4">
                    <h2 className="text-lg opacity-50 font-light uppercase">à venir</h2>
                    <div className="h-full px-2">
                        {
                            !nextEvent ? (
                                <span>Aucun</span>
                            ) : (
                                <div className="w-full h-fit flex flex-col justify-start items-stretch gap-8 p-2">
                                    <div className="w-full flex flex-row justify-between items-start gap-4">
                                        <span className="font-bold text-4xl leading-none">{nextEvent.date}</span>
                                        <span className="font-extralight text-2xl text-right leading-none">{nextEvent.name}</span>
                                    </div>
                                    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4">
                                        <img
                                            src={nextEvent.banner}
                                            alt="09092023"
                                            className="w-full md:w-3/5 aspect-video"
                                            loading="lazy"
                                        />
                                        <div className="flex flex-col justify-between items-end gap-8">
                                            <ol className="flex flex-col justify-start items-stretch gap-2">
                                                {
                                                    nextEvent.lineUp.length === 0 ? (
                                                        <span>
                                                            Lineup à venir
                                                        </span>
                                                    )
                                                        :
                                                        nextEvent.lineUp.map(time => (
                                                            <li key={time.timeStartHour} className="flex flex-row justify-end items-center gap-4">
                                                                <span className="text-right flex flex-col justify-start items-end">
                                                                    {
                                                                        time.name.map((dj, index) => (
                                                                            <Fragment key={index}>
                                                                                <span className="">{dj}</span>
                                                                                {
                                                                                    (index < time.name.length - 1) ? (
                                                                                        <Fragment>
                                                                                            <span className="text-thin text-sm opacity-50 leading-none"> b2b </span>
                                                                                        </Fragment>
                                                                                    ) : null
                                                                                }
                                                                            </Fragment>
                                                                        ))
                                                                    }
                                                                </span>
                                                                <span>
                                                                    <span className="font-extralight whitespace-nowrap">{time.timeStartHour}</span>
                                                                    <span className="font-extralight whitespace-nowrap text-xs opacity-75">:{time.timeStartMin} - </span>
                                                                    <span className="font-extralight whitespace-nowrap">{time.timeEndHour}</span>
                                                                    <span className="font-extralight whitespace-nowrap text-xs opacity-75">:{time.timeEndMin}</span>
                                                                </span>
                                                            </li>
                                                        ))
                                                }
                                            </ol>
                                            <div className="flex flex-col justify-start items-end gap-2">
                                                <Link to="/inscription" className="p-2 text-white border border-solid border-neutral-50 hover:underline whitespace-nowrap">Inscription</Link>
                                                <Link to="/inscription/dons" className="p-2 text-white border border-solid border-neutral-50 hover:underline whitespace-nowrap">Participer aux frais</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="h-full flex flex-col justify-start items-stretch gap-2 md:gap-4">
                    <h2 className="text-lg opacity-50 font-light uppercase">passés</h2>
                    <div className="h-full px-2">
                        <Accordion type="multiple" className="w-full">
                            {
                                pastEvents.map((event, eventIndex) => (
                                    <AccordionItem value={event.id} key={event.id} className={`${eventIndex === pastEvents.length - 1 ? "border-b-0" : ""}`}>
                                        <AccordionTrigger>
                                            <div className="flex flex-row justify-start items-start gap-4 pr-1">
                                                <span className="font-bold text-left whitespace-nowrap">{event.date}</span>
                                                <span className="font-extralight text-left">{event.name}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col md:flex-row justify-between items-end md:items-start gap-2">
                                                <img
                                                    src={event.banner}
                                                    alt={event.id}
                                                    className="w-full md:w-3/5 aspect-video"
                                                    loading="lazy"
                                                />
                                                <div className="min-w-min flex flex-row justify-start items-start md:items-center">
                                                    <ol className="flex flex-col justify-start items-end gap-2">
                                                        {
                                                            event.lineUp.map(time => (
                                                                <li key={time.timeStartHour} className="flex flex-row justify-end items-start gap-4">
                                                                    <span className="text-right flex flex-col justify-start items-end">
                                                                        {
                                                                            time.name.map((dj, index) => (
                                                                                <Fragment key={index}>
                                                                                    <span className="">{dj}</span>
                                                                                    {
                                                                                        (index < time.name.length - 1) ? (
                                                                                            <Fragment>
                                                                                                <span className="text-thin text-sm opacity-50 leading-none"> b2b </span>
                                                                                            </Fragment>
                                                                                        ) : null
                                                                                    }
                                                                                </Fragment>
                                                                            ))
                                                                        }
                                                                    </span>
                                                                    <span>
                                                                        <span className="font-extralight whitespace-nowrap">{time.timeStartHour}</span>
                                                                        <span className="font-extralight whitespace-nowrap text-xs opacity-75">:{time.timeStartMin} - </span>
                                                                        <span className="font-extralight whitespace-nowrap">{time.timeEndHour}</span>
                                                                        <span className="font-extralight whitespace-nowrap text-xs opacity-75">:{time.timeEndMin}</span>
                                                                    </span>
                                                                </li>
                                                            ))
                                                        }
                                                    </ol>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </Page>
    )
}
