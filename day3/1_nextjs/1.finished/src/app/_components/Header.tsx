import Link from "next/link"

const Header = () => {
    return <div style={{ flexGrow: 1, backgroundColor: "orange", padding: 12 }}>
        <Link href="/">Posts</Link> |
        <Link href="/authors">Authors</Link>

    </div>
}
export { Header }
