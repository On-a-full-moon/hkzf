const CityList = (props) => {
  document.title = props.route.meta.title;
  return (
    <h2>我是CityList组件</h2>
  )
}

export default CityList;