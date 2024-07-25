const { BuildBox } = require('./index.js'); // test
// const { BuildBox } = require('voxelamming-node');

(async () => {
  const roomName = '1000';
  const buildBox = new BuildBox(roomName);

  buildBox.setBoxSize(0.5);
  buildBox.setBuildInterval(0.01);

  for (let i = 0; i < 100; i++) {
    buildBox.createBox(-1, i, 0, 0, 1, 1);
    buildBox.createBox(0, i, 0, 1, 0, 0);
    buildBox.createBox(1, i, 0, 1, 1, 0);
    buildBox.createBox(2, i, 0, 0, 1, 1);
  }

  for (let i = 0; i < 50; i++) {
    buildBox.removeBox(0, i * 2, 0);
    buildBox.removeBox(1, i * 2 + 1, 0);
  }

  await buildBox.sendData("main");
  console.log('send data done')
})().catch(error => {
  console.error(error);
});
