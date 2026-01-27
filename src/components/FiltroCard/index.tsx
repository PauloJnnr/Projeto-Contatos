import * as S from './styles'

export type Props = {
  legenda: string
  criterio: 'status' | 'todas' | 'prioridade'
  valor?: string
}

const FiltroCard = ({ legenda }: Props) => {
  return (
    <S.Card ativo={false}>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
