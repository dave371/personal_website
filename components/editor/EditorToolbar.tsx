import type { Editor } from "@tiptap/react"

interface EditorToolbarProps {
    editor: Editor | null;
}


export default function EditorToolbar({ editor }: EditorToolbarProps) {
    if (!editor) return null;

    return (
        <div>
            <button
                type="button"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}>
                Undo
            </button>

            {JSON.stringify(editor.can().chain().focus().undo().run())}
        </div>
    )
}