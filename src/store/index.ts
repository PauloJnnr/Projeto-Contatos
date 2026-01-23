import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import FiltroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
