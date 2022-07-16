import styled from 'styled-components'
import { CardContent, Typography } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.1rem;
`

export const CardContentStyled = styled(CardContent)`
  border-left: 5px solid ${({ color }) => color || '#5d78ff'};
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  align-items: center;
  //margin: 40px;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`