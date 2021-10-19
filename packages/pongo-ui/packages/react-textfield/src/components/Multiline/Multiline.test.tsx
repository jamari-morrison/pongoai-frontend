import { Multiline } from './Multiline';
import { isConformant } from '../../common/isConformant';

describe('Multiline', () => {
  isConformant({
    Component: Multiline,
    displayName: 'Multiline',
    testOptions: {
      'make-styles-overrides-win': {
        callCount: 1,
      },
    } as any,
  });
});
