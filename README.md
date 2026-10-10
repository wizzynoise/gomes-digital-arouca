# Gomes Digital Arouca

Site de uma página da Gomes Digital Arouca (Pedro Gomes, Rossas). É HTML e CSS, sem loja de aplicações, sem base de dados e sem serviços pagos. Publica-se grátis no GitHub Pages, a partir da raiz deste repositório.

O texto está em português de Portugal. O contacto público é só o WhatsApp. Não há preços, testemunhos nem fotografias de banco de imagens.

## 1. Mudar o número de WhatsApp

Há **um único sítio** para o número.

1. Abra o ficheiro `index.html`.
2. No topo, encontre esta linha:

```html
<meta name="gomes:whatsapp" content="351XXXXXXXXX">
```

3. Substitua `351XXXXXXXXX` pelo número real: `351` e os 9 dígitos, **sem** `+`, **sem** espaços e **sem** traços.

Exemplo (número fictício):

```html
<meta name="gomes:whatsapp" content="351912345678">
```

4. Grave o ficheiro.

Não é preciso editar os botões um a um. Ao abrir a página, esse número é copiado para todos os links «Falar no WhatsApp».

Enquanto o número tiver letras `X`, ou não tiver o formato certo, aparece uma faixa no topo da página a avisar. A faixa desaparece quando o número está bem escrito.

A linha logo por baixo é a mensagem que já vai escrita na conversa:

```html
<meta name="gomes:whatsapp-mensagem" content="Olá, Pedro. Preciso de ajuda com tecnologia em casa e gostava de um diagnóstico rápido. Obrigado.">
```

Pode reescrevê-la. Mantenha o texto entre aspas.

Se o JavaScript estiver desligado no browser, os botões usam o número de exemplo que está escrito nos próprios links. No telemóvel e no computador normais, o JavaScript está ligado e vale a linha `gomes:whatsapp`.

## 2. Mudar os textos

Os textos visíveis estão no `index.html`, por baixo de `<body>`.

| O que mudar | Onde procurar |
|---|---|
| Frase e subtítulo | `Tecnologia sem complicações` e a frase logo a seguir |
| Serviços | `<h2 id="titulo-ajuda">` |
| Passos | `<h2 id="titulo-funciona">` |
| Apresentação | o parágrafo com `id="texto-quem-sou"` |
| Privacidade | `<h2 id="titulo-confianca">` |
| Zonas | `<h2 id="titulo-onde">` |
| Perguntas | `<h2 id="titulo-perguntas">` |

O parágrafo `texto-quem-sou` é um texto honesto de espera, para o Pedro substituir por duas ou três frases suas: por que começou e como gosta de explicar. Sem cursos inventados, sem número de clientes e sem estrelas.

Ao escrever, use português de Portugal:

- Diga «o senhor ou a senhora», ou fale sem pronome («pode escrever», «escreva»).
- Não use «você».
- Telemóvel (não «celular»), ecrã (não «tela»), ficheiro (não «arquivo»), palavra-passe, contacto.

Não ponha preços. A frase do site é: «Preço justo, combinado antes de começar.» Não há secção de avaliações de propósito.

## 3. Pôr a sua fotografia

O espaço está na secção «Quem sou». Enquanto não houver foto real, vê-se um quadro verde com as iniciais PG e o nome do ficheiro.

1. Tire uma fotografia sua, com luz de janela: de frente, roupa simples, rosto mais ou menos ao centro.
2. Formato JPG. No telemóvel chega. Se puder, use retrato (mais alto do que largo), com pelo menos 800 píxeis no lado mais curto.
3. O ficheiro tem de se chamar **exatamente** `pedro.jpg`, em minúsculas.
4. Substitua o ficheiro `assets/pedro.jpg` por essa fotografia. Não mude o nome.

Não use fotografias de banco de imagens, nem caras de clientes, nem ecrãs com mensagens, contas ou fotos de outras pessoas.

Se o ficheiro faltar ou o nome estiver errado (por exemplo `Pedro.JPG`), a página mostra um quadro neutro com as iniciais, em vez de uma imagem partida. O GitHub distingue maiúsculas de minúsculas: `Pedro.jpg` não chega.

A imagem de partilha (quando alguém envia o link do site) é outra: `assets/og.jpg`. É um cartaz com o nome, sem fotografia de pessoas. Pode deixá-la como está.

## 4. Ver a página no seu computador

Na pasta do projeto, abra o ficheiro `index.html` com o browser (duplo clique).

Ou, se tiver o Python instalado, nessa pasta:

```bash
python3 -m http.server 8080
```

Depois abra `http://localhost:8080`.

Veja também no telemóvel, ou na ferramenta de tamanho do browser: a letra é grande e o botão do WhatsApp fica fixo em baixo.

## 5. Publicar no GitHub Pages

O site fica no ar a partir da branch `main`, pasta raiz (`/`). O ficheiro `index.html` já está na raiz. O ficheiro `.nojekyll` também: não o apague. Diz ao GitHub para publicar os ficheiros como estão.

Quando estas alterações estiverem na branch `main`:

1. Entre em [github.com](https://github.com) e inicie sessão.
2. Abra o repositório `gomes-digital-arouca`.
3. Confirme que, na branch `main`, existe `index.html` na lista de ficheiros (não dentro de uma pasta).
4. Carregue em **Settings** (Definições), no menu do repositório.
5. No menu da esquerda, carregue em **Pages**.
6. Em **Build and deployment**, no campo **Source**, escolha **Deploy from a branch**.
7. Em **Branch**, escolha `main` e a pasta **`/ (root)`**.
8. Carregue em **Save**.
9. Espere um ou dois minutos e atualize a página das definições. Aparece uma caixa com o endereço do site.
10. O endereço será `https://NOME-DA-CONTA.github.io/gomes-digital-arouca/` (o nome da conta GitHub no lugar de `NOME-DA-CONTA`).
11. Abra esse endereço no telemóvel. Confirme o número, os textos e a fotografia.

Cada vez que gravar alterações na branch `main`, o site actualiza sozinho ao fim de cerca de um minuto.

### Se editar pelo site do GitHub

- Número ou textos: abra `index.html`, carregue no lápis, altere, e em baixo escolha **Commit changes**.
- Fotografia: entre na pasta `assets`, carregue em **Add file** → **Upload files**, envie a foto com o nome `pedro.jpg` (substitui a que lá está) e grave.

## 6. Se o endereço público for outro

Os links de partilha e os dados para o Google usam, por agora:

`https://wizzynoise.github.io/gomes-digital-arouca/`

Se a conta GitHub for outra, ou se mais tarde usar um domínio próprio, procure esse endereço e substitua-o em:

- `index.html` (canonical, Open Graph e o bloco JSON-LD)
- `robots.txt`
- `sitemap.xml`

O bloco JSON-LD descreve um negócio de área de serviço: concelho de Arouca, Vale de Cambra e zonas vizinhas. **Não tem rua nem número de porta**, de propósito. Também não tem preços nem o número de WhatsApp, para o número de exemplo não ficar indexado. O contacto na página é o botão.

## O que fica de fora

- Preços e promoções com valor.
- Testemunhos, estrelas, número de clientes ou credenciais que não sejam verdade.
- Fotografias de outras pessoas sem autorização escrita, e fotografias de banco de imagens.
- Frases como «100% seguro» ou «máxima segurança».
- Loja, horário de balcão ou morada de casa.

## Ficheiros

| Ficheiro | Para quê |
|---|---|
| `index.html` | A página toda: textos, número, dados para o Google |
| `styles.css` | Aspeto. Em princípio não precisa de o abrir |
| `assets/pedro.jpg` | A sua fotografia (substituir este ficheiro) |
| `assets/og.jpg` | Imagem quando o link é partilhado |
| `assets/icon-180.png` | Ícone no telemóvel, se alguém guardar o site |
| `favicon.svg` | Ícone no separador do browser |
| `.nojekyll` | Obrigatório para o GitHub Pages. Não apagar |
| `robots.txt` e `sitemap.xml` | Ajudam os motores de busca a encontrar a página |
