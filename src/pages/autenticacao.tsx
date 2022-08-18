import { setDefaultResultOrder } from "dns";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInputl";
import { IconeAtencao } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
    const { usuario, loginGoogle } = useAuth()

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(null)

    function exibirErro(msg, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    function submeter() {
        if (modo === 'login') {
            console.log('login')
            exibirErro('Ocorreu um erro no login')
        }
        else {
            console.log('cadastrar')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="https://source.unsplash.com/random" 
                    alt="Imagem aleatória da tela de autenticação"
                    className="h-screen w-full object-cover"
                />
            </div>

            <div className="m-10 w-full md:w-1/2">
                <h1 className={`
                    text-3xl font-bold mb-5
                `}>
                    { modo === 'login' ? 'Entre com a Sua conta' : 'Cadastre-se na Plataformaa' }
                </h1>

                {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg
                    `}>
                        {IconeAtencao()}
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : (null)}                

                <AuthInput 
                    label="Email"
                    valor={email}
                    tipo="email"
                    obrigatorio={true}
                    valorMudou={setEmail}
                />
                <AuthInput 
                    label="Senha"
                    valor={senha}
                    tipo="password"
                    obrigatorio={true}
                    valorMudou={setSenha}
                />

                <button
                    onClick={submeter}
                    className={`
                        w-full bg-indigo-500 hover:bg-indigo-400
                        text-white rounded-lg px-4 py-3 mt-6
                    `}
                >
                    { modo === 'login' ? 'Entrar' : 'Cadastrar' }
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button
                    onClick={loginGoogle}
                    className={`
                        w-full bg-red-500 hover:bg-red-400
                        text-white rounded-lg px-4 py-3
                    `}
                >
                    Entrar com Google
                </button>

                {modo === 'login' ? (
                    <p>
                        Novo por aqui? 
                        <a 
                            onClick={() => setModo('cadastro')}
                            className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}
                        > Crie uma Conta Gratuitamente</a>
                    </p>
                ) : (
                    <p>
                        Já faz parte da nossa comunidade? 
                        <a 
                            onClick={() => setModo('cadastro')}
                            className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}
                        > Entre com as suas Credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}