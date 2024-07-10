import { withClose } from "./withClose"

const Overlay = ({ child }: { child: JSX.Element }) => {

    const overlayStyle = {
        top: 10,
        left: "50vw",
        position: "absolute",
        border: "solid red 0px",
        padding: 20,
        borderRadius: 8,
        backgroundColor: "white",
        boxShadow: "rgba(0,0,0,0.2) 5px 5px 5px 5px"
    }

    return
    <div style={overlayStyle} >
        <div>
            {child}
        </div>
    </div>
}
export { Overlay }
