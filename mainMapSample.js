const { Voxelamming, getMapDataFromCSV, getBoxColor } = require('./index.js'); // test
// const { Voxelamming, getMapDataFromCSV, getBoxColor } = require('voxelamming-node');

(async () => {
  const roomName = "1000";
  const vox = new Voxelamming(roomName);

  vox.setBoxSize(0.5);
  vox.setBuildInterval(0.001);
  vox.setCommand('liteRender');

  const columnNum = 257;
  const rowNum = 257;
  const csvFile = 'map_file/map_38_138_100km.csv';
  const heightScale = 100;
  const highColor = [0.5, 0, 0];
  const lowColor = [0, 1, 0];
  const mapData = getMapDataFromCSV(csvFile, heightScale);
  const boxes = mapData.boxes;
  const maxHeight = mapData.maxHeight;
  // const skip = 1;  // high power device
  const skip = 2;  // normal device
  // const skip = 4;  // low power device

  for (let j = 0; j < rowNum / skip; j++) {
    for (let i = 0; i < columnNum / skip; i++) {
      let x = i - Math.floor(columnNum / (skip * 2));
      let z = j - Math.floor(rowNum / (skip * 2));
      const y = boxes[j * skip][i * skip];
      const [r, g, b] = getBoxColor(y, maxHeight, highColor, lowColor);

      if (y >= 0) {
        vox.createBox(x, y, z, r, g, b, 1);
      }
    }
  }

  await vox.sendData("mainMapSample");
})().catch(error => {
  console.error(error);
});
