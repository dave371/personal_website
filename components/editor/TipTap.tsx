import { useEditor, EditorContent, useEditorState, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type EditorToolbarProps = {
    editor: Editor
}

export default function TipTap() {
    const editor = useEditor({
        extensions: [StarterKit.configure({
            heading: {
                levels: [1, 2, 3, 4, 5, 6]
            }
        })],
        content: '<p>Hello Everyone!</p>',
        immediatelyRender: false
    })


    if (!editor) return null


    return (
        <div>
            <EditorToolbar editor={editor} />

            <EditorContent editor={editor} />
        </div>
    )
}

function EditorToolbar({ editor }: EditorToolbarProps) {
    const { canRedo, canUndo } = useEditorState({
        editor,
        selector: ({ editor }) => {
            return {
                canUndo: editor.can().chain().focus().undo().run(),
                canRedo: editor.can().chain().focus().redo().run()
            }
        }
    })

    return (
        <>
            <button
                type="button"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!canUndo}
            >
                Undo
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!canRedo}
            >
                Redo
            </button>

            <button type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                disabled={!editor.can().chain().focus().toggleHeading({ level: 1 }).run()}>
                h1
            </button>
        </>
    )
}