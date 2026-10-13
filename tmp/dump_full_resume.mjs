import fs from 'fs';

function printAllText(filename) {
  console.log('\n\n==================== FULL TEXT: ' + filename + ' ====================');
  const code = fs.readFileSync('/tmp/' + filename, 'utf8');
  // Match string literals
  const matches = code.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
  const items = [];
  for (const m of matches) {
    try {
      const v = JSON.parse(m);
      if (typeof v === 'string' && v.trim().length > 0) {
        if (!v.includes('node_modules') && !v.includes('webpack') && !v.includes('.css') && !v.includes('/app/src') && !v.startsWith('_') && !v.includes('RefreshUtils') && !v.includes('jsxDEV')) {
          items.push(v);
        }
      }
    } catch(e) {}
  }
  console.log(items.join('\n'));
}

printAllText('extracted_Resume.js');
printAllText('extracted_SkillsSummary.js');
printAllText('extracted_IndexPage.js');
