import React from 'react'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Accordion from './Accordion'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Accordion Component`,() =>{
    // snapshot tests

    const sectionsProp= [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
      
      it(`renders empty given no sections`,() =>{
          const wrapper = shallow(<Accordion />)
          expect(toJson(wrapper)).toMatchSnapshot()
      })
      it(`renders the buttons only by default`,()=>{
          const wrapper = shallow(<Accordion sections={sectionsProp} />)
          expect(toJson(wrapper)).toMatchSnapshot()
      })
      it(`opens the content when button is clicked`,()=>{
          const wrapper = shallow(<Accordion sections ={sectionsProp}/>)
        //   console.log('>>> WRAPPER <<<')
        //   console.log(wrapper.debug())
        //   console.log('>>> FIND(BUTTON) <<<')
        //   console.log(wrapper.find('button').debug())
        //   console.log(wrapper.find('button').at(1).debug())
          wrapper.find('button').at(1).simulate('click')
          expect(toJson(wrapper)).toMatchSnapshot()
      })
      it(`opens one section at a time`,()=>{
        const wrapper = shallow(<Accordion sections ={sectionsProp}/>)
          wrapper.find('button').at(1).simulate('click')
          wrapper.find('button').at(2).simulate('click')
          expect(toJson(wrapper)).toMatchSnapshot()
      })
})
