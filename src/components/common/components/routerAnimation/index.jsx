import routerTransition from './routerTransition';
import animationManager from './animationManager';

function routerAnimation(WrappedComponent) {
  return routerTransition(animationManager(WrappedComponent));
}

export default routerAnimation;
