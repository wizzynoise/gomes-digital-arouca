# Gomes Digital Arouca

Site de uma página da Gomes Digital Arouca (Pedro Gomes, Rossas). É HTML, CSS e um ficheiro pequeno de JavaScript, sem loja de aplicações, sem base de dados e sem serviços pagos. Publica-se grátis no GitHub Pages, a partir da raiz deste repositório.

O texto está em português de Portugal. O contacto público é só o WhatsApp. O número não aparece escrito na página. Não há preços, testemunhos nem fotografias de banco de imagens.

## 1. Ligação do WhatsApp

Há **um único sítio** para o contacto: o ficheiro `contacto.js`.

No topo está esta linha, com aspas vazias de propósito:

```javascript
var WHATSAPP_SHORT_LINK = "";
```

Quando tiver a ligação curta do WhatsApp Business, cole-a entre as aspas. Tem de começar por `https://wa.me/message/` (também serve um endereço `https://api.whatsapp.com/`). Exemplo da forma, sem um código real:

```javascript
var WHATSAPP_SHORT_LINK = "https://wa.me/message/COLOQUE-AQUI";
```

Como obter essa ligação, na aplicação WhatsApp Business:

1. Abra **Definições** (ou **Ferramentas para empresas**).
2. Procure a **ligação curta** (short link).
3. Copie o endereço que começa por `https://wa.me/message/`.
4. Cole-o entre as aspas, no `contacto.js`, e grave o ficheiro.

Enquanto as aspas estiverem vazias, os botões continuam a funcionar: no clique, o JavaScript monta o endereço do WhatsApp a partir de partes guardadas no mesmo ficheiro. Esse endereço **não** fica escrito na página, nem nos links, antes do clique.

A mensagem que já vai escrita na conversa está na linha `MENSAGEM`, no mesmo ficheiro, entre aspas. Pode reescrevê-la.

Os botões precisam de JavaScript. Se estiver desligado, a página explica isso na secção Contacto, sem mostrar um número.

Os commits anteriores deste repositório ainda têm o número escrito. O histórico não foi reescrito.

## 2. Mudar os textos

Os textos visíveis estão no `index.html`, por baixo de `<body>`.

| O que mudar | Onde procurar |
|---|---|
| Frase e subtítulo | `Tecnologia sem complicações` e a frase logo a seguir |
| Serviços | `<h2 id="titulo-servicos">` |
| Confiança e zonas | `<h2 id="titulo-confianca">` |
| Passos | `<h2 id="titulo-funciona">` |
| Apresentação | o parágrafo com `id="texto-quem-sou"` |
| Perguntas | `<h2 id="titulo-perguntas">` |
| Contacto | `<h2 id="titulo-contacto">` |

O parágrafo `texto-quem-sou` é um texto honesto de espera, para o Pedro substituir por duas ou três frases suas: por que começou e como gosta de explicar. Sem cursos inventados, sem número de clientes e sem estrelas.

Ao escrever, use português de Portugal:

- Diga «o senhor ou a senhora», ou fale sem pronome («pode escrever», «escreva»).
- Não use «você».
- Telemóvel (não «celular»), ecrã (não «tela»), ficheiro (não «arquivo»), palavra-passe, contacto.

Não ponha preços. A frase do site é: «Preço justo, combinado antes de começar.» Não há secção de avaliações de propósito. Não escreva o número de telefone na página, nas meta tags nem no bloco JSON-LD.

## 3. Fotografia (mais tarde, se quiser)

Por agora não há fotografia. Na secção «Quem sou» está um desenho feito no próprio `index.html`: colinas da Serra da Freita, uma aldeia com a torre da igreja, um telemóvel, um computador e um sinal de ajuda. Não é uma foto de pessoa nem uma imagem de banco.

Quando quiser uma fotografia real:

1. Tire uma fotografia sua, com luz de janela: de frente, roupa simples, rosto mais ou menos ao centro.
2. Formato JPG. No telemóvel chega. Retrato, com pelo menos 800 píxeis no lado mais curto.
3. Grave o ficheiro como `assets/pedro.jpg`, em minúsculas. O GitHub distingue maiúsculas: `Pedro.JPG` não chega.
4. No `index.html`, na secção «Quem sou», substitua o bloco `<figure class="ilustracao">` … `</figure>` por:

```html
<figure class="ilustracao">
  <img src="assets/pedro.jpg" alt="Pedro Gomes, de Rossas, Arouca.">
  <figcaption>Pedro Gomes, de Rossas.</figcaption>
</figure>
```

Não use fotografias de banco de imagens, nem caras de clientes, nem ecrãs com mensagens, contas ou fotos de outras pessoas.

A imagem de partilha (quando alguém envia o link do site) é outra: `assets/og.jpg`. É um cartaz com o nome, sem fotografia de pessoas. Pode deixá-la como está.

## 4. Ver a página no seu computador

Na pasta do projeto, abra o ficheiro `index.html` com o browser (duplo clique). Os botões do WhatsApp abrem melhor com um servidor local, porque alguns browsers limitam o JavaScript num ficheiro aberto direto.

Se tiver o Python instalado, nessa pasta:

```bash
python3 -m http.server 8080
```

Depois abra `http://localhost:8080`.

Veja também no telemóvel, ou na ferramenta de tamanho do browser: a letra é grande e o botão do WhatsApp fica fixo em baixo, sem tapar o texto.

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
11. Abra esse endereço no telemóvel. Confirme os textos, o desenho e que o botão abre o WhatsApp.

Cada vez que gravar alterações na branch `main`, o site atualiza sozinho ao fim de cerca de um minuto.

### Se editar pelo site do GitHub

- Ligação curta: abra `contacto.js`, carregue no lápis, cole o endereço entre as aspas de `WHATSAPP_SHORT_LINK`, e em baixo escolha **Commit changes**.
- Textos: abra `index.html`, carregue no lápis, altere, e grave da mesma forma.
- Fotografia, quando a quiser: siga a secção 3. Envie `assets/pedro.jpg` e troque o desenho pelo `<img>` indicado.

## 6. Se o endereço público for outro

Os links de partilha e os dados para o Google usam, por agora:

`https://wizzynoise.github.io/gomes-digital-arouca/`

Se a conta GitHub for outra, ou se mais tarde usar um domínio próprio, procure esse endereço e substitua-o em:

- `index.html` (canonical, Open Graph e o bloco JSON-LD)
- `robots.txt`
- `sitemap.xml`

O bloco JSON-LD descreve um negócio de área de serviço: concelho de Arouca, Vale de Cambra e zonas vizinhas. **Não tem rua nem número de porta**, de propósito. Também não tem preços nem telefone. O contacto está descrito como WhatsApp, sem endereço e sem número.

## O que fica de fora

- Preços e promoções com valor.
- Testemunhos, estrelas, número de clientes ou credenciais que não sejam verdade.
- Fotografias de outras pessoas sem autorização escrita, e fotografias de banco de imagens.
- Frases como «100% seguro» ou «máxima segurança».
- Loja, horário de balcão ou morada de casa.
- O número de telefone escrito na página, nas meta tags ou no JSON-LD.

## Ficheiros

| Ficheiro | Para quê |
|---|---|
| `index.html` | A página toda: textos e dados para o Google |
| `styles.css` | Aspeto. Em princípio não precisa de o abrir |
| `contacto.js` | Ligação curta do WhatsApp e a mensagem já escrita |
| `assets/og.jpg` | Imagem quando o link é partilhado |
| `assets/pedro.jpg` | Só se mais tarde quiser uma fotografia sua (ver secção 3). Este ficheiro ainda não existe |
| `assets/icon-180.png` | Ícone no telemóvel, se alguém guardar o site |
| `favicon.svg` | Ícone no separador do browser |
| `.nojekyll` | Obrigatório para o GitHub Pages. Não apagar |
| `robots.txt` e `sitemap.xml` | Ajudam os motores de busca a encontrar a página |
