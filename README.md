# H10 — publicação GitHub Pages

## Destino

- Conta: `IBSOUL`.
- Repositório dedicado: `IBSOUL/clinicabela-vista` (público, para elegibilidade do Pages no plano Free).
- URL do Pages: `https://ibsoul.github.io/clinicabela-vista/`.
- O remoto privado `IBSOUL/crm-site-factory` não é destino e não receberá arquivos do site.

## Release

O workflow `workflow_dispatch` prepara e publica somente a partir do repositório dedicado. O pacote usa `index.html` estático no topo de `_site`, imagens locais e canonical/robots próprios de produção. O arquivo `site/APPROVED_FOR_PUBLICATION` registra a autorização do usuário neste chat e não é incluído no artefato publicado.

As imagens de ambiente vêm do Unsplash, são licenciadas para uso comercial segundo [a licença oficial](https://unsplash.com/license) e continuam identificadas como ilustrativas. O N1 usa identidade/contatos públicos observados na ficha e não inventa serviços específicos. Nenhum formulário envia dados automaticamente; a ação abre WhatsApp para confirmação do visitante.

## Verificação

O aceite exige workflow concluído, URL real, `index.html`, assets, canonical/schema, `robots.txt` e formulário servidos. A prova local de responsividade anterior está em `H10-PREP-PROOF.json`; a prova final será anexada após a verificação do Pages.
