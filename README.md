# google-panorama-tiles

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Normalizes tile data for Google Street View tiles, typically used for "quilting" or stitching it into a single equirectangular image.

Kudos to @thespite and [PanomNom.js](https://github.com/spite/PanomNom.js), which was used as reference here.

## Example

Here is an example using [google-panorama-by-location](https://github.com/Jam3/google-panorama-by-location) to get the StreetView data.

```js
var normalize = require('google-panorama-tiles')
var panorama = require('google-panorama-by-location')

var zoom = 1
var location = [ 51.50700703827454, -0.12791916931155356 ]
panorama(location, function (err, result) {
  if (err) throw err
  var data = normalize(zoom, result.tiles)
  
  // tile size
  console.log(data.tileWidth, data.tileHeight)
  
  // canvas size
  console.log(data.width, data.height)
})
```

## Usage

[![NPM](https://nodei.co/npm/google-panorama-tiles.png)](https://www.npmjs.com/package/google-panorama-tiles)

#### `data = normalize(zoom, [tiles])`

Gets StreetView tiling data from the given `zoom` level (0, 1, 2, etc) and optional `tiles` data. 

The `tiles` are the result of a `getPanoramaByLocation` or `getPanoramaById` call, and contain `{ tileSize, worldSize }` dimensions. 

If they are not specified, the resulting data will be approximated by assuming the panorama is a StreetView. However, passing `tiles` is recommended to support PhotoSphere imagery.

The returned data has the form:

```js
{
  columns: Number,
  rows: Number,
  tileWidth: Number,
  tileHeight: Number,
  width: Number,
  height: Number
}
```

## See Also

- [google-panorama-by-id](https://github.com/Jam3/google-panorama-by-id)
- [google-panorama-by-location](https://github.com/Jam3/google-panorama-by-location)
- [google-panorama-equirectangular](https://github.com/mattdesl/google-panorama-equirectangular)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/google-panorama-tiles/blob/master/LICENSE.md) for details.
