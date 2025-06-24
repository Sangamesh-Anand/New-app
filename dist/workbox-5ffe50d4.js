import { precacheAndRoute, registerRoute, NavigationRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { createHandlerBoundToURL } from 'workbox-precaching';
import { NavigationRoute } from 'workbox-routing';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler);

registerRoute(navigationRoute);
