import axios from 'axios';
import React, { Component } from 'react';
import "./login.css"
import { Link } from 'react-router-dom';
import img from "./iknow.png"

class Login extends Component {

  state = {
    username: '',
    password: '',
    id: '',
    skip: '',
    flag: 0,
    sign: "",
    color:{color:""}
  }
  render() {
    return (
      <div className='login_father'>
        <img src={img} className='logoLogin'/>
        <div>
          <h1
            className='h1_login'
          >i know</h1>
        </div>

        <input
          type={'id'}
          placeholder={'               ID'}
          onChange={this.handleId.bind(this)}
          value={this.state.id}
          className='id input_login'
        />

        <input
          type={'password'}
          placeholder={'          输入密码'}
          onChange={this.handlePassword.bind(this)}
          value={this.state.password}
          className='password input_login'
        />

        <Link to="/forget" className='switchForget switch'
          onTouchStart={this.handleSetSign.bind(this)}
          onTouchEnd={this.handleRmSign.bind(this)}
        >忘记密码</Link>

        <Link to="/register" className='switchRegister switch'
          onTouchStart={this.handleSetSign.bind(this)}
          onTouchEnd={this.handleRmSign.bind(this)}
        >用户注册</Link>

        <span className='sign' style={this.state.color}>{this.state.sign}</span>

        <Link
          onTouchEnd={this.handleCilck.bind(this)}
          className='login'
          to={this.state.skip}
        >
          登录
        </Link>

      </div >
    )
  }

  handleId(e) {
    this.setState({
      id: e.target.value,
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  handleSetSign(e) {
    e.target.style.color = '#90adff';
  }

  handleRmSign(e) {
    e.target.style.color = 'black';
  }

  handleCilck() {
    axios.post('http://175.24.166.140/login', {
      id: parseInt(this.state.id),
      password: this.state.password,
    })
      .then(response => {
        if (response.data.msg === "login successfully") {
          this.setState({
            skip: "/home",
            flag: 1
          })
          if (this.state.flag) {
            this.setState({
              color:{color:"green"},
              sign: "*信息正确,再次点击以登陆!",
              flag:0
            })
          }
          else {
            this.setState({
              color:{color:"green"},
              sign: "*登陆成功!",
            })
          }
        }
        else {
          this.setState({
            color:{color:"red"},
            sign: "*请输入正确的学号与密码!"
          })
        };
      })
  }
}

export default Login;

