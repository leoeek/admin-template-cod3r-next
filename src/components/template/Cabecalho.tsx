import useAppData from "../../data/hook/useAppData"
import AvatarUsuario from "./AvatarUsuario"
import BotaoAlterarTema from "./BotaoAlterarTema"
import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alternarTema } = useAppData()

    return (
        <div className="flex">
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className="flex flex-grow justify-end">
                <BotaoAlterarTema tema={tema} altearTema={alternarTema} />
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    )
}