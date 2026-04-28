const fs = require('fs');
const files = ['src/app/command/page.tsx', 'src/app/guest/sos/page.tsx', 'src/app/responder/page.tsx', 'src/app/page.tsx'];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/style=\{\{fontVariationSettings: \\"\'FILL\' 1\\"\}\}/g, 'style={{fontVariationSettings: "\'FILL\' 1"}}');
    fs.writeFileSync(f, content);
    console.log('Fixed', f);
});
