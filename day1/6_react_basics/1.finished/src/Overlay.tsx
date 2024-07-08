const overlayStyle = {

    border: "solid red 0px",
    backgroundColor: "white",
    top: 20,
    left: "40vw",
    width: 200,
    padding: 12,
    borderRadius: 12,
    boxShadow: "10px 10px 23px 0px rgba(0,0,0,0.75)"

}

export default function Overlay({ children }: OverlayProps) {
    return (
        <div style={{ ...overlayStyle, position: "absolute" }}>
            {children}
        </div>
    )
}

type OverlayProps = {
    children: JSX.Element
}
