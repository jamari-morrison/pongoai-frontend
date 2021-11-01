import { Label } from './Label';
import { isConformant } from '../../common/isConformant';

describe('Label', () => {
  isConformant({
    Component: Label,
    displayName: 'Label',
  });
});
