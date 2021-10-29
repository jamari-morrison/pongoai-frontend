import { Select } from './Select';
import { isConformant } from '../../common/isConformant';

describe('Select', () => {
  isConformant({
    Component: Select,
    displayName: 'Select',
    testOptions: {
      'make-styles-overrides-win': {
        callCount: 1,
      },
    } as any,
  });
});
