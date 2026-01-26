import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as S from './styles'
import { Botao, Campo } from '../../styles'
import * as enums from '../../utils/enums/tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
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
          </>
        ) : (
          <Botao type="button" onClick={() => navigate('/')}>
            Voltar a lista e tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
