/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

import { injectEventHandler, markDirty, provideQrlExp } from './qwik.js';
import { GreeterComponent } from './Greeter_component.js';

/**
 * @fileoverview
 *
 */

/**
 * Handler for the `<input on:keyup="./Greeter/input_onKeyup?name=.target.value">`
 */
export default injectEventHandler(
  // We would like to inject `GreeterComponent` as `this`.
  GreeterComponent,
  // We would like to inject the `value` property of the `<input>` as `name`.
  // Given that: `<input on:keyup="./Greeter/input_onKeyup?name=.target.value">`
  // `provideQrlExp()` reads the `name` query parameter and then evaluates
  // `.target.value` with respect to the event resulting in the user input.
  provideQrlExp<string>('name'),
  function (this: GreeterComponent, name: string) {
    // Store the new `name` in the component's state.
    this.$state.name = name;

    // Mark the component as dirty for rendering.
    markDirty(this);
  }
);
