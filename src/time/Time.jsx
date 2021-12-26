import { React, useState, useEffect } from "react";
import dayjs from "dayjs";
import "./time.less";
export default function Time() {
  const getSFM = function (seconds, dateFormat = "H小时 i分钟 s秒") {
    var obj = {};
    obj.H = Number.parseInt(seconds / 3600);
    obj.i = Number.parseInt((seconds - obj.H * 3600) / 60);
    obj.s = Number.parseInt(seconds - obj.H * 3600 - obj.i * 60);
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
      .replace("H", obj.H)
      .replace("i", obj.i)
      .replace("s", obj.s);
    return rs;
  };
  const level1 = dayjs("2021-12-26").unix();
  let timer;
  const [date, setdate] = useState(dayjs().unix());
  const tick = () => {
    timer = setInterval(() => {
      setdate(dayjs().unix());
    }, 1000);
  };
  useEffect(() => {
    tick();
  }, []);
  return (
    <div className="timecontent-color">
      <div className="timecontent">
        <div className="timeimg"></div>
        <div className="timewords">
          <h1>
            当前为猫服 <b className="zmnum">0</b> 周目 (内测)
          </h1>

          <h2>已经运行了{getSFM(date - level1)}</h2>
        </div>
      </div>
    </div>
  );
}
