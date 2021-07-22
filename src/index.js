import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/fonts/iconfont.css'
import './index.css';


// 配置路由
import { HashRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import routes from "./routes/routes"

ReactDOM.render(
  <HashRouter>
    {renderRoutes(routes)}
  </HashRouter >,
  document.getElementById('root')
);