import React from "react";
import { enquireScreen } from "enquire-js";

import Nav3 from "./Nav3";
import Banner1 from "./Banner1";
import Content0 from "./Content0";
import Content5 from "./Content5";
import Content3 from "./Content3";
import Content11 from "./Content11";
// import Footer1 from "./Footer1";

import {
  Nav30DataSource,
  Banner10DataSource,
  Content00DataSource,
  Content50DataSource,
  Content30DataSource,
  Content110DataSource,
  Footer10DataSource,
} from "./data.source";
import "./less/antMotionStyle.less";
import "./less/radius.less";
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};

class Home extends React.Component {
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
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    // if (location.port) {
    //   // 样式 build 时间在 200-300ms 之间;
    //   setTimeout(() => {
    //     this.setState({
    //       show: true,
    //     });
    //   }, 500);
    // }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      // <Nav3
      //   id="Nav3_0"
      //   key="Nav3_0"
      //   dataSource={Nav30DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content11
        id="Content11_0"
        key="Content11_0"
        dataSource={Content110DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Footer1
      //   id="Footer1_0"
      //   key="Footer1_0"
      //   dataSource={Footer10DataSource}
      //   isMobile={this.state.isMobile}
      // />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成{children} start  */}
        {/* {this.state.show && children}   直接渲染children 不要再判断show了*/}
        {children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}

export default Home;
