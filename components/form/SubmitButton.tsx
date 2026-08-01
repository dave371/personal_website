import { useFormContext } from "@/utils/createForm"

export default function SubmitButton({ label }: { label: string }) {
    const form = useFormContext();

    return (
        <div>
            <form.Subscribe selector={(state) => state.isSubmitting}>
                {(isSubmitting) => (
                    <button type="submit" disabled={isSubmitting}>
                        {label}
                    </button>
                )}
            </form.Subscribe>
        </div>
    )
}