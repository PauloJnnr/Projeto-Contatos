import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eeeeee;
  height: 100vh;
  overflow-y: auto;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const ListaResumo = styled.div`
  margin-top: 16px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  border-radius: 8px;
  background-color: #ffffff;
`

export const ContatoResumo = styled.div`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &:last-child {
    border-bottom: none;
  }
`

export const NomeResumo = styled.p`
  font-weight: bold;
  font-size: 13px;
  margin: 0 0 4px 0;
  color: #333;
  word-break: break-word;
`

export const EmailResumo = styled.p`
  font-size: 11px;
  color: #666;
  margin: 0;
  word-break: break-word;
`

export const SemResultados = styled.p`
  padding: 20px;
  text-align: center;
  color: #999;
  font-size: 13px;
  margin: 0;
`
