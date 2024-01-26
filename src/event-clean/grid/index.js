import data from '//cdn.huangxin.fun/static-app/gs-grid-data.js'

// 随机生成色值
const randomColor = () => {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')
}

const map = new T.Map('map');
map.centerAndZoom(new T.LngLat(120.141503,30.319126), 15);

drawPolygons()
bindSearch()

function drawPolygons() {
  data.forEach(item => {
    const { attributes, geometry } = item
    const { name } = attributes
    const { rings } = geometry
    const fillColor = randomColor()
    rings.forEach((ring) => {
      const bounds = ring.map(position => {
        return new T.LngLat(position[0], position[1])
      })
      const polygon = new T.Polygon(bounds, {
        color: randomColor(),
        weight: 2,
        opacity: 0.5,
        fillColor,
        fillOpacity: 0.5
      })
      map.addOverLay(polygon)
      polygon.addEventListener('click', () => {
        alert(name)
      })
    })

  })
}

const marker = new T.Marker()
function locatePosition() {
  const input = document.querySelector('.location')
  const value = input.value.trim()
  if (!value) {
    return alert('输入不能为空')
  }
  // 校验坐标值为经纬度，用中文或英文逗号分隔
  const reg = /^(\d+\.?\d*)(,|，)(\d+\.?\d*)$/
  if (!reg.test(value)) {
    return alert('输入格式错误')
  }
  const [lng, lat] = value.split(/,|，/)
  const lnglat = new T.LngLat(lng, lat)
  marker.setLngLat(lnglat)
  map.addOverLay(marker)
  map.panTo(lnglat)
}

function bindSearch() {
  const searchBtn = document.querySelector('.search')
  searchBtn.addEventListener('click', locatePosition)
  const input = document.querySelector('.location')
  // 绑定回车
  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      locatePosition()
    }
  })
}

