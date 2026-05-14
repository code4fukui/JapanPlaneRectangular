# Japan Plane Rectangular

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A library to convert Japan's plane rectangular coordinates (Tokyo/JGD2000/JGD2011) to WGS84 latitude and longitude.

## Features
- Convert plane rectangular coordinates of various Japanese coordinate systems to WGS84 latitude and longitude
- Supports 19 different coordinate system zones across Japan

## Requirements
- [proj4js](https://github.com/code4fukui/proj4js)

## Usage
```js
import jpr from "https://code4fukui.github.io/JapanPlaneRectangular/src/jpr.js";

console.log(jpr.toWGS84LngLat([-2862, 29086], 1, 'Tokyo'))
// [129.46702893433056, 33.265588768472014]
```

## API

### `@toWGS84LngLat(yx, pointSystemNumber, pointSystemVer)`

```text
@param {Array} yx Japan's plane rectangular coordinates
@param {Number} pointSystemNumber Zone number [1-9/10-13/14-19]
@param {String} pointSystemVer Coordinate system [Tokyo/JGD2000/JGD2011]
@return {Array}
@config {Number} WGS84: lng
@config {Number} WGS84: lat
```

Converts various historical Japanese coordinate systems (plane rectangular coordinates) to WGS84 latitude and longitude.

## License
Apache License 2.0