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

  function scrollToContato(contatoId: string | number) {
    const id = `contato-${contatoId}`

    if (window.location.pathname !== '/') {
      navigate('/')
    }
    let attempts = 0
    const maxAttempts = 50 // ~3s / 50ms
    console.debug('[BarraLateral] scrollToContato start', { id })
    const handle = setInterval(() => {
      const el = document.getElementById(id)
      attempts += 1
      if (el || attempts >= maxAttempts) {
        clearInterval(handle)
        if (el) {
          console.debug('[BarraLateral] elemento encontrado, rolando', { id })
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          const input = el.querySelector('input') as HTMLElement | null
          if (input) {
            console.debug('[BarraLateral] focando input dentro do card', { id })
            input.focus()
          }
        } else {
          console.debug(
            '[BarraLateral] elemento não encontrado após tentativas',
            { id, attempts }
          )
        }
      }
    }, 50)
  }

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
                    <S.NomeResumo
                      role="button"
                      tabIndex={0}
                      onClick={() => scrollToContato(contato.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ')
                          scrollToContato(contato.id)
                      }}
                    >
                      {contato.nomeCompleto}
                    </S.NomeResumo>
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
