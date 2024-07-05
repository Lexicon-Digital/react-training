import { notFound } from "next/navigation";

export default function Author({ params: { author } }: { params: { author: string } }) {

    if (author === "anon") {
        notFound();
    }

    return (
        <div>Author {author}</div>
    )
}
