import React, { Component } from 'react'
import Login from '../Login'
import Course from './Course'
import Menu1 from './Menu1'

export default class Body extends Component {
    state={
        token:''
      }
     
       componentDidMount(){
        this.setState({token:localStorage.getItem('token')})
        console.log(localStorage.getItem('token'))
      }
  render() {
    return (
      <div>{this.state.token?(<Menu1/>):(<Course/>)}        
        </div>
    )
  }
}
