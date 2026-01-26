import { Circulo } from './styles'

const BotaoAdicionar = () => {
  return (
    <>
      <Circulo to="/cadastro">
        <span className="icone">+</span>
        <span className="texto">Adicionar Tarefa</span>
      </Circulo>
    </>
  )
}

export default BotaoAdicionar
