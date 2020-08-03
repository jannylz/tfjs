// Copyright 2019 Google LLC. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// =============================================================================

import {setWasmPath} from '@tensorflow/tfjs-backend-wasm';
import * as tf from '@tensorflow/tfjs-core';

import wasmPath from '../node_modules/@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm.wasm';

async function run() {
  setWasmPath('' /* custom prefix */, {'tfjs-backend-wasm.wasm': wasmPath});
  await tf.setBackend('wasm');
  tf.add(5, 3).print();
}

run();
