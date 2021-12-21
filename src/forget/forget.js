import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Forget extends Component {

  state = {
    bindedMail:'',
  }

  render() {
    return (
      <div>
        <input placeholder='   请填写已绑定邮箱' className='forget_input'/>
      </div>
    )
  }

  handleId(e) {
    this.setState({
      id: e.target.value,
    })
  }

}

export default Forget;
