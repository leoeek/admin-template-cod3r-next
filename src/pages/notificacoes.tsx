import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const { alternarTema } = useAppData()

  return (
    <Layout titulo="Página inicial" subtitulo="Aqui você irá gerenciar suas notificaçõesssss">
      <button onClick={alternarTema}>click</button>
    </Layout>
  )
}
