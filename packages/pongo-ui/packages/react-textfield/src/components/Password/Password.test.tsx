import { Password } from './Password';
import { isConformant } from '../../common/isConformant';

describe('Password', () => {
  isConformant({
    Component: Password,
    displayName: 'Password',
    testOptions: {
      'make-styles-overrides-win': {
        callCount: 1,
      },
    } as any,
  });
});
