import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { stub } from 'sinon';

import { app } from './index';

@suite('app')
default class {

  @test
  feedMe () {
    const actual = app.feedMe('test');

    assert.equal(actual, 'fed test !', 'calls console.log with correct value');
  }

  @test
  shutUpProxy () {
    const actual = app.shutUpProxy();

    assert.equal(actual, 'shutting up..', 'calls console.log with shutUp() value');
  }

}
