import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { enquireScreen } from "enquire-js";
import Header from "./home/Nav3";
import Footer from "./home/Footer1";
import Backtop from "./home/BackTop";
import Home from "./home";
import Donate from "./donate/Donate";
import Team from "./team/Team";
import Time from "./time/Time";
import Message from "./message/Message";
import Register from "./register/Register";

import { Nav30DataSource, Footer10DataSource } from "./home/data.source.js";
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Header dataSource={Nav30DataSource} isMobile={this.isMobile} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route
              path="/donate"
              element={<Donate isMobile={this.state.isMobile} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/time" element={<Time />} />
            <Route path="/message" element={<Message />} />
          </Routes>
          <Backtop />
          <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
        </Router>
      </div>
    );
  }
}

export default App;
