import { ComponentProps, ReactElement } from "react"
import { cn } from "../services/cn.service"


type InputText = {
    className?: ComponentProps<'input'>['className']
    value: string | undefined
    onChange: (value: string | undefined) => void
    children?: ReactElement
}

export function InputText(props: InputText) {

    return (
        <input
            className={cn(
                "p-2 text-white border border-solid border-neutral-50 bg-transparent",
                props.className
            )}
            placeholder="Mot de passe"
            value={props.value}
            onChange={(event) => props.onChange(event.currentTarget.value)}
        />
    )
}
