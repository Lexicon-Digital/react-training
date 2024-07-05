
export default function Details({ params }: { params: { slug: string[] } }) {
    return (
        <div>Details for {params.slug.join(",")}</div>
    )
}
