import React, { Component } from 'react'
export default class Addstudent extends Component {
    state={
        options:[
            {name: 'Swedish', value: 'sv'},
            {name: 'English', value: 'en'},
            {
                type: 'group',
                name: 'Group name',
                items: [
                    {name: 'Spanish', value: 'es'},
                ]
            },
        ]
    }
  render() {
    return (
<div></div>
        )
  }
}
