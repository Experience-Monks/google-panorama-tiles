var panoramaTiles = require('./')
var test = require('tape')

test('normalizes tile data for Google Street View tiles', function (t) {
  var tiles = panoramaTiles(0)
  t.deepEqual(tiles.columns, 1)
  t.deepEqual(tiles.rows, 1)
  t.deepEqual(tiles.width, 416)
  t.deepEqual(tiles.height, 416)
  t.deepEqual(tiles.tileWidth, 512)
  t.deepEqual(tiles.tileHeight, 512)

  // test zoom level 1
  tiles = panoramaTiles(1)
  t.deepEqual(tiles.columns, 2)
  t.deepEqual(tiles.rows, 1)
  t.deepEqual(tiles.width, 832)
  t.deepEqual(tiles.height, 416)
  t.deepEqual(tiles.tileWidth, 512)
  t.deepEqual(tiles.tileHeight, 512)

  // test `result.tiles` information
  var tiles2 = panoramaTiles(1, {
    worldSize: { width: 9500, height: 4750 },
    tileSize: { width: 512, height: 512 }
  })
  t.deepEqual(tiles2, { columns: 2, height: 296, rows: 1, tileHeight: 512, tileWidth: 512, width: 593, })
  t.end()
})
