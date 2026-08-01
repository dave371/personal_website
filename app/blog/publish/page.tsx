import db from "@/database/db"
import { postsTable } from "@/database/schema"
import PublishPostForm from "@/components/form/PublishPostForm"

export default function Publish() {
    return (
        <div>
            <h1>Publish a blog post</h1>

            <PublishPostForm></PublishPostForm>

        </div>
    )
}