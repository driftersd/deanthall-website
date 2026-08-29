const { readFileSync } = require('node:fs');
const path = require('node:path');

const serverSource = readFileSync(path.resolve(__dirname, '../server/index.ts'), 'utf8');

test('production server serves the Vite output directory', () => {
  expect(serverSource).toContain('const staticPath = path.resolve(__dirname);');
  expect(serverSource).toContain('res.sendFile(path.join(staticPath, "index.html"));');
  expect(serverSource).not.toContain('path.resolve(__dirname, "public")');
});
