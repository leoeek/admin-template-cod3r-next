import { IconeAjustes, IconeCasa, IconeLogout, IconeSino } from "../icons/index";
import MenuItem from "./MenuItem";
import Logo from './Logo'
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral() {

    const { logout } = useAuth()

    return (
        <aside 
            className={`
                flex flex-col
                bg-gray-200 text-gray-700
                dark:bg-gray-900
            `}
        >
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-t from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajuste" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem 
                    url="/" 
                    texto="Sair" 
                    icone={IconeLogout} 
                    className={`
                    text-red-600
                      hover:bg-red-400 hover:text-white
                    `}           
                    onClick={logout}         
                />
            </ul>
        </aside>
    )
}