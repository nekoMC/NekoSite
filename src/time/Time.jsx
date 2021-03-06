import { React, useState, useEffect } from "react";
import dayjs from "dayjs";
import "./time.less";
export default function Time() {
  const [date, setdate] = useState(dayjs().unix());
  const getTSFM = function (seconds, dateFormat = "D天 H小时 i分钟 s秒") {
    var obj = {};
    obj.D = Number.parseInt(seconds / 86400);
    obj.H = Number.parseInt((seconds - obj.D * 86400) / 3600);
    obj.i = Number.parseInt((seconds - obj.D * 86400 - obj.H * 3600) / 60);
    obj.s = Number.parseInt(
      seconds - obj.D * 86400 - obj.H * 3600 - obj.i * 60
    );
    if (obj.D < 10) {
      obj.D = "0" + obj.D;
    }
    if (obj.H < 10) {
      obj.H = "0" + obj.H;
    }
    if (obj.i < 10) {
      obj.i = "0" + obj.i;
    }
    if (obj.s < 10) {
      obj.s = "0" + obj.s;
    }
    var rs = dateFormat
      .replace("D", obj.D)
      .replace("H", obj.H)
      .replace("i", obj.i)
      .replace("s", obj.s);
    return rs;
  };
  const level1 = dayjs("2022-1-30").unix();

  const tick = () => {
    setInterval(() => {
      setdate(dayjs().unix());
    }, 1000);
  };
  useEffect(() => {
    tick();
  });
  return (
    <div className="timecontent-color">
      <div className="timecontent">
        <div className="timeimg0"></div>
        <div className="timewords">
          <h3 className="zmnum_older">0周目(测试)存活了897小时</h3>
        </div>

        <div className="timeimg"></div>
        <div className="timewords">
          <h1>
            当前为猫服 <b className="zmnum">1</b> 周目
          </h1>
          {/* (0周目897小时) */}
          <h2>已经运行了{getTSFM(date - level1)}</h2>
        </div>
      </div>
    </div>
  );
}
