import fs from 'fs';

function cleanAndShow(file) {
  console.log('\n\n================================================================================');
  console.log('FILE: ' + file);
  console.log('================================================================================');
  const code = fs.readFileSync('/tmp/' + file, 'utf8');
  
  // Replace jsxDEV with simpler readable markup
  let cleaned = code
    .replace(/\/\*#__PURE__\*\/\(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_\d__\.jsxDEV\)\(/g, '<')
    .replace(/, void 0, false, \{[^\}]*\}, this\)/g, '>')
    .replace(/, void 0, true, \{[^\}]*\}, this\)/g, '>')
    .replace(/children: /g, '')
    .replace(/className: /g, 'class=')
    .replace(/fileName: [^,]+,/g, '')
    .replace(/lineNumber: [^,]+,/g, '')
    .replace(/columnNumber: [^\}]+/g, '');
  
  // Let's print out lines that have text content
  const lines = code.split('\n');
  const output = [];
  for (const line of lines) {
    if (line.includes('children:') || line.includes('jsxDEV') || line.includes('function ') || line.includes('const ') || line.includes('href:') || line.includes('title') || line.includes('header')) {
      output.push(line);
    }
  }
  console.log(output.slice(0, 150).join('\n'));
}

['extracted_Resume.js', 'extracted_SkillsSummary.js', 'extracted_CoverLetter.js', 'extracted_ReadmePage.js', 'extracted_IndexPage.js', 'extracted_Layout.js'].forEach(cleanAndShow);
