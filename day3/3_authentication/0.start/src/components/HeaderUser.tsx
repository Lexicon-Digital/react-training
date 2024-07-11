import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

export default function HeaderUser() {
    const user = { name: null };
    const isLoading = true;
    const isAuthenticated = false;

    if (isLoading) {
        return;
    }

    if (isAuthenticated) {
        return <>
        <Link to="/profile">{ user?.name }</Link>
        <LogoutButton />
        </>
    }

    return <LoginButton />
}