import { Redirect } from "react-router-dom"
/**
 * 配置路由
 * 
 * 
 */

// 1.导入组件
import Home from "../pages/Home/Home";
import CityList from "../pages/CityList/CityList";
import App from "../App";
import FindHouse from "../pages/FindHouse/FindHouse";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";

const routes = [{
  path: "/",
  component: App,
  children: [
    {
      path: "/",
      exact: true,
      render: () => (
        <Redirect to={"/home"} />
      )
    },
    // 首页
    {
      path: "/home",
      component: Home,
    },
    // 找房
    {
      path: '/findhouse',
      component: FindHouse
    },
    // 资讯
    {
      path: '/news',
      component: News
    },
    // 我的
    {
      path: '/profile',
      component: Profile
    }

  ]
}]



export default routes;