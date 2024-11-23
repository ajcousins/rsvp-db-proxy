import { handler } from '.';

(async () => {
  try {
    await handler();
  } catch (error) {
    console.error('Error executing handler:', error);
  }
})();
