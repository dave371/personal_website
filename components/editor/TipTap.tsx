import { useEditor, EditorContent, useEditorState, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type ToolbarState = {
    canUndo: boolean,
    canRedo: boolean
}

type EditorToolbarProps = ToolbarState & {
    editor: Editor
}

export default function TipTap() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello Everyone!</p>',
        immediatelyRender: false
    })


    const currentState = useEditorState({
        editor,
        selector: ({ editor }) => {
            if (!editor) {
                return null
            }

            return {
                canUndo: editor.can().chain().focus().undo().run(),
                canRedo: editor.can().chain().focus().redo().run()
            }
        }
    })

    if (!editor || !currentState) return <div>Loading...</div>

    return (
        <div>
            <EditorToolbar editor={editor} {...currentState} />

            <EditorContent editor={editor} />

            {JSON.stringify(currentState)}
        </div>
    )
}

function EditorToolbar({ editor, canRedo, canUndo }: EditorToolbarProps) {
    return (
        <>
            <button
                type="button"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!canUndo}
            >
                Undo
            </button>
        </>
    )
}