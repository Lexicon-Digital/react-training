'use client'
import styles from "../../../page.module.css";

type ErrorProps = {
    children?: React.ReactNode
}
export const Error = ({children} : ErrorProps) => {
    return <span className={styles.error}>
        {children}
    </span>
}