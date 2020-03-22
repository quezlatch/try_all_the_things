import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import Iac = require('../lib/iac-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Iac.IacStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
