const fs = require('fs');

function processHtml(inputFile, outputFile, componentName) {
  let html = fs.readFileSync(inputFile, 'utf8');

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (!bodyMatch) {
    console.log('No body found in', inputFile);
    return;
  }
  let body = bodyMatch[1];
  
  // Quick transformations to JSX
  body = body.replace(/class=/g, 'className=')
             .replace(/<img([^>]*)>/g, '<img$1 />')
             .replace(/<!--[\s\S]*?-->/g, '') 
             .replace(/for=/g, 'htmlFor=')
             .replace(/style="([^"]*?)"/g, (match, grp) => {
                 if(grp.includes("FILL' 1")) return "style={{fontVariationSettings: \\\"'FILL' 1\\\"}}";
                 if(grp.includes('width')) return 'style={{width: "100%"}}';
                 return '';
             });
             
  // Fix specific img issue with unclosed <img...> that might have been processed
  body = body.replace(/<img(.*?)\s*\/\s*\/\s*>/g, '<img$1 />');
  
  // Specific fix for Dashboard links (assuming NavLink usage roughly)
  body = body.replace(/href="#"/g, 'to="#"');
  body = body.replace(/<a /g, '<Link ');
  body = body.replace(/<\/a>/g, '</Link>');

  const jsx = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst ${componentName} = () => {\n  return (\n    <div className="text-on-surface min-h-screen flex flex-col bg-main-image">\n      ${body}\n    </div>\n  );\n};\n\nexport default ${componentName};\n`;

  fs.writeFileSync(outputFile, jsx);
  console.log(outputFile, 'generated successfully.');
}

processHtml('responder.html', 'src/pages/ResponderView.jsx', 'ResponderView');
processHtml('dashboard.html', 'src/pages/Dashboard.jsx', 'Dashboard');
