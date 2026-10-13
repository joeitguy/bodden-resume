const fs = require('fs');

['Resume', 'CoverLetter', 'SkillsSummary', 'ReadmePage', 'IndexPage', 'ContactForm', 'Layout', 'PrtButton'].forEach(name => {
  console.log('\n============================== ' + name + ' ==============================');
  const txt = fs.readFileSync('/tmp/comp_' + name + '.txt', 'utf8');
  
  // Extract all string literals
  const matches = txt.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
  const list = [];
  for (const m of matches) {
    try {
      const val = JSON.parse(m);
      if (val && typeof val === 'string' && val.length >= 4) {
        if (!val.includes('node_modules') && !val.includes('webpack') && !val.includes('.css') && !val.includes('/app/src') && !val.startsWith('_') && !val.includes('jsxDEV') && !val.includes('RefreshUtils')) {
          list.push(val);
        }
      }
    } catch (e) {}
  }
  console.log(Array.from(new Set(list)).join('\n'));
});
