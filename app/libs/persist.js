import makeFinalStore from 'alt-utils/lib/makeFinalStore';
import SquareActions from '../actions/SquareActions';

export default function(alt, storage, storeName) {
  const finalStore = makeFinalStore(alt);
  try {
    alt.bootstrap(storage.get(storeName));
    SquareActions.continueHidingCircle();
  } catch (e) {
    console.error('Failed to bootstrap data', e);
  }
  finalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  });
}
