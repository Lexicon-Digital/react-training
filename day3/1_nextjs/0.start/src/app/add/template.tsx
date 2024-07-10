export default function Template({ children }: { children: React.ReactNode }) {
    return (<div style={{ backgroundColor: "lightGrey", padding: 12, borderRadius: 6, width: 200, margin: "auto auto" }}>
        {children}
    </div>)
}
