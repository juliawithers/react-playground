import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddItemForm from './AddItemForm';


describe(`AddItemForm Component`, () => {
    it(`renders the complete form`, () => {
        const wrapper = shallow(<AddItemForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})