import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Perfil() {
  const { alternarTema } = useAppData()

  return (
    <Layout titulo="Perfil do Usuário" subtitulo="Aqui você administrar as informações do usuário">
      <h1>Perfil do Usuário</h1>
    </Layout>
  )
}
