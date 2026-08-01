import { useFieldContext } from "@/utils/createForm"

export default function TextField({ label }: { label: string }) {
    const field = useFieldContext<string>();

    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input type="text" name={field.name} id={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
        </div>
    )
}