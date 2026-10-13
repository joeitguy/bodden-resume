import fs from 'fs';
import https from 'https';

https.get('https://joe-bodden-about-5929fb556633.herokuapp.com/static/js/bundle.js', (res) => {
  let bundle = '';
  res.on('data', chunk => bundle += chunk);
  res.on('end', () => {
    console.log('Fetched bundle:', bundle.length);

    // Let's search for each component
    const comps = ['Resume', 'CoverLetter', 'SkillsSummary', 'ReadmePage', 'IndexPage', 'ContactForm', 'Layout'];
    for (const name of comps) {
      console.log('\n============================== ' + name + ' ==============================');
      const startTag = '"./src/components/' + name + '.jsx"';
      let idx = bundle.indexOf(startTag);
      if (idx === -1) idx = bundle.indexOf('"./src/' + name + '.jsx"');
      if (idx !== -1) {
        // extract next 30000 characters or until next module
        const slice = bundle.slice(idx, idx + 25000);
        // Find all JSX string texts
        // In webpack, strings are in jsxDEV("tag", { children: "text" }) or jsxDEV("tag", { children: [...] })
        // Let's match all string literals in this slice:
        const strRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
        let m;
        const strings = [];
        while ((m = strRegex.exec(slice)) !== null) {
          try {
            const parsed = JSON.parse(m[0]);
            if (typeof parsed === 'string' && parsed.length >= 3) {
              if (!parsed.includes('node_modules') && !parsed.includes('webpack') && !parsed.includes('.css') && !parsed.includes('/app/src') && !parsed.startsWith('_') && !parsed.includes('jsxDEV') && !parsed.includes('RefreshUtils')) {
                strings.push(parsed);
              }
            }
          } catch(e) {}
        }
        console.log(Array.from(new Set(strings)).join('\n'));
      } else {
        console.log('Not found:', name);
      }
    }
  });
});
