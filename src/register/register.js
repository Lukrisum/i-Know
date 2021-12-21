import React, { Component } from 'react';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      password: '',
      confirmpassword: '',
      mail: '',
      color_0: { color: "rgba(255,255,255,0)" },
      color_1: { color: "rgba(255,255,255,0)" },

      skip_1: '',
      registerSign: '',
      registercolor:{color:"rgba(255,255,255,0)"}
    }
  }

  render() {
    return (
      <div>
        <h1 className='h1_register'>新用户注册</h1>

        <input
          placeholder={'          ID/学号'}
          onChange={this.handleId.bind(this)}
          value={this.state.id}
          className='input_id input_register'
        />

        <input
          placeholder={'            昵称'}
          onChange={this.handleUsername.bind(this)}
          value={this.state.username}
          className='input_username input_register'
        />

        <input
          type={"password"}
          placeholder={'         填写密码'}
          onChange={this.handlePassword.bind(this)}
          value={this.state.password}
          className='input_password input_register'
        />
        <input
          type={"password"}
          placeholder={'         确认密码'}
          onChange={this.handleConfirm.bind(this)}
          value={this.state.confirmpassword}
          className='input_confirm input_register'
        />
        <h6
          className='sign_0'
          style={this.state.color_0}
          onTouchEnd={this.handleSignRm.bind(this)}
        >请保证两次密码一致</h6>
        <input
          placeholder={'         填写邮箱'}
          onChange={this.handleEmail.bind(this)}
          value={this.state.mail}
          className='input_mail input_register'
        />
        <h6
          className='sign_1'
          style={this.state.color_1}
          onTouchEnd={this.handleSignRm.bind(this)}
        >邮箱不能为空!</h6>

        <span className='registerSign' style={this.state.registercolor}>{this.state.registerSign}</span>
        <Link
          onTouchEnd={this.handleClick.bind(this)}
          className='button_register'
          to={this.state.skip_1}
        >
          注册
        </Link>
      </div>
    )
  }

  handleId(e) {
    this.setState({
      id: e.target.value,
    })
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }

  handleEmail(e) {
    this.setState({
      mail: e.target.value,
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  handleConfirm(e) {
    this.setState({
      confirmpassword: e.target.value,
    })
  }

  handleClick() {
    if (this.state.confirmpassword === this.state.password) {
      this.setState({
        color_0: { color: "rgba(255,255,255,0)" }
      })
    }
    else {
      this.setState({
        color_0: { color: "red" }
      })
    }

    if (this.state.mail === '') {
      this.setState({
        color_1: { color: "red" }
      })
    }
    else {
      this.setState({
        color_1: { color: "rgba(255,255,255,0)" }
      })
    }
    if ((this.state.mail !== '')
      && (this.state.id !== '')
      && (this.state.password !== '')
      && (this.state.confirmpassword !== '')
      && (this.state.password === this.state.confirmpassword)
      && (this.state.username !== '')) {
      axios({
        method: 'POST',
        url: 'http://175.24.166.140/register',
        data: {
          id: parseInt(this.state.id),
          password: this.state.password,
          username: this.state.username,
          mail: this.state.mail
        },
      }).then(res => {
        if (res.data.msg === "the id already exists") {
          alert("该用户已经存在!")
        }
        if (res.data.msg === "success") {
          this.setState({
            skip_1: '/home',
            registercolor:{color:"green"},
            registerSign: '*注册成功,点击进入主页!',
          })
        }
      })
    }
    else {
      this.setState({
        registercolor:{color:"red"},
        registerSign: '*请注意填写格式!'
      })
    }
  }

  handleSignRm() {
    this.setState({
      color_0: { color: "rgba(255,255,255,0)" },
      color_1: { color: "rgba(255,255,255,0)" }
    })
  }
}


export default Register;
