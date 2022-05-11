import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { worker } from './mocks/browser';
worker.start({
  serviceWorker: {
    // Points to the custom location of the Service Worker file.
    url: 'https://github-m3p2jr--4200.local.webcontainer.io/mockServiceWorker.js',
  },
});

navigator.serviceWorker
  .register(
    'https://github-m3p2jr--4200.local.webcontainer.io/mockServiceWorker.js'
  )
  .then(console.log)
  .catch(console.error);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
