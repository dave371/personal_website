import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <h1>Blog Home Page</h1>
            <Link href={'/blog/publish'}>Publish a blog</Link>
        </div>
    )
}