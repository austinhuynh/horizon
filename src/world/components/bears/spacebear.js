import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBears() {
  const loader = new GLTFLoader();

  /*
  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('models/low_poly_stylized_planet.glb'),
  ]);*/

  const BearData = await Promise.all([
    loader.loadAsync('models/low_poly_stylized_planet.glb')
  ]);

  console.log('I am floating in space!', BearData);

  const bear = setupModel(BearData);
  bear.position.set(0, 0, 2.5);

  return {
    bear
  };
}

export { loadBears };