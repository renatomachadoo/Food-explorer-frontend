
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [data, setData] = useState({})

    async function signIn({ email, password }){
        try {
            const response = await api.post("/sessions", {email, password}, {
                withCredentials : true
            })
            const { user } = response.data
            
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

            setData({ user })
        } catch (error) {
            if(error.response){
                return alert(error.response.data.message)
            }
            alert("Erro ao iniciar sessão.")
        }
    }

    function signOut(){
        localStorage.removeItem("@foodexplorer:user")

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user")

        if(user){
            setData({
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth}