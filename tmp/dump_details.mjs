import fs from 'fs';
import https from 'https';

https.get('https://joe-bodden-about-5929fb556633.herokuapp.com/static/js/bundle.js', (res) => {
  let bundle = '';
  res.on('data', chunk => bundle += chunk);
  res.on('end', () => {
    ['Resume', 'SkillsSummary', 'ReadmePage', 'IndexPage', 'Layout'].forEach(name => {
      console.log('\n============================== COMPONENT: ' + name + ' ==============================');
      const startTag = '"./src/components/' + name + '.jsx"';
      let idx = bundle.indexOf(startTag);
      if (idx !== -1) {
        // Find next module start
        let nextIdx = bundle.indexOf('/***/ "./src/', idx + 50);
        if (nextIdx === -1) nextIdx = idx + 20000;
        const code = bundle.slice(idx, nextIdx);
        // Print all text strings inside jsxDEV or plain strings
        const matches = code.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
        const unique = [];
        for (const m of matches) {
          try {
            const val = JSON.parse(m);
            if (val && typeof val === 'string' && val.length >= 2 && !val.includes('node_modules') && !val.includes('webpack') && !val.includes('.css') && !val.includes('/app/src') && !val.startsWith('_') && !val.includes('jsxDEV') && !val.includes('RefreshUtils')) {
              unique.push(val);
            }
          } catch(e) {}
        }
        console.log(Array.from(new Set(unique)).join('\n'));
      }
    });
  });
});
