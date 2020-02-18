import React from 'react'
import ShoppingItem from './ShoppingItem'

// so this is a function because we are not altering state in this 
// particular component, just passing it through to other components 
// to be altered
export default function ShoppingList(props){
    return(
        <ul>
            {props.items.map((item, i) => 
                <ShoppingItem 
                    key = {i}
                    item = {item}
                    onDeleteItem = {props.onDeleteItem}
                    onCheckItem = {props.onCheckItem}
                />
            )}
        </ul>
    )
}

ShoppingList.defaultProps = {
        items: []
    }