import React from "react";
import { renderRoutes } from "react-router-config"

// 渲染tabBar
// 导入tabbar
import { TabBar } from 'antd-mobile';

class App extends React.Component {

  // 设置状态
  state = {
    // 无论我们是点击也好 还是直接输入地址也好，会根据地址 让其中一个tabbar选中
    selectedTab: this.props.history.location.pathname,
    tarbar: [{
      title: "首页",
      icon: 'icon-ind',
      path: "/home"
    },
    {
      title: "找房",
      icon: 'icon-findHouse',
      path: "/findhouse"
    },
    {
      title: "资讯",
      icon: 'icon-infom',
      path: "/news"
    },
    {
      title: "我的",
      icon: 'icon-my',
      path: "/profile"
    }]
  }

  // 网络请求
  componentDidMount() { }

  // pathname数据进行了更新  我们有没有监听这个数据的更新
  // 需要添加条件判断
  componentDidUpdate(prevProps) {
    // 需要添加条件判断(如果上一次的pathname和这次的pathname不一样就要重新赋值 否则 不执行)
    const curProps = this.props.location.pathname;
    const preProps = prevProps.location.pathname;


    // 如果这两个数据不一样 那么就打印 11111
    if (curProps !== preProps) {
      console.log(1111);
      this.setState({
        selectedTab: curProps,
      })
    }
  }

  render() {
    return (
      <div className="App" >
        {/* 渲染出来的内容 */}
        {renderRoutes(this.props.route.children)}

        {/* tabBar */}
        <div className="tabbar">
          <TabBar tintColor="#21b97a">
            {
              this.state.tarbar.map(item => (
                <TabBar.Item
                  title={item.title}
                  key={item.path}
                  selected={this.state.selectedTab === item.path}
                  icon={<i className={`iconfont ${item.icon}`}></i>}
                  selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                  onPress={() => { this.props.history.push(item.path); }}
                ></TabBar.Item>
              ))
            }
          </TabBar>
        </div>
      </div >

    );
  }
}

export default App;

