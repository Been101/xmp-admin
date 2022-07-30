初始化
commitizen init cz-conventional-changelog --save --save-exact
husky
```json
"husky": {
  "hooks": {
    "commit-msg": "validate-commit-msg"
  }
}
```

支持 ts

```shell
yarn add ts-loader typescript source-map-loader
```

添加 react

```shell
yarn add react react-dom react-router-dom
```

添加 types
```shell
yarn add @types/react @types/react-dom @types/react-router-dom
```

配置 webpack

```shell
yarn add webpack webpack-cli webpack-dev-server hoist-non-react-static html-webpack-plugin 
```
支持 redux

```shell
yarn add redux react-redux  redux-thunk redux-logger  -S

```
```shell
yarn add @types/react-redux @types/redux-logger  -D

```

支持 react-router

```shell
yarn add connected-react-router -S
```

支持 eslint

```shell
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```
支持单元测试
```shell
yarn add jest @types/jest ts-jest -D  
npx ts-jext config:init
```
支持 持续集成
添加 .travis.yml 文件
