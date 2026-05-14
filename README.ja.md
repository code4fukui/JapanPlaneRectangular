# Japan Plane Rectangular

日本の平面直角座標（Tokyo/JGD2000/JGD2011）をWGS84の緯度経度に変換するライブラリです。

## 機能
- 日本の各種測地系の平面直角座標をWGS84の緯度経度に変換
- 日本全国の19の座標系（系番号）をサポート

## 必要条件
- [proj4js](https://github.com/code4fukui/proj4js)

## 使い方
```js
import jpr from "https://code4fukui.github.io/JapanPlaneRectangular/src/jpr.js";

console.log(jpr.toWGS84LngLat([-2862, 29086], 1, 'Tokyo'))
// [129.46702893433056, 33.265588768472014]
```

## API

### `@toWGS84LngLat(yx, pointSystemNumber, pointSystemVer)`

```text
@param {Array} yx 日本の平面直角座標
@param {Number} pointSystemNumber 系番号 [1-9/10-13/14-19]
@param {String} pointSystemVer 測地系 [Tokyo/JGD2000/JGD2011]
@return {Array}
@config {Number} WGS84: lng
@config {Number} WGS84: lat
```

日本の過去の各種測地系（平面直角座標）をWGS84の緯度経度に変換します。

## ライセンス
Apache License 2.0
