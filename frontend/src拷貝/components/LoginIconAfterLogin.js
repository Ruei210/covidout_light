import { useContext } from "react"
import GlobalContext from "./GlobalContext"

export default function LoginIconAfterLogin() {
    const ctx = useContext(GlobalContext)
    return (
        <div>{ctx.name}</div>
    )
}
