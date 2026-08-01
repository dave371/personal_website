import { useEditor, EditorContent, useEditorState, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface EditorToolbarProps {
    editor: Editor | null,
    canUndo: boolean,
    canRedo: boolean
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
                return {
                    canUndo: false,
                    canRedo: false
                }
            }
            return {
                canUndo: editor.can().chain().focus().undo().run(),
                canRedo: editor.can().chain().focus().redo().run()
            }
        }
    })

    return (
        <div>
            <EditorToolbar editor={editor} canUndo={currentState?.canUndo ?? false} canRedo={currentState?.canRedo ?? false} />
            <EditorContent editor={editor} />

            {JSON.stringify(currentState)}
        </div>
    )
}

function EditorToolbar({ editor, canUndo, canRedo }: EditorToolbarProps) {
    if (!editor || canUndo === undefined || canRedo === undefined) return null;

    return (
        <div>
            <button
                type="button"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!canUndo}>
                Undo
            </button>

            {JSON.stringify(editor.can().chain().focus().undo().run())}
        </div>
    )
}