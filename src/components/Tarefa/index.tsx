import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { removerContato, editarContato } from '../../store/reducers/tarefas'
import ContatoClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  id,
  nomeCompleto: nomeCompletoOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeCompleto, setNomeCompleto] = useState(nomeCompletoOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeCompleto(nomeCompletoOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function salvarEdicao() {
    dispatch(
      editarContato({
        id,
        nomeCompleto,
        email,
        telefone
      })
    )
    setEstaEditando(false)
  }

  function remover() {
    dispatch(removerContato(id))
  }

  return (
    <S.Card id={`contato-${id}`}>
      <S.Titulo>
        {estaEditando ? 'Editar Contato' : 'Detalhes do Contato'}
      </S.Titulo>

      <S.CampoContato>
        <S.Label>Nome Completo:</S.Label>
        {estaEditando ? (
          <S.Input
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            type="text"
          />
        ) : (
          <S.Texto>{nomeCompleto}</S.Texto>
        )}
      </S.CampoContato>

      <S.CampoContato>
        <S.Label>E-mail:</S.Label>
        {estaEditando ? (
          <S.Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        ) : (
          <S.Texto>{email}</S.Texto>
        )}
      </S.CampoContato>

      <S.CampoContato>
        <S.Label>Telefone:</S.Label>
        {estaEditando ? (
          <S.Input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            type="tel"
          />
        ) : (
          <S.Texto>{telefone}</S.Texto>
        )}
      </S.CampoContato>

      <S.AcoesBotao>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <Botao onClick={cancelarEdicao}>Cancelar</Botao>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <Botao onClick={remover}>Remover</Botao>
          </>
        )}
      </S.AcoesBotao>
    </S.Card>
  )
}

export default Contato
