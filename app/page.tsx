import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>testing</h1>

      <Link href={'/blog'}>Head to Blog</Link>
    </div>
  )
}