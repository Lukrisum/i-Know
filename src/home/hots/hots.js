import React, { Component } from 'react';
import "./hots.css"
import { Link } from 'react-router-dom';
import img from './OIP-C.png'

class Hots extends Component {

  state = {
    whatsHot: ['','','','','','','']
  }

  render() {
    return (
      <div className='main'>
        <div className='blankblock'></div>
        <div className='mainContent'>
          {
            this.state.whatsHot.map((item, index) => {
              return (
                <div
                  key={index}
                  className='hots'>
                  <div className="imgBox">
                    <img src={img} className='profilePhoto' />
                  </div>
                  <div className='hotsContent'>
                  <div className="info">username</div>
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
      </div>
    )
  }
}

export default Hots;