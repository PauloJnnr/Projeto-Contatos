import { useState } from 'react'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeTarefas'

const Home = () => {
  const [termoBusca, setTermoBusca] = useState('')

  return (
    <>
      <BarraLateral
        mostrarFiltros={false}
        onFiltroChange={setTermoBusca}
        termoFiltro={termoBusca}
      />
      <ListaDeContatos termoBusca={termoBusca} />
      <BotaoAdicionar />
    </>
  )
}

export default Home
