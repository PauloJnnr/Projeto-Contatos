import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { RootReducer } from '../../store'

type Props = {
  mostrarFiltros: boolean
  onFiltroChange?: (termo: string) => void
  termoFiltro?: string
}

const BarraLateral = ({
  mostrarFiltros,
  onFiltroChange,
  termoFiltro = ''
}: Props) => {
  const navigate = useNavigate()
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const contatosFiltrados = itens.filter(
    (contato) =>
      contato.nomeCompleto.toLowerCase().includes(termoFiltro.toLowerCase()) ||
      contato.email.toLowerCase().includes(termoFiltro.toLowerCase()) ||
      contato.telefone.includes(termoFiltro)
  )

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <Botao type="button" onClick={() => navigate('/')}>
            Voltar à lista de contatos
          </Botao>
        ) : (
          <>
            <Campo
              type="text"
              placeholder="Buscar contato..."
              value={termoFiltro}
              onChange={(e) => onFiltroChange?.(e.target.value)}
            />
            <S.ListaResumo>
              {contatosFiltrados.length > 0 ? (
                contatosFiltrados.map((contato) => (
                  <S.ContatoResumo key={contato.id}>
                    <S.NomeResumo>{contato.nomeCompleto}</S.NomeResumo>
                    <S.EmailResumo>{contato.email}</S.EmailResumo>
                  </S.ContatoResumo>
                ))
              ) : (
                <S.SemResultados>Nenhum contato encontrado</S.SemResultados>
              )}
            </S.ListaResumo>
          </>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
