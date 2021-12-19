import React from "react";
import { Button } from "antd";

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf("title") === 0 ? "h1" : "div";
  tag = item.href ? "a" : tag;
  let children =
    typeof item.children === "string" && item.children.match(isImg)
      ? React.createElement("img", { src: item.children, alt: "img" })
      : item.children;
  if (item.name.indexOf("button") === 0 && typeof item.children === "object") {
    children = React.createElement(Button, {
      ...item.children,
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
//解析url中的参数，用于message提示页
export const paramsParse = () => {
  let res = {};
  let query = window.location.search.substring(1);
  let arr = decodeURI(query).split("&");
  arr.forEach((item) => {
    let pairs = item.split("=");
    res[pairs[0]] = pairs[1];
  });
  return res;
};
