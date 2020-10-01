import styled, {css} from 'styled-components'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'



// <span className={`${itemCount > 0 ? 'has-items': '' } item-count`}>{itemCount}</span>

const itemCountStyles = css`
    position: absolute;
    font-size: 10px;
    font-weight: normal;
    bottom: 12px;
`

const hasItemStyles = css`
  font-weight: bold;
`

const getItmeCountStyles = ({itemCount}) =>
  `${itemCountStyles} ${itemCount > 0 ? hasItemStyles : ''}`

export const CartIconContainer = styled.div`
   width: 45px;
   height: 45px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`

export const ShoppingIconContainer = styled(ShoppingIcon)`
   width: 24px;
   height: 24px;
`

export const ItemCountContainer = styled.span`
  ${getItmeCountStyles}
`
