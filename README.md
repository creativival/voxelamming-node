## voxelamming-node

This JavaScript package converts JavaScript code into JSON format and sends it to the Voxelamming app using WebSockets, allowing users to create 3D voxel models by writing JavaScript scripts.

## What's Voxelamming?

<p align="center"><img src="https://creativival.github.io/voxelamming/image/voxelamming_icon.png" alt="Voxelamming Logo" width="200"/></p>

Voxelamming is an AR programming learning app. Even programming beginners can learn programming visually and enjoyably. Voxelamming supports iPhones and iPads with iOS 16 or later, and Apple Vision Pro.

## Resources

* **Homepage:** https://creativival.github.io/voxelamming/index.en
* **Samples:** https://github.com/creativival/voxelamming/tree/main/sample/python

## Installation

```bash
npm install voxelamming
```

## Usage

```javascript
// main.mjs
import { Voxelamming } from 'voxelamming';

const roomName = '1000';
const vox = new Voxelamming(roomName);

vox.setBoxSize(0.5);
vox.setBuildInterval(0.01);

for (let i = 0; i < 100; i++) {
  vox.createBox(-1, i, 0, 0, 1, 1);
  vox.createBox(0, i, 0, 1, 0, 0);
  vox.createBox(1, i, 0, 1, 1, 0);
  vox.createBox(2, i, 0, 0, 1, 1);
}

for (let i = 0; i < 50; i++) {
  vox.removeBox(0, i * 2, 0);
  vox.removeBox(1, i * 2 + 1, 0);
}

await vox.sendData("main");
console.log('send data done')
```


This code snippet demonstrates a simple example where a red voxel is created at a specific location. You can use various functions provided by the `Voxelamming` class to build more complex models.

#### Method description

| Method name | Description | Arguments |
|---|---|---|
| `setRoomName(roomName)` | Sets the room name for communicating with the device. | `roomName`: Room name (string) |
| `setBoxSize(size)` | Sets the size of the voxel (default: 1.0). | `size`: Size (float) |
| `setBuildInterval(interval)` | Sets the placement interval of the voxels (default: 0.01 seconds). | `interval`: Interval (float) |
| `changeShape(shape)` | Changes the shape of the voxel. | `shape`: Shape ("box", "square", "plane") |
| `changeMaterial(isMetallic, roughness)` | Changes the material of the voxel. | `isMetallic`: Whether to make it metallic (boolean), `roughness`: Roughness (float) |
| `createBox(x, y, z, r, g, b, alpha)` | Places a voxel. | `x`, `y`, `z`: Position (float), `r`, `g`, `b`, `alpha`: Color (float, 0-1) |
| `createBox(x, y, z, texture)` | Places a voxel with texture. | `x`, `y`, `z`: Position (float), `texture`: Texture name (string) |
| `removeBox(x, y, z)` | Removes a voxel. | `x`, `y`, `z`: Position (float) |
| `writeSentence(sentence, x, y, z, r, g, b, alpha)` | Draws a string with voxels. | `sentence`: String (string), `x`, `y`, `z`: Position (float), `r`, `g`, `b`, `alpha`: Color (float, 0-1) |
| `setLight(x, y, z, r, g, b, alpha, intensity, interval, lightType)` | Places a light. | `x`, `y`, `z`: Position (float), `r`, `g`, `b`, `alpha`: Color (float, 0-1), `intensity`: Intensity (float), `interval`: Blinking interval (float), `lightType`: Type of light ("point", "spot", "directional") |
| `setCommand(command)` | Executes a command. | `command`: Command ("axis", "japaneseCastle", "float", "liteRender") |
| `drawLine(x1, y1, z1, x2, y2, z2, r, g, b, alpha)` | Draws a line between two points. | `x1`, `y1`, `z1`: Starting point (float), `x2`, `y2`, `z2`: Ending point (float), `r`, `g`, `b`, `alpha`: Color (float, 0-1) |
| `sendData(name)` | Sends voxel data to the device; if the name argument is set, the voxel data can be stored and reproduced as history. | |
| `clearData()` | Initializes voxel data. | |
| `translate(x, y, z, pitch, yaw, roll)` | Moves and rotates the coordinate system of the voxel. | `x`, `y`, `z`: Translation amount (float), `pitch`, `yaw`, `roll`: Rotation amount (float) |
| `animate(x, y, z, pitch, yaw, roll, scale, interval)` | Animates a voxel. | `x`, `y`, `z`: Translation amount (float), `pitch`, `yaw`, `roll`: Rotation amount (float), `scale`: Scale (float), `interval`: Interval (float) |
| `animateGlobal(x, y, z, pitch, yaw, roll, scale, interval)` | Animates all voxels. | `x`, `y`, `z`: Translation amount (float), `pitch`, `yaw`, `roll`: Rotation amount (float), `scale`: Scale (float), `interval`: Interval (float) |
| `pushMatrix()` | Saves the current coordinate system to the stack. | |
| `popMatrix()` | Restores the coordinate system from the stack. | |
| `frameIn()` | Starts recording a frame. | |
| `frameOut()` | Ends recording a frame. | |
| `setFrameFps(fps)` | Sets the frame rate (default: 2). | `fps`: Frame rate (int) |
| `setFrameRepeats(repeats)` | Sets the number of frame repetitions (default: 10). | `repeats`: Number of repetitions (int) |
| Game Method Name                                                                              | Description | Arguments                                                                                                                                                            |
| `setGameScreen(width, height, angle=90, r=1, g=1, b=0, alpha=0.5)`                | Sets the game screen size. | `width`, `height`: screen size (float), `angle`: angle (float), `r`, `g`, `b`, `alpha`: color (float, 0-1)                                                            |
| `setGameScore(score)`                                                                  | Sets the game score. | `score`: game score (int)                                                                                                                                            |
| `sendGameOver()`                                                                       | Triggers game over. |                                                                                                                                                                     |
| `sendGameClear()`                                                                  | Triggers game clear. |                                                                                                                                                                   |
| `createSprite(sprite_name, color_list, x, y, direction=90, scale=1, visible=True)`      | Creates a sprite. | `sprite_name`: sprite name (string), `color_list`: dot color data (string), `x`, `y`: position (float), `direction`: angle (float), `scale`: scale (float), `visible`: visibility (boolean) |
| `moveSprite(sprite_name, x, y, direction=90, scale=1, visible=True)`                    | Moves a sprite. | `sprite_name`: sprite name (string), `x`, `y`: position (float), `direction`: angle (float), `scale`: scale (float), `visible`: visibility (boolean)                                  |
| `moveSpriteClone(sprite_name, x, y, direction=90, scale=1,)`               | Moves a clone of the sprite. Can be executed multiple times and is used when creating multiple sprites. | `sprite_name`: Sprite name (string), `x`, `y`: Position (float), `direction`: Direction (float), `scale`: Scale (float)                                  |
| `displayDot(sprite_name, x, y, direction=90, scale=1)`               | Used to place multiple dots, such as bullets or particles. | `sprite_name`: Sprite name (string), `x`, `y`: Position (float), `direction`: Direction (float), `scale`: Scale (float)                                  |
| `displayText(sprite_name, x, y, direction=90, scale=1, is_vertical=True)`               | Displays text on the game screen. | `sprite_name`: Sprite name (string), `x`, `y`: Position (float), `direction`: Direction (float), `scale`: Scale (float), `is_vertical`: Vertical display (boolean)                                  |


## Notes

- Ensure that the Voxelamming app is running and connected to the same room name specified in your JavaScript script.


This library is under active development. More features and improvements are planned for future releases.

## License

[MIT License](https://github.com/creativival/voxelamming/blob/master/LICENSE)

## Author

creativival
