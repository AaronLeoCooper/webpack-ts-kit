import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { stub } from 'sinon';

import { app } from './index';

suite('app', () => {

  test('#feedMe()', () => {
    const log = stub(console, 'log');

    app.feedMe('test');

    assert.isTrue(log.calledWith('fed test !'), 'calls console.log with correct value');

    log.restore();
  });

  test('.shutUp()', () => {
    const log = stub(console, 'log');

    // app.shutUp();



    log.restore();
  });

});
