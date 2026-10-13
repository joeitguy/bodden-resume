import fs from 'fs';

const bundle = fs.readFileSync('/tmp/bundle.js', 'utf8');

// The bundle contains lines like var _jsxFileName = "/app/src/components/...
const regex = /var _jsxFileName = "\/app\/src\/(?:components\/)?([A-Za-z0-9_\/]+)\.jsx?";/g;
let m;
const files = [];
while ((m = regex.exec(bundle)) !== null) {
  files.push({ name: m[1], pos: m.index });
}

console.log('Detected files:', files);

for (let i = 0; i < files.length; i++) {
  const current = files[i];
  const nextPos = (i + 1 < files.length) ? files[i + 1].pos : current.pos + 30000;
  // Let's grab the code around current.pos
  // Find function start before current.pos
  const sliceStart = Math.max(0, current.pos - 500);
  const sliceEnd = Math.min(bundle.length, nextPos - 50);
  const slice = bundle.substring(sliceStart, sliceEnd);
  
  fs.writeFileSync(`/tmp/extracted_${current.name.replace(/\//g, '_')}.js`, slice);
  console.log(`Saved /tmp/extracted_${current.name.replace(/\//g, '_')}.js (${slice.length} chars)`);
}
