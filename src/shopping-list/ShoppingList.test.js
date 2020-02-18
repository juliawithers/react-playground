import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShoppingList from './ShoppingList';


describe(`ShoppingList Component`, () => {
    it(`renders empty when given no item`, () => {
        const wrapper = shallow(<ShoppingList />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    
    it(`renders ShoppingItems when supplied with an items prop`, () => {
        const testItem = [
            { name: 'test item 1', checked: false },
            { name: 'another test item', checked: true },
            { name: 'test item number three', checked: false }
        ]
        const wrapper = shallow(<ShoppinList item={testItem}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})