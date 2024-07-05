import Link from "next/link";

export default async function Authors() {

    const response = await fetch("https://intro-lemon.vercel.app/api/authors");
    const data: {
        authors: {
            name: string, numberOfNotes: number
        }[]
    } = await response.json()

    return (
        <>
            <div>Authors</div>
            {
                data.authors.map(author => <li key={author.name}>
                    <Link href={`/authors/${author.name}`}>{author.name}</Link>
                    ({author.numberOfNotes})
                </li>)
            }
        </>
    )
}
