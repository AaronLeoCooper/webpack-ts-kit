import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { stub } from 'sinon';

import { conf } from './dev';

const {
  IMPORTANT
} = conf;

@suite('dev')
default class {

  @test
  conf () {
    assert.equal(IMPORTANT, 'development things', 'contains correct value');
  }

}
