import React from "react";
const qqNum = "QQ群:643531871 ";
const ipAddr = "";
const tip_words = qqNum + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + ipAddr;
const btn_ = "现在加入";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children: "https://s1.imagehub.cc/images/2021/11/30/logo.png",
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item0",
        className: "header3-item",
        children: {
          href: "/home",
          children: [{ children: "主页", name: "text" }],
        },
      },
      {
        name: "item1",
        className: "header3-item",
        children: {
          target: "_blank",
          href: "http://play.nekomc.fun:8123/",
          children: [{ children: "卫星地图", name: "text" }],
        },
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          target: "_blank",
          href: "https://www.aliyundrive.com/s/ziM3qawp7wL",
          children: [{ children: "客户端下载", name: "text" }],
        },
      },
      // {
      //   name: "item3",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [{ children: "联系我们", name: "text" }],
      //   },
      //   //#region
      //   //TODO:存在bug 当激活子元素时，默认联系我们为active状态
      //   // subItem: [
      //   //   {
      //   //     name: "sub0",
      //   //     className: "item-sub",
      //   //     children: {
      //   //       className: "item-sub-item",
      //   //       children: [
      //   //         {
      //   //           name: "image0",
      //   //           className: "item-image",
      //   //           children: "https://s1.imagehub.cc/images/2021/11/26/tx.png",
      //   //         },
      //   //         {
      //   //           name: "title",
      //   //           className: "item-title",
      //   //           children: "猫服QQ群",
      //   //         },
      //   //         {
      //   //           name: "content",
      //   //           className: "item-content",
      //   //           children: "643531871",
      //   //         },
      //   //       ],
      //   //     },
      //   //   },
      //   //   {
      //   //     name: "sub1",
      //   //     className: "item-sub",
      //   //     children: {
      //   //       className: "item-sub-item",
      //   //       children: [
      //   //         {
      //   //           name: "image0",
      //   //           className: "item-image",
      //   //           children:
      //   //             "https://s1.imagehub.cc/images/2021/11/26/minecraft.png",
      //   //         },
      //   //         {
      //   //           name: "title",
      //   //           className: "item-title",
      //   //           children: "官方宣传帖",
      //   //         },
      //   //         {
      //   //           name: "content",
      //   //           className: "item-content",
      //   //           children: "MCBBS指路=>",
      //   //         },
      //   //       ],
      //   //     },
      //   //   },
      //   // ],
      //   //#endregion
      // },
      {
        name: "item4",
        className: "header4-item",
        children: {
          href: "/register",
          children: [{ children: "注册账号", name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner10DataSource = {
  wrapper: { className: "banner1" },
  BannerAnim: {
    children: [
      {
        name: "elem0",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg0 kwbg8e31xdq-editor_css" },
        title: {
          className: "banner1-title",
          children: "https://s1.imagehub.cc/images/2021/11/30/NEKOMC5.png",
        },
        content: {
          className: "banner1-content",
          children: "一个由爱好者们搭建的我的世界公益服",
        },
        content_added: {
          className: "banner1-content_added",
          children: tip_words,
        },
        button: {
          className: "banner1-button",
          children: btn_,
          href: "#download",
        },
      },
      {
        name: "elem1",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg1" },
        title: {
          className: "banner1-title",
          children: "https://s1.imagehub.cc/images/2021/11/30/NEKOMC5.png",
        },
        content: {
          className: "banner1-content",
          children: "猫咪即是正义！",
        },
        content_added: {
          className: "banner1-content_added",
          children: tip_words,
        },
        button: { className: "banner1-button", children: btn_ },
        href: "#download",
      },
      {
        name: "elem2",
        BannerElement: { className: "banner-user-elem" },
        textWrapper: { className: "banner1-text-wrapper" },
        bg: { className: "bg bg2" },
        title: {
          className: "banner1-title",
          children: "https://s1.imagehub.cc/images/2021/11/30/NEKOMC5.png",
        },
        content: {
          className: "banner1-content",
          children: "带上伙伴在猫服探索远航",
        },
        content_added: {
          className: "banner1-content_added",
          children: tip_words,
        },
        button: {
          className: "banner1-button",
          children: btn_,
          href: "#download",
        },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [{ name: "title", children: "玩法特色" }],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: "https://s1.imagehub.cc/images/2021/11/24/kehuduan.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "独立客户端",
            },
            {
              name: "content",
              children:
                "服务器专用开源独立客户端，别具一格的外观，自助更新游戏版本，极速登录快人一步",
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://s1.imagehub.cc/images/2021/11/24/minecraft.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "原版生存",
            },
            {
              name: "content",
              children:
                "7*24专业生存服务器，随机传送，圈地建筑，多人协助生存，砍树挖矿辅助，原汁原味生存世界，多种特性加持不乏趣味",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://s1.imagehub.cc/images/2021/11/24/jingjijiangli.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "多人竞技",
            },
            {
              name: "content",
              children:
                "未来将会加入，捉迷藏，起床战争，群雄争霸，饥饿游戏，绝境求生等等特色的小游戏正在制作当中。敬请期待！",
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      { name: "title", children: "游戏实况", className: "title-h1" },
      {
        name: "content",
        className: "title-content",
        children: "在猫服创造你独一无二的世界",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content " },
          img: {
            // 加id来给snap加background img 通过css的形式加入，content5.less
            id: "snap1",
            className: "mc-snap",
            children: "",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            id: "snap2",
            className: "mc-snap",
            children: "",
          },
          content: { children: "Ant Motion" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            id: "snap3",
            className: "mc-snap",
            children: "",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            id: "snap4",
            className: "mc-snap",
            children: "",
          },
          content: { children: "Ant Motion" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            id: "snap5",
            className: "mc-snap",
            children: "",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            id: "snap6",
            className: "mc-snap",
            children: "",
          },
          content: { children: "Ant Motion" },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            id: "snap7",
            className: "mc-snap",
            children: "",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            id: "snap8",
            className: "mc-snap",
            children: "",
          },
          content: { children: "Ant Motion" },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: "技术支持与服务保障",
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: "却道，此心安处是吾乡。 ",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: "https://s1.imagehub.cc/images/2021/11/25/5_10.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "非盈利公益服" },
          content: {
            className: "content3-content",
            children: "做非盈利模式的公益服，坚持用爱发电！",
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://s1.imagehub.cc/images/2021/11/25/67b385b5e983a08bc593aa72163f280f.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "良好游戏环境" },
          content: {
            className: "content3-content",
            children: "全方位维护游戏环境，营造良好的游戏氛围，杜绝不良行为。",
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://s1.imagehub.cc/images/2021/11/25/dfb478b74c3f55c76cfba0abe4132296.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "优质服务器" },
          content: {
            className: "content3-content",
            children: "高性能服务器7*24不间断运行，实时监控实例状态。",
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://s1.imagehub.cc/images/2021/11/25/ce967c8ff7456a896eacb1b287a2fd9e.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "反外挂" },
          content: {
            className: "content3-content",
            children:
              "搭载AntiCheat反外挂系统，对开挂用户永久封禁，让挂佬无处遁形。",
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://s1.imagehub.cc/images/2021/11/25/1b4b51c3975724ab94acbc877d14ce15.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "反馈支持" },
          content: {
            className: "content3-content",
            children: "多条反馈通道畅通，欢迎每一位玩家提出的宝贵意见。",
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://s1.imagehub.cc/images/2021/11/25/d9bf00266f272e56ff65ae9034393601.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "更新保障" },
          content: {
            className: "content3-content",
            children:
              "我们的服务器还在雏形阶段，无论是官方的版本更新还是更多游戏玩法的更新，我们都将持续跟进..",
          },
        },
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: "home-page-wrapper content11-wrapper",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      // title改用mytitle的原因：为了自定义样式，原name被强制高优先级绑定了黑色样式，我要改成白色
      {
        name: "myTitle",
        children: "丰富的游戏特色等你体验",
        className: " title-col title-size ",
      },
      {
        name: "content",
        children: "还在等什么，心动不如行动",
        className: "title-content title-col",
      },
      {
        name: "content2",
        children: "",
        className: "title-content",
      },
    ],
  },
  button: {
    className: "",
    children: {
      a: {
        className: "button",
        target: "_blank",
        href: "https://www.aliyundrive.com/s/ziM3qawp7wL",
        children: "客户端下载",
      },
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 9,
        className: "block",
        title: {
          className: "logo",
          children: "https://s1.imagehub.cc/images/2021/11/30/NEKOMC.png",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: "welcome to nekomc,have a good time！",
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 5,
        className: "block",
        title: { children: "指北" },
        childWrapper: {
          children: [
            {
              target: "_blank",
              name: "link0",
              href: "https://wiki.nekomc.fun/page/display?document_id=3",
              children: "更新记录",
            },
            {
              target: "_blank",
              name: "link1",
              href: "https://wiki.nekomc.fun/page/display?document_id=4",
              children: "游戏文档",
            },
            {
              target: "_blank",
              name: "link2",
              href: "https://wiki.nekomc.fun/page/display?document_id=5",
              children: "快速入门",
            },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 5,
        className: "block",
        title: { children: "关于" },
        childWrapper: {
          children: [
            { href: "/time", name: "link0", children: "周目手札" },
            { href: "/team", name: "link0", children: "制作团队" },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 5,
        className: "block",
        title: { children: "更多" },
        childWrapper: {
          children: [{ href: "/donate", name: "link1", children: "捐赠" }],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <div>
        <span>
          ©2021 by <a href="https://www.nekomc.fun">Neko MC</a>
          &nbsp;&nbsp;&nbsp;&nbsp; 辽ICP备19006288号-2
        </span>
      </div>
    ),
  },
};
