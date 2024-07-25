const { BuildBox, Turtle } = require('./index.js'); // test
// const { BuildBox, Turtle } = require('voxelamming-node');

(async () => {
  const roomName = "1000";
  const buildBox = new BuildBox(roomName);

  buildBox.setBoxSize(0.3);
  buildBox.setBuildInterval(0.01);
  buildBox.setCommand('liteRender')
  const t = new Turtle(buildBox);

  const colors = [
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [0.5, 0, 0, 1],
    [0, 0.5, 0, 1],
    [0, 0, 0.5, 1],
    [0.5, 0.5, 0, 1],
    [0, 0.5, 0.5, 1],
    [0.5, 0, 0.5, 1],
    [0.5, 0.5, 0.5, 1],
  ];

  for (let j = 0; j < colors.length; j++) {
    const color = colors[j];
    const polarPhi = (j * 180) / colors.length;
    t.reset();
    t.setColor(...color);
    t.left(polarPhi);

    for (let i = 0; i < 60; i++) {
      t.forward(4);
      t.up(6);
    }
  }

  await buildBox.sendData();
  console.log('send data done')
})().catch(error => {
  console.error(error);
});
