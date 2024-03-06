import { data } from './disData.js'
import { wgs84togcj02, gcj02towgs84 } from './transform.js'

function copyToClipboard(text) {
  var tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = text;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  toast(`已复制复制: ${text}`)
}

// 提示，1s后小时
function toast(text) {
  const div = document.createElement('div')
  div.style.position = 'fixed'
  div.style.top = '20px'
  div.style.left = '50%'
  div.style.background = '#fff'
  div.style.border = '1px solid #000'
  div.style.padding = '4px 6px'

  div.innerText = text
  document.body.appendChild(div)
  setTimeout(() => {
    div.remove()
  }, 1000)
}

const map = new AMap.Map("container", {
  viewMode: '2D', //默认使用 2D 模式
  zoom: 14, //地图级别
  center: [120.141846, 30.318607], //地图中心点
});

const marker = new AMap.Marker({
  position: [120.141846, 30.318607],
  offset: new AMap.Pixel(-10, -30),
  icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png'
})

marker.setMap(map)

const handleClick = e => {
  console.log(e.lnglat.toArray())
  const lnglag = e.lnglat.toArray()
  marker.setPosition(lnglag)
  let wgs84 = gcj02towgs84(lnglag)
  wgs84 = [Number(wgs84[0]).toFixed(6), Number(wgs84[1]).toFixed(6)]
  // 复制到剪切板
  copyToClipboard(`${wgs84[0]},${wgs84[1]}`)
}

map.on('click', handleClick)

// 绘制边界
data.forEach(area => {
  const { coordinateList, centralPointList: center, districtName: name } = area
  var text = new AMap.Text({
    text: name,
    anchor: 'center', // 设置文本标记锚点
    style: {
      // 'padding': '.75rem 1.25rem',
      // 'margin-bottom': '1rem',
      // 'border-radius': '.25rem',
      // 'background-color': 'white',
      // 'width': '15rem',
      // 'border-width': 0,
      // 'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
      // 'text-align': 'center',
      // 'font-size': '20px',
      // 'color': 'blue'
    },
    position: wgs84togcj02(center)
  });

  text.setMap(map);

  const path = coordinateList.map(wgs84togcj02)
  const polygon = new AMap.Polygon({
    path: path,
    strokeColor: "#FF33FF",
    strokeOpacity: 0.2,
    strokeWeight: 3,
    fillColor: "#1791fc",
    fillOpacity: 0.35
  })
  polygon.on('click', handleClick)

  polygon.setMap(map)
});

