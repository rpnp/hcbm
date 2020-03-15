---
title: hcbm-front
date: 2020-3-15
tag: hcbm-front
version: 1.2.0
---

HCBM_FRONT
===

## 目录

* [介绍](##介绍)
* [使用](##使用)
* [项目目录](##项目目录)
* [Author](##Author)
* [Contributing](##Contributing)

## 使用

下面是关于本项目的使用说明

### 环境变量

* node.js: v10.x or v8.x(>= v8.10)

  > 关于node.js请参考: [https://nodejs.org/en/](https://nodejs.org/en/)

* yarn: 推荐使用yarn管理本项目

  > 执行如下命令全局安装yarn
  > ```
  > $ npm install --global yarn
  > ```
  >
  > 关于`yarn`请参考 [https://yarnpkg.com](https://yarnpkg.com)

* lerna: 用于管理具有多个`package`的`JavaScript`项目的工具。

  > A tool for managing JavaScript projects with multiple packages.
  > 执行如下命令全局安装
  > ```
  > $ npm install --global lerna
  > ```
  >
  > 关于`lerna`请参考[https://lernajs.io/](https://lernajs.io/)

* 开发工具: 推荐使用Visual Studio Code编辑器

  > Visual Studio Code推荐插件:
  > * Chinese (Simplified) Language Pack for Visual Studio Code
  > * Debugger for Chrome
  > * EditorConfig for VS Code
  > * ESLint
  > * GitLens — Git supercharged
  > * YAML

### 安装依赖

执行如下命令

```bash
$ yarn add hzero-front-runtime --registry=http://nexus.saas.hand-china.com/content/groups/hzero-npm-group/
# npm install hzero-front-runtime --registry=http://nexus.saas.hand-china.com/content/groups/hzero-npm-group/
```

> 可以执行如下命令可以跳过puppeteer安装过程中下载Chromium
>
> ```bash
> $ export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 #macos/linux
> # set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 #windows
> ```


### 下载/Clone本项目

**本项目依赖于`packages`,需要默认安装`HZero Front`才能执行如下操作**

### 初始化项目

执行如下命令

```shell
$ yarn --registry=http://nexus.saas.hand-china.com/content/groups/hzero-npm-group/
```

> 在开发模式下,可以执行如下命令可以跳过puppeteer安装过程中下载Chromium
>
> ```bash
> $ export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 #macos/linux
> # set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 #windows
> ```


若安装了`packages`,则执行如下命令

```
$ lerna bootstrap
```

`build dll`: 本项目开启`webpack dll`插件,所以在执行`启动/build`操作之前,`请务必执行如下命令`

```shell
$ yarn build:dll
```

`build:dll-dev`: 本项目在 开发时 必须 使用 `build:dll-dev` 以支持更多的错误提示

```shell
$ yarn build:dll-dev
```

### 使用子模块

若在项目中使用了 git submodule 进行子模块管理，需要在首次拉取代码后进行初始化操作。

```bash
$ git submodule update --init --recursive
```

### 启动项目/开发者模式

在执行完`build dll`操作之后,执行如下命令

```bash
$ yarn start
```

```bash
yarn start
```

* **start 会设置几个环境变量, 您可以改变他们来适应自己的项目**
* BASE_PATH: 部署在子目录时需要改变。 例如 部署在 /demo/ 下; 则该变量的值为 /demo/
* CLIENT_ID: 是hzero后端所需要的客户端参数
* BPM_HOST: 工作流的接口地址
* API_HOST: 请求接口的地址
* WEBSOCKET_HOST: websocket 地址

启动成功后,请访问如下地址即可

```url
http://localhost:8000
```

### 构建

在执行完`build dll`操作之后,执行如下命令即可构建用于生产环境的项目

`构建`需要使用`build dll`

```shell
$ yarn build
```

最终静态文件会生成至如下目录

```shell
/dist
```

**build 会设置几个环境变量, 您可以改变他们来适应自己的项目。**

变量名及含义如下表所示：

| 变量名           | 含义                                                         | 构建后需要替换 |
| ---------------- | ------------------------------------------------------------ | -------------- |
| BASE_PATH        | 部署在子目录时需要改变。 例如 部署在 /demo/ 下; 则该变量的值为 /demo/ | 是             |
| CLIENT_ID        | hzero 后端进行 OAUTH 认证所需要的客户端参数                  | 是             |
| BPM_HOST         | 工作流的接口地址                                             | 是             |
| API_HOST         | 请求接口的地址                                               | 是             |
| WEBSOCKET_HOST   | websocket 地址                                               | 是             |
| ESLINT           | 由于在提交的时候已经校验过了 所以这里不执行校验以提升打包速度 | 否             |
| PLATFORM_VERSION | 系统是OP版还是SAAS版                                         | 是             |

#### 替换操作

如果采用 jenkins 进行构建，则需要在 build 结束后手动执行 `./docker/enterpoint.sh` 进行变量替换，因而需要在脚本中填写实际的变量值。

而如果采用 gitlab CI 进行构建，这些变量的值配置于 `/charts/hzero-front/values.yaml` 内，在构建时会将这些变量设置到当前执行环境，在脚本执行时便可读取以进行替换。

### Nginx 配置

文件 `docker/default.conf` 为默认的项目 Nginx 配置文件，如需修改 Nginx 配置需要在此更改，在构建 Docker 镜像时，Dockerfile 中的指令会将该文件复制到 nginx 配置目录下。

由于基础镜像暂未开启 `gzip`，在本项目 Dockerfile 中存在指令来更改默认的 Nginx 配置文件，以使 gzip 生效，如下：

```shell
RUN sed -i 's/\#gzip/gzip/g' /etc/nginx/nginx.conf;
```

如需关闭 gzip，将该行注释即可。


## 项目目录

```shell
.
├── README.md
├── config
│   ├── alias.js
│   ├── compileBuildEnv.js
│   ├── compileStartEnv.js
│   ├── compileTestEnv.js
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── routers.js
│   ├── theme.js
│   ├── webpack.config.js
│   ├── webpack.dll-dev.config.js
│   ├── webpack.dll.config.js
│   └── webpackDevServer.config.js
├── jsconfig.json
├── mock
│   └── index.js
├── package.json
├── public
│   ├── assets
│   │   └── hzero-ui
│   ├── error.html
│   ├── favicon.ico
│   ├── favicon.png
│   ├── hzero-logo.svg
│   ├── hzero_logo_loading.svg
│   ├── images
│   │   ├── bells.svg
│   │   ├── browser-chrome.png
│   │   ├── browser-edge.jpeg
│   │   ├── browser-firefox.png
│   │   ├── browser-ie11.png
│   │   ├── browser.jpg
│   │   ├── ic-card-sample-number.svg
│   │   ├── ic-card-sample-project-list.svg
│   │   ├── ic-card-sample-report.svg
│   │   ├── ic-card-sample-sprint-overview.svg
│   │   ├── ic-card-sample-tasklist.svg
│   │   ├── icon-error.png
│   │   ├── illustrate-category.png
│   │   └── life-config-delete.png
│   ├── index.html
│   ├── lib
│   │   ├── es6-sham.min.js
│   │   ├── es6-shim.min.js
│   │   └── tinymce
│   ├── manifest.json
│   └── suggestBrowser.html
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── index.js
│   ├── index.less
│   ├── models
│   │   └── global.js
│   ├── router.js
│   ├── routes
│   │   └── index.js
│   ├── serviceWorker.js
│   ├── setupProxy.js
│   └── utils
│       ├── getModuleRouters.js.front-template
│       └── router.js
└── yarn.lock
```

## Author

@中台技术中心·HZero技术团队

## Contributing

### 使用与开发指引

[core-develop-guide](https://rdc.hand-china.com/gitlab/hzero/hzero-fe/tree/master/docs/antd-develop-guide)

### 发布

将本项目发布到`nexus npm`私有源仓库

#### 生成 `auth hash`

执行如下命令

```
echo -n 'username:password' | openssl base64
```

将生成的`auth hash`按照如下方式配置

```conf
email=yourname@hand-china.com
always-auth=true
_auth=yourbase64hashcode
```

执行如下命令将上面的配置加入到`node.js`全局环境变量配置文件`.npmrc`中

```bash
$ npm config edit
```

再执行如下命令发布即可

```bash
$ npm publish --registry http://nexus.saas.hand-china.com/content/repositories/hzero-ui/
```


### Git使用规范

#### Clone

```shell
git clone https://code.choerodon.com.cn/hzero-hzero/hzero-front-runtime.git
cd hzero-front-runtime
```

#### Git global setup

```shell
git config --global user.name "yourname"
git config --global user.email "youremail@hand-china.com"
```

#### Commit & push

```shell
git add yourfile
git commit -m "your commit message"
git push -u origin master
```

#### Commit guide

本项目采用如下规则

```shell
[操作][:][空格][commit内容]
```

`[commit内容]`请详细填写具体的文件新增/修改/删除操作过程

例如

```shell
fix: 修复查询功能bug
```

* 操作标识符

```shell
fix：修复bug
feat：更新/新增文件/新特性
modify：重命名
delete：删除文件
docs: 文档调整补充
```

patches:

```bash
$ git commit -a -m "fix(parsing): fixed a bug in our parser"
```

features:

```bash
$ git commit -a -m "feat(parser): we now have a parser \o/"
```

breaking changes:

```bash
$ git commit -a -m "feat(new-parser): introduces a new parsing library
BREAKING CHANGE: new library does not support foo-construct"
```
other changes:

You decide, e.g., docs, chore, etc.

```bash
$ git commit -a -m "docs: fixed up the docs a bit"
```
