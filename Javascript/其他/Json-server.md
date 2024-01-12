# Json-server

[https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

## 安装

```node
npm install -g json-server
```

## 创建一个 db.json 文件

```json
{
  "users": [
    {
      "id": 1,
      "dishName": "辣椒炒肉",
      "price": 25
    },
    {
      "id": 2,
      "dishName": "鱼香肉丝",
      "price": 20
    },
    {
      "id": 3,
      "dishName": "宫保鸡丁",
      "price": 21
    },
    {
      "id": 3,
      "dishName": "青椒肉丝",
      "price": 25
    }
  ]
}
```

## 启动 json-server

```JavaScript
json-server db.json
```

## 获取数据

```JavaScript
// 获取数据
function getDataList() {
  fetch('http://localhost:4000/menus')
    .then(res => res.json())
    .then(json => {
    console.log("getDataList -> json", json)
    })
    .catch(err => {});
}
```

##

添加

```JavaScript
function addMenus(menusData) {
  fetch('http://localhost:4000/menus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(menusData)
  }).then(res => {
  });
}

addMenus({
  id: 1,
  dishName,
  price
});
```

## 删除

```JavaScript
function deleteMenus(id) {
  fetch(`http://localhost:4000/menus/${id}`, {
    method: 'delete'
  }).then(res => {
  });
}
```
