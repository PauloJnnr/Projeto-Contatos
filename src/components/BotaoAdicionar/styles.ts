import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  border-radius: 50%;
  font-size: 40px;
  text-decoration: none;
  transition: width 0.3s ease, border-radius 0.3s ease, padding 0.3s ease;
  padding-left: 0;
  overflow: visible;

  .icone {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: left 0.3s ease, transform 0.3s ease;
  }

  .texto {
    opacity: 0;
    margin-left: 80px;
    font-size: 16px;
    transition: opacity 0.3s ease;
    white-space: nowrap;
  }

  &:hover {
    width: 220px;
    border-radius: 32px;
  }

  &:hover .icone {
    left: 20px;
    transform: none;
  }

  &:hover .texto {
    opacity: 1;
  }
`
