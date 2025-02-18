import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'
import tarefa from '../../components/Tarefa'

const tarefasSlice = createSlice({
  nome: 'tarefa',
  initialState: [
    new tarefa(
      'Estudar Python',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE
    ),
    new tarefa(
      'Estudar TypeScript',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      '',
      2
    ),
    new tarefa(
      'Estudar React com Vite',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
