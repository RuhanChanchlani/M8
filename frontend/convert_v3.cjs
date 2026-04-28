const fs = require('fs');
const path = require('path');

function processHtml(inputFile, outputFile) {
  let html = fs.readFileSync(inputFile, 'utf8');

  // Next.js Global CSS logic or tailwind.config script injection might be present inside <style>
  // Let's grab all styles and add them to globals.css
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g);
  if (styleMatch) {
       let allStyles = '';
       styleMatch.forEach(s => {
           let cleanStyle = s.replace(/<\/?style[^>]*>/g, '');
           allStyles += cleanStyle + '\n';
       });
       fs.appendFileSync('../frontend-next/src/app/globals.css', allStyles);
  }

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (!bodyMatch) {
    console.log('No body found in', inputFile);
    return;
  }
  let body = bodyMatch[1];
  
  // Clean Next.js specific conversions
  body = body.replace(/class=/g, 'className=')
             .replace(/<img(.*?)>/g, (match, grp) => {
                 if(grp.endsWith('/')) return match; 
                 return `<img${grp} />`;
             })
             .replace(/<img(.*?)\s*\/\s*\/\s*>/g, '<img$1 />')
             .replace(/<!--[\s\S]*?-->/g, '') 
             .replace(/for=/g, 'htmlFor=')
             .replace(/style="([^"]*?)"/g, (match, grp) => {
                 if(grp.includes("FILL' 1")) return "style={{fontVariationSettings: \\\"'FILL' 1\\\"}}";
                 if(grp.includes('width')) return 'style={{width: "100%"}}';
                 return '';
             });
             
  body = body.replace(/href="#"/g, 'href="#"');
  body = body.replace(/<a /g, '<Link ');
  body = body.replace(/<\/a>/g, '</Link>');

  // Create folder if not exists
  const dir = path.dirname(outputFile);
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  const jsx = `import React from 'react';\nimport Link from 'next/link';\n\nexport default function Page() {\n  return (\n    <div className="text-on-surface min-h-screen flex flex-col bg-background">\n      ${body}\n    </div>\n  );\n}\n`;

  fs.writeFileSync(outputFile, jsx);
  console.log(outputFile, 'generated successfully.');
}

// Ensure appending to globals is clean
fs.writeFileSync('../frontend-next/src/app/globals.css', '@import "tailwindcss";\n@theme {\n  --color-primary: #ffb3ac;\n  --color-primary-container: #d32f2f;\n  --color-secondary: #82db7e;\n  --color-error: #ffb4ab;\n  --color-surface: #111316;\n  --color-surface-container-low: #1a1c1f;\n  --color-surface-container-high: #282a2d;\n  --color-surface-container-highest: #333538;\n  --color-outline-variant: #5b403d;\n  --color-on-surface: #e2e2e6;\n  --color-on-surface-variant: #e4beba;\n}\n');

processHtml('home_v3.html', '../frontend-next/src/app/page.tsx');
processHtml('guest_sos_v3.html', '../frontend-next/src/app/guest/sos/page.tsx');
processHtml('dashboard_v3.html', '../frontend-next/src/app/command/page.tsx');
processHtml('responder_v3.html', '../frontend-next/src/app/responder/page.tsx');
