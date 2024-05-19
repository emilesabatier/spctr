import { valibotResolver } from "@hookform/resolvers/valibot"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { InputText } from "../../components/inputText"
import Page from "../../components/page"
import { cn } from "../../services/cn.service"


const inscriptionSchema = v.object({
    password: v.string(),
    forename: v.nonNullish(v.string([v.minLength(1)]), "Prénom requis"),
    surname: v.nonNullish(v.string([v.minLength(1)]), "Nom requis"),
    email: v.nonNullish(v.string([
        v.email()
    ]), "Email requis"),
    referrer: v.nonNullish(v.string([v.minLength(1)]), "Référent requis")
})


const defaultPassword = "spctrb2b"

export function InscriptionPage() {

    useEffect(() => { document.title = "Inscription | Spectre" }, [])

    const [password, setPassword] = useState<string | undefined>("spctrb2b")

    const form = useForm<v.Output<typeof inscriptionSchema>>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        defaultValues: {},
        resolver: valibotResolver(inscriptionSchema),
    })

    const onSubmit = async () => {

        await form.trigger()

        // if (!triggerResponse) {
        //     if (import.meta.env.VITE_ENV !== "production") console.log(form.getValues(), form.formState.errors)
        //     return
        // }

        // const submitResponse = await props.onSubmit(form.getValues())
        // if (!submitResponse) return

        // form.reset({}, {
        //     keepValues: false,
        //     keepDirtyValues: false,
        //     keepDefaultValues: false
        // })
    }

    if (password === defaultPassword) return (
        <Page title="Inscription">
            <div className="w-full h-full flex flex-col justify-start items-stretch gap-16">
                <div className="w-full h-full flex flex-col justify-start items-stretch gap-4 text-white">
                    <span>
                        Ce formulaire a pour vocation de vous inscrire dans notre liste pour nos évènements privés. Chaque inscription sera validée par les membres du collectif.
                    </span>
                    <span className="text-white/50">
                        NB: pour faire valoir vos droits concernant vos données personnelles, veuillez nous contacter à l'adresse&nbsp;
                        <a
                            href="mailto:spectre.tchno@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-white/50 underline hover:no-underline">spectre.tchno@gmail.com</span>
                        </a>
                    </span>
                </div>
                <form className="flex flex-col justify-start items-start gap-4">
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <input
                            {...form.register("forename", { required: true })}
                            className={cn(
                                "w-full p-2 border bg-transparent",
                                !form.formState.errors.forename ? "text-white border-white" : "text-red border-red placeholder:text-red/75"
                            )}
                            placeholder="Prénom"
                        />
                        <input
                            {...form.register("surname", { required: true })}
                            className={cn(
                                "w-full p-2 border bg-transparent",
                                !form.formState.errors.surname ? "text-white border-white" : "text-red border-red placeholder:text-red/75"
                            )}
                            placeholder="Nom"
                        />
                        <input
                            {...form.register("email", { required: true })}
                            type="email"
                            className={cn(
                                "w-full p-2 border bg-transparent",
                                !form.formState.errors.email ? "text-white border-white" : "text-red border-red placeholder:text-red/75"
                            )}
                            placeholder="Email"
                        />
                        <input
                            {...form.register("referrer", { required: true })}
                            className={cn(
                                "w-full p-2 border bg-transparent",
                                !form.formState.errors.referrer ? "text-white border-white" : "text-red border-red placeholder:text-red/50"
                            )}
                            placeholder="Personne référente"
                        />
                    </div>

                    {!form.formState.errors ? null : (null
                        // <div>
                        //     {form.formState.errors.map((error) => (
                        //         <span>{error.}</span>
                        //     ))}
                        // </div>
                    )}

                    <button
                        className="ml-auto p-2 text-white border border-solid border-neutral-50 bg-transparent cursor-pointer hover:underline"
                        onClick={(event) => {
                            event?.preventDefault()
                            onSubmit()
                        }}
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </Page>
    )
    return (
        <Page title="Inscription">
            <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
                <label>La soirée est sur invitation, veuillez saisir le mot de passe</label>
                <InputText
                    value={password}
                    onChange={(value) => setPassword(value)}
                />
            </div>
        </Page>
    )
}
