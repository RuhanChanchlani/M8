const https = require('https');
const fs = require('fs');

const files = [
    {
        name: 'home_v3.html',
        url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzFjZmRmMGRhZTQ3ZjRiMmU5MGQ0NDNjNmViMzI4OTA4EgsSBxDgt6aq8xgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTU5ODkyNjc2NDM3NTYyNDY5NQ&filename=&opi=89354086'
    },
    {
        name: 'responder_v3.html',
        url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NiNTFjZDY5MGVkZDRjYmNiNTI5M2FhNjZhNTc0YjBiEgsSBxDgt6aq8xgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTU5ODkyNjc2NDM3NTYyNDY5NQ&filename=&opi=89354086'
    },
    {
        name: 'dashboard_v3.html',
        url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2ZlMDIwZjQxMTdkMjQzMzA5ZjUyMWM3ZmMzODYwMDM2EgsSBxDgt6aq8xgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTU5ODkyNjc2NDM3NTYyNDY5NQ&filename=&opi=89354086'
    },
    {
        name: 'guest_sos_v3.html',
        url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2VjZDE0MzFkZTc4YTRhNDRiNWMyM2MzY2RhZjM3NDE3EgsSBxDgt6aq8xgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTU5ODkyNjc2NDM3NTYyNDY5NQ&filename=&opi=89354086'
    }
];

files.forEach(file => {
    https.get(file.url, (response) => {
        let content = '';
        response.on('data', chunk => { content += chunk; });
        response.on('end', () => {
            fs.writeFileSync(file.name, content);
            console.log('Downloaded', file.name);
        });
    }).on('error', (err) => {
        console.error('Error downloading', file.name, err);
    });
});
