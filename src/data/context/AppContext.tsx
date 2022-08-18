import { createContext, useEffect, useState } from "react"

type Tema = 'dark' | ''

interface AppContextProps {
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [tema, setTema] = useState<Tema>('')

    function alternarTema() {
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema') as Tema
        setTema(temaSalvo)
    }, [])

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            { props.children }
        </AppContext.Provider>
    )
}

export default AppContext
// export const AppConsumer = AppContext.Consumer