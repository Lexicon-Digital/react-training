import Link from "next/link"

const Header = () => {
    return <div style={{ backgroundColor: "orange", padding: 12, marginBottom: 12 }}>
        <Link href="/">See posts</Link>
        &nbsp;|&nbsp;
        <Link href="/add">Add post</Link>

    </div>
}
export { Header }
