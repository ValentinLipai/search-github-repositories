import { UIRouterReact } from '@uirouter/react/lib/core';

// the config function takes the router
// instance as argument. it lets you manually
// configure the router
export default function config(router: UIRouterReact) {
  router.urlService.rules.initial({ state: 'home' });
  router.urlService.rules.otherwise({ state: 'home' });
  // Setup the state visualizer
}
