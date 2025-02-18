import { configureStore } from '@reduxjs/toolkit'
import tarefasReducere from './reducers/tarefa'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducere
  }
})

export type RootReducer = ReturnType<typeof store.getState>
