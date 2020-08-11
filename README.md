# eleBlog：一款简洁明快的博客园主题

[主题首页](https://www.cnblogs.com/oceans/p/ele.html)

## 项目目录介绍

运行如下命令得到文件树
```shell script
npm install -g tree-node-cli
treee -L 3 -I "node_modules|.idea|.vscode|blogs|.git" -a --dirs-first > out.txt
```

```sh
cnblog
├── build
│   ├── delete.js
│   ├── secret.js
│   └── upload-static.js
├── dist
├── src
│   ├── components
│   │   ├── download
│   │   └── index.js
│   ├── config # 用户自定义参数如轮播图地址
│   │   ├── home.js
│   │   └── sidebar-notify.js
│   ├── init
│   │   ├── fix-problem.js 
│   │   ├── index.js
│   │   ├── init-app.js
│   │   ├── init-blog.js
│   │   ├── init-highlight-code.js
│   │   ├── init-remove.js
│   │   └── init-tag-h.js
│   ├── layout # 按照页面位置，易于维护
│   │   ├── article
│   │   ├── comment
│   │   ├── float-button
│   │   ├── home
│   │   ├── nav
│   │   ├── share
│   │   ├── sidebar
│   │   └── index.js
│   ├── scss 
│   │   ├── _abandon.scss
│   │   ├── _fix.scss
│   │   ├── _icon.scss
│   │   ├── _media.scss
│   │   ├── _oceans-common.scss
│   │   ├── _other.scss
│   │   ├── _parts.scss
│   │   ├── _replace.scss
│   │   ├── _scroll.scss
│   │   ├── _transition.scss
│   │   └── _variable.scss
│   ├── static
│   │   ├── lib
│   │   ├── lint
│   │   └── theme
│   ├── store
│   │   ├── global-event-handler.js
│   │   ├── global-function.js
│   │   ├── global-use-vue.js
│   │   ├── global-variables.js
│   │   ├── index.js
│   │   └── jquery-function-extend.js
│   ├── upload
│   │   └── footer.html
│   ├── index.js
│   └── style.scss
├── test
├── package-lock.json
├── package.json
├── README.md
└── webpack.config.js
```

## 项目进展

本主题功能已经实现，但代码仍需继续完善。下一步的工作如下
1. 将`src/scss`中的内容重构到`scr/layout`文件夹中
2. `init`文件夹和`store`文件夹合并，重新规划文件目录
