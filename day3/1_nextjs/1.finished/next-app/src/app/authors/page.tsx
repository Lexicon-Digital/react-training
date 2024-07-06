import Link from "next/link";

export default async function Authors() {

    // await new Promise((resolve) => setTimeout(resolve, 4000))

    const response = await fetch(`https://intro-lemon.vercel.app/api/authors`, {
        cache: "no-store"
    });
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
