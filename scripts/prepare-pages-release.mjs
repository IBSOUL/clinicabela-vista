import fs from 'node:fs';
import path from 'node:path';

const source = path.resolve('site');
const out = path.resolve('_site');
if (!fs.existsSync(path.join(source, 'APPROVED_FOR_PUBLICATION'))) {
  throw new Error('Publicação bloqueada: revisão de identidade, imagens, contatos e conteúdo não aprovada.');
}
if (fs.existsSync(out)) {
  if (fs.readdirSync(out).length) throw new Error('Diretório _site já existe e não está vazio. Remova manualmente somente o artefato anterior.');
} else {
  fs.mkdirSync(out, { recursive: true });
}
fs.cpSync(source, out, { recursive: true });
fs.unlinkSync(path.join(out, 'APPROVED_FOR_PUBLICATION'));
const htmlPath = path.join(out, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace('<meta name="robots" content="noindex,nofollow">', '<meta name="robots" content="index,follow">');
html = html.replace('<meta name="description"', '<link rel="canonical" href="https://ibsoul.github.io/clinicabela-vista/"><meta name="description"');
html = html.replace('Prévia local · dados sujeitos à confirmação antes de publicar.', 'Informações de atendimento sujeitas à atualização pela equipe. Imagens ilustrativas.');
if (html.includes('noindex')) throw new Error('Ainda há diretiva noindex no artefato de produção.');
fs.writeFileSync(htmlPath, html);
fs.writeFileSync(path.join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');
console.log('Artefato GitHub Pages preparado para https://ibsoul.github.io/clinicabela-vista/');
