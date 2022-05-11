import { setupWorker } from 'msw';
import { handlers } from './handlers';
console.log('something');
export const worker = setupWorker(...handlers);
