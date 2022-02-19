
import React, { Component } from 'react'
import { getContact } from '../../../host/config'
import  axios  from 'axios'
import { Button } from 'react-bootstrap'
import { access_token } from '../../../host/host'
export default class Call extends Component {
state={
data:[]
}
getContacts=()=>{
   getContact().then(res=>{
        this.setState({data:res.data[0]})
        
        console.log(this.state.data)
    })
}
putContact=()=>{
    const contact={
        "phone": "+998995160547",
        "instagram": "https://instagram.com/dasturchi_14",
        "facebook": "https://www.facebook.com/asqar.mirzaye",
        "telegram": "https://t.me/mirzayev_14"
    }
    axios.patch('http://62.209.129.38:8000/api/contact/2/',{ contact },{headers: {
        'Authorization': `Token ${access_token}`}
      }).then(res=>(console.log(res.data))).catch(err=>{console.log(err)})
}

componentDidMount(){
    this.getContacts()
    console.log("hello")
}
  render() {
    return (
      <div>
<Button onClick={this.putContact}>sadsad</Button>

      </div>
    )
  }
}
