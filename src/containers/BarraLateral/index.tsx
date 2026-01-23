import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            criterio="status"
            valor={enums.Status.PENDENTE}
            legenda="Pendentes"
          />
          <FiltroCard
            criterio="status"
            valor={enums.Status.CONCLUIDO}
            legenda="Concluídas"
          />
          <FiltroCard
            criterio="prioridade"
            valor={enums.Prioridade.URGENTE}
            legenda="Urgentes"
          />
          <FiltroCard
            criterio="prioridade"
            valor={enums.Prioridade.IMPORTANTE}
            legenda="Importantes"
          />
          <FiltroCard
            criterio="prioridade"
            valor={enums.Prioridade.NORMAL}
            legenda="Normal"
          />
          <FiltroCard criterio="todas" legenda="Todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
