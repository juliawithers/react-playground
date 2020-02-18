import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShoppingItem from './ShoppingItem';


describe(`ShoppingItem Component`, () => {
    it(`renders empty when given no item`, () => {
        const wrapper = shallow(<ShoppingItem />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    
    it(`renders the item when supplied`, () => {
        const testItem = { name: 'test-name', checked: false}
        const wrapper = shallow(<ShoppingItem item={testItem}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it(`strikesthrough checked items`, () => {
        const testItem = { name: 'test-name', checked: true}
        const wrapper = shallow(<ShoppingItem item={testItem}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})