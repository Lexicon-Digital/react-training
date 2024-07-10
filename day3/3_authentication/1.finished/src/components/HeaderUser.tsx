import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

export default function HeaderUser() {
    const { user, isAuthenticated, isLoading } = useAuth0();

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