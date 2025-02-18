import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}
const Tarefa = (
  p0: string,
  IMPORTANTE: enums.Prioridade,
  PENDENTE: enums.Status,
  p1: string,
  p2: number,
  { descricao, prioridade, status, titulo }: Props
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [estadEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametros="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametros="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao}></S.Descricao>
      <S.BarraAcoes>
        {estadEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
