import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'react-collapse';
import Popup from 'reactjs-popup';
import queistionImage from '../assets/DS.png';

class Quiz extends Component {

  //  -- Set state and action
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      botBtn: 'chevron-up',
      open: false
    }

    this.stickyNavbar = this.stickyNavbar.bind(this);
    this.collapseAnswer = this.collapseAnswer.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  //  -- Function for opening and closing popup
  openModal() {
    this.setState({open: true});
  }

  closeModal() {
    this.setState({open: false});
  }

  //  -- All function for sticky navbar when scrolling down
  stickyNavbar() {
    this.setState({scroll: window.scrollY});
  }

  collapseAnswer() {
    this.setState({
      collapseOpen: true,
      botBtn: 'chevron-down'
    })
  }

  componentDidMount() {
    const e = document.querySelector(".quiz-navbar");
    this.setState({top: e.offsetTop, height: e.offsetHeight});
    window.addEventListener('scroll', this.stickyNavbar);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ?
      document.body.style.paddingTop = `${this.state.height}px`: 
      document.body.style.paddingTop = 0;
  }

  //  -- Render page
  render() {
    return (
      <div className="quiz-container">

        {/* Navbar Section */}
        <div className={this.state.scroll > this.state.top ? "quiz-navbar sticky" : "quiz-navbar"}>
          <FontAwesomeIcon icon="chevron-left" className="quiz-navbar-icon" />End Quiz
        </div>

        {/* Content Section */}
        {/* This section contain Header content, image, 
        question, answer choice, show quiz result popup 
        when click submit button, and show the correct 
        answer */}

        {/* ------------------------------------------------------------------------------------ */}

        {/* Header content */}
        <div className="quiz-header">
          <span className="quiz-header-title">Physics Quiz</span>
          <span className="quiz-header-time">00:00:09</span>
        </div>
        <div className="page-line" />

        {/* Image content */}
        <div className="quiz-image">
          <img src={queistionImage} alt="Question" />
        </div>

        {/* Question section */}
        <div className="quiz-question">
          The circuit shown above is in uniform magnetic field that is into the page and is 
          decreasing in magnitude at rate of 150 tesla/second.
        </div>
        <div className="quiz-question">
          The ammeter reads?
        </div>

        {/* Answer choice */}
        <div className="quiz-answer">
          <div className="quiz-answer-title">Option Select</div>
          <form>
            <div className="quiz-answer-choice">
              <input type="radio" name="answer" value="choice-a" /> 
              <label className="quiz-answer-label"><b>A.</b> Indonesia</label>
            </div>
            <div className="quiz-answer-choice">
              <input type="radio" name="answer" value="choice-b" />
              <label className="quiz-answer-label"><b>B.</b> Australia</label>
            </div>
            <div className="quiz-answer-choice">
              <input type="radio" name="answer" value="choice-c" />
              <label className="quiz-answer-label"><b>C.</b> Brunei</label>
            </div>
            <div className="quiz-answer-choice">
              <input type="radio" name="answer" value="choice-d" />
              <label className="quiz-answer-label"><b>D.</b> Singapore</label>
            </div>
          </form>
        </div>

        {/* Show quiz result */}
        {/* click the submit button to show quiz result popup */}
        <div className="quiz-submit">
          <div className="quiz-submit-btn">
            <button onClick={this.openModal} className="quiz-submit-btn-btn" type="submit">SUBMIT</button>
            <Popup
            open={this.state.open} 
            onClose={this.closeModal}
            closeOnDocumentClick>
              <div className="quiz-popup">
                <div className="quiz-popup-model">
                  <div className="quiz-popup-title">-- Quiz Result --</div>
                  <div className="quiz-popup-content">
                    <div className="quiz-popup-list">
                      Quiz Time <span className="quiz-popup-result">: 00:00:09</span>
                    </div>
                    <div className="quiz-popup-list">
                      Marks <span className="quiz-popup-result">: 127/635 (20%)</span>
                    </div>
                    <div className="quiz-popup-list">
                      Attempted Question <span className="quiz-popup-result">: 4/5</span>
                    </div>
                    <div className="quiz-popup-list">
                      Skipped Question <span className="quiz-popup-result">: 1/5</span>
                    </div>
                    <div className="quiz-submit-btn btn-close">
                      <button onClick={this.closeModal} className="quiz-submit-btn-btn btn-popup">OK</button>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
            <Link to="/" className="quiz-skip">Skip Question</Link>
          </div>
        </div>
        {/* (this is just for prototype, soon the pop up will set in the right place) */}

        {/* Real answer */}
        {/* click the "Click For Answer" to show the hidden real answer */}
        <div className="quiz-real-answer">
          <div className="quiz-real-answer-container">
            <div className="quiz-real-answer-up">
              <FontAwesomeIcon icon={this.state.botBtn} className="quiz-real-answer-icon"  />
              <div className="quiz-real-answer-title" onClick={this.collapseAnswer}>
                Click For Answer
              </div>
            </div>
            <Collapse isOpened={this.state.collapseOpen}>
              <div className="quiz-real-answer-answer">
                <div className="page-line bottom-line" />
                <div className="quiz-real-answer-real">Answer: A</div>
                <div className="quiz-real-answer-detail-title">Description:</div>
                <div className="quiz-real-answer-detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="quiz-real-answer-detail">
                  Nam venenatis odio in ornare egestas. Suspendisse id arcu at dolor volutpat rhoncus. 
                  Cras volutpat scelerisque lorem at scelerisque. 
                  Proin nec elit et ante auctor aliquet vitae at dui.
                </div>
                <div className="quiz-real-answer-detail">
                  Proin nunc neque, volutpat pharetra dignissim id, convallis non augue. 
                  Sed pellentesque vitae lorem et aliquet. 
                  Nunc egestas arcu arcu, ac ullamcorper lorem sollicitudin id.
                </div>
                <div className="quiz-real-answer-detail">
                  In tempor quam tellus, ac iaculis odio maximus in. 
                  Fusce ut malesuada tortor, in bibendum lectus. 
                  Vivamus a convallis lacus, nec elementum sapien.
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;