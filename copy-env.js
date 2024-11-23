const fs = require('fs-extra');
const path = require('path');

const sourceEnvPath = path.join(__dirname, '.env');
const targetEnvPath = path.join(__dirname, 'dist', '.env');

fs.copy(sourceEnvPath, targetEnvPath)
  .then(() => console.log('.env copied to dist'))
  .catch((err) => console.error('Failed to copy.env:', err));
