import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Tarefa'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nomeCompleto: 'João Silva',
      email: 'joao@email.com',
      telefone: '(11) 98765-4321'
    },
    {
      id: 2,
      nomeCompleto: 'Maria Santos',
      email: 'maria@email.com',
      telefone: '(21) 99876-5432'
    },
    {
      id: 3,
      nomeCompleto: 'Pedro Oliveira',
      email: 'pedro@email.com',
      telefone: '(31) 98765-4321'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.itens.push(action.payload)
    },
    removerContato: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatosSlice.actions
export default contatosSlice.reducer
