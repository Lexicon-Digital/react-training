import { useState } from "react"

const withClose = (wrapped: JSX.Element) => {

    return (function Closable() {

        const [done, setDone] = useState(false)

        setTimeout(() => setDone(true), 3000)

        return (
            <div style={{ display: done ? "none" : "block" }}>
                {wrapped}
            </div>
        );
    })();
};
export { withClose }
