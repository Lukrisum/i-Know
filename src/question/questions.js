import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./questions.css"
import img from './OIP-C.png';
import { Link } from 'react-router-dom';
import img0 from "./images/0.png";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";



class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      questions: [],
      on_0: { backgroundColor: "#90adff" },
      on_1: { backgroundColor: "#d7f1ff" },
      color_0: { color: "black" },
      color_1: { color: "rgb(155,151,151)" },
    }
  }
  render() {
    return (
      <div className='background03'>

        <div className='headerHome'>
          <input
            className='searchPush'
            placeholder='问问大家' 
            onChange={this.handleQuestions.bind(this)}/>
          <button
            type="submit"
            className='submitQ'
            onClick={this.handleBtnClick.bind(this)}
          >+</button>
          <ul className='guideLine00'>
            <li
              className='li_both'
            >
              <Link
                to="/home"
                className='a_both'
                style={this.state.color_1}
                onTouchEnd={this.handleSwitch.bind(this)}
                data-id="1"
              >热榜</Link>
              <button
                className='btnSignBoth'
                style={this.state.on_1}
              >&nbsp;</button>
            </li>
            <li
              className='li_both'>
              <Link
                to="/home/questions"
                className='a_both'
                style={this.state.color_0}
                data-id="0"
                onTouchEnd={this.handleSwitch.bind(this)}
              >问题</Link>
              <button
                className='btnSignBoth'
                style={this.state.on_0}
              >&nbsp;</button>
            </li>
          </ul >
        </div >
        <div className='blankblock'></div>
        <div className='mainContent'>
          {
            this.state.questions.map((item, index) => {
              return (
                <div
                  key={index}
                  className='hots'>
                  <div className="imgBox">
                    <img src={img} className='profilePhoto' />
                  </div>
                  <div className='hotsContent'>
                    <div className="info">{this.state.username}</div>
                    <div className="words">{item}</div>
                    <div className='active'>
                      <span>123 评论</span>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span>123点赞</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div>
          <ul className='bottomGuider00'>
            < li className='guiders'>
              <Link to="/home" className='allLink'>
                <img src={img0} />
                首页
              </Link>
            </li>
            <li className='guiders'>
              <Link to="/ladders" className='allLink'>
                <img src={img1} />
                排行榜
              </Link>
            </li>
            <li className='guiders'>
              <Link to="/repository" className='allLink'>
                <img src={img2} />
                知识库
              </Link>
            </li>
            <li className='guiders'>
              <Link to="/myspace" className='allLink'>
                <img src={img3} />
                个人
              </Link>
            </li>
          </ul>
        </div>
      </div >

    )
  }

  handleBtnClick() {
    this.setState({
      questions: [...this.state.questions, this.state.inputValue],
      inputValue: '',
    })
  }

  handleQuestions(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }


  handleSwitch(e) {
    let flag = e.currentTarget.dataset.id;
    if (flag == 1) {
      this.setState({
        on_0: { backgroundColor: "#d7f1ff" },
        on_1: { backgroundColor: "#90adff" },
        color_0: { color: "rgb(155,151,151)" },
        color_1: { color: "black" }
      })
    }
    if (flag == 0) {
      this.setState({
        on_0: { backgroundColor: "#90adff" },
        on_1: { backgroundColor: "#d7f1ff" },
        color_0: { color: "black" },
        color_1: { color: "rgb(155,151,151)" }
      })
    }
  }
}
export default Questions;


