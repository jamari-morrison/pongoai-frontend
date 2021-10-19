import { Search } from './Search';
import { isConformant } from '../../common/isConformant';

describe('Search', () => {
  isConformant({
    Component: Search,
    displayName: 'Search',
    testOptions: {
      'make-styles-overrides-win': {
        callCount: 1,
      },
    } as any,
  });
});
