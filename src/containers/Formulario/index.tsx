import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'
import { adicionarContato } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if (nomeCompleto && email && telefone) {
      const novoContato = {
        id: Date.now(),
        nomeCompleto,
        email,
        telefone
      }

      dispatch(adicionarContato(novoContato))
      navigate('/')
    } else {
      alert('Por favor, preencha todos os campos!')
    }
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          type="text"
          placeholder="Nome Completo"
          required
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail"
          required
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="tel"
          placeholder="Telefone"
          required
        />
        <BotaoSalvar type="submit">Cadastrar Contato</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
