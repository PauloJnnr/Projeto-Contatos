import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Ver nova aula da EBAC'
    },
    {
      id: 2,
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDO,
      descricao: 'Rever modulo de ESJS6'
    },
    {
      id: 3,
      titulo: 'Estudar TypeScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'Verificar atividade do modulo TS'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefas = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      // tarefaParaEditar = action.payload
      if (indexDaTarefas >= 0) {
        state.itens[indexDaTarefas] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
