import Contato from '../../components/Tarefa'
import { useSelector } from 'react-redux'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

type Props = {
  termoBusca?: string
}

const ListaDeContatos = ({ termoBusca = '' }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const contatosFiltrados = itens.filter(
    (contato) =>
      contato.nomeCompleto.toLowerCase().includes(termoBusca.toLowerCase()) ||
      contato.email.toLowerCase().includes(termoBusca.toLowerCase()) ||
      contato.telefone.includes(termoBusca)
  )

  return (
    <MainContainer>
      <Titulo as="p">
        {contatosFiltrados.length} de {itens.length} contato(s) encontrado(s)
      </Titulo>
      <ul>
        {contatosFiltrados.map((contato) => (
          <li key={contato.id}>
            <Contato
              id={contato.id}
              nomeCompleto={contato.nomeCompleto}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
