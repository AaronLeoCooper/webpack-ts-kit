import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { stub } from 'sinon';

import { conf } from './prod';

const {
  IMPORTANT
} = conf;

@suite('prod')
default class {

  @test
  conf () {
    assert.equal(IMPORTANT, 'production things', 'contains correct value');
  }

}
