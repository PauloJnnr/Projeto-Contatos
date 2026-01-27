import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${variaveis.azulEscuro};
`

export const CampoContato = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
  }
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${variaveis.azulEscuro};
  margin-bottom: 8px;
`

export const Texto = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
  word-break: break-word;
`

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
    border-color: ${variaveis.azul};
    box-shadow: 0 0 0 3px rgba(16, 100, 233, 0.1);
  }
`

export const AcoesBotao = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  button {
    flex: 1;
  }
`
