import fs from 'fs';
import https from 'https';

https.get('https://joe-bodden-about-5929fb556633.herokuapp.com/static/js/bundle.js', (res) => {
  let bundle = '';
  res.on('data', chunk => bundle += chunk);
  res.on('end', () => {
    // Find all module headers: /***/ "./src/components/...
    const targetModules = [
      './src/components/Resume.jsx',
      './src/components/SkillsSummary.jsx',
      './src/components/ReadmePage.jsx',
      './src/components/IndexPage.jsx',
      './src/components/ContactForm.jsx',
      './src/components/Layout.jsx',
      './src/components/NavButtons/NavButtons.jsx'
    ];

    targetModules.forEach(mod => {
      console.log('\n\n============================================================');
      console.log('MODULE: ' + mod);
      console.log('============================================================');
      const header = '/***/ "' + mod + '":';
      let idx = bundle.indexOf(header);
      if (idx === -1) {
        console.log('Header not found directly, searching for quotes...');
        idx = bundle.indexOf('"' + mod + '":');
      }
      if (idx !== -1) {
        // extract till next /***/ "./src/
        const nextIdx = bundle.indexOf('/***/ "./', idx + header.length);
        const moduleBody = bundle.substring(idx, nextIdx !== -1 ? nextIdx : idx + 35000);
        
        // Print all text strings from jsxDEV
        // e.g. children: "..." or children: ["...", ...]
        // Let's extract any string >= 3 chars that isn't internal webpack
        const strRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
        let m;
        const seen = new Set();
        while ((m = strRegex.exec(moduleBody)) !== null) {
          try {
            const parsed = JSON.parse(m[0]);
            if (typeof parsed === 'string' && parsed.length >= 3) {
              if (!parsed.includes('node_modules') && !parsed.includes('webpack') && !parsed.includes('.css') && !parsed.includes('/app/src') && !parsed.includes('RefreshUtils') && !parsed.includes('jsxDEV')) {
                seen.add(parsed);
              }
            }
          } catch(e) {}
        }
        console.log(Array.from(seen).join('\n'));
      } else {
        console.log('Not found!');
      }
    });
  });
});
