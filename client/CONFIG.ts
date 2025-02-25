/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

import { setConfig } from './index.js';

setConfig({
  baseURI: import.meta.url,
  protocol: {
    test: './',
    import: 'import/',
    jsx: 'render/jsx/',
    entity: 'entity/',
    injection: 'injector/',
  },
});
