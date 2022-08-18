import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import router from 'next/router'

import loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function ForcarAutenticacao(props) {
    const { carregando, usuario } = useAuth()

    function renderizarConteudo() {        
        return (
            <>
                <Head>
                    <Script dangerouslySetInnerHTML={{
                        __html: `
                            if (!document.cookie?.includes('admin-tempalte-cod3r-auth')) {
                                window.location.href = '/autenticacao'
                            }
                        `
                    }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} />
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    }
    else if (carregando) {
        return renderizarCarregando()
    }
    else {
        router.push('/autenticacao')
        return null
    }
}