import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

const dist = 'dist';

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const f of ['manifest.json', 'popup.html', 'popup.js', 'style.css']) {
    if (fs.existsSync(f)) fs.copyFileSync(f, path.join(dist, f));

}

const zipPath = path.join(dist, 'extensions.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', { zlib: { level: 9 } })

await new Promise((res,rej)=>{
    output.on('close',res);
    archive.on('error',rej);
    archive.pipe(output);
    archive.glob('**/*',{cwd:dist,ignore:['extension.zip']});
    archive.finalize();
})

console.log('dist/ pronto e extensão gerada com sucesso!')