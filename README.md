# Gomes Digital

Site de uma página da Gomes Digital, em Arouca. É HTML, CSS e um ficheiro pequeno de JavaScript, sem loja de aplicações, sem base de dados e sem serviços pagos. Publica-se grátis no GitHub Pages, a partir da raiz deste repositório.

O texto está em português de Portugal. O contacto público é só o WhatsApp. O número não aparece escrito na página. Não há preços, testemunhos nem fotografias de pessoas.

## 1. Ligação do WhatsApp

Há **um único sítio** para o contacto: o ficheiro `contacto.js`.

No topo está esta linha, com aspas vazias de propósito:

```javascript
var WHATSAPP_SHORT_LINK = "";
```

Quando houver a ligação curta do WhatsApp Business, cole-a entre as aspas. Tem de começar por `https://wa.me/message/` (também serve um endereço `https://api.whatsapp.com/`). Exemplo da forma, sem um código real:

```javascript
var WHATSAPP_SHORT_LINK = "https://wa.me/message/COLOQUE-AQUI";
```

Como obter essa ligação, na aplicação WhatsApp Business:

1. Abra **Definições** (ou **Ferramentas para empresas**).
2. Procure a **ligação curta**.
3. Copie o endereço que começa por `https://wa.me/message/`.
4. Cole-o entre as aspas, no `contacto.js`, e grave o ficheiro.

Enquanto as aspas estiverem vazias, os botões continuam a funcionar: no clique, o JavaScript monta o endereço do WhatsApp a partir de partes guardadas no mesmo ficheiro. Esse endereço não fica escrito na página antes do clique.

A mensagem que já vai escrita na conversa está na linha `MENSAGEM`, no mesmo ficheiro, entre aspas. Pode reescrevê-la.

Os botões precisam de JavaScript. Se estiver desligado, o rodapé explica isso, sem mostrar um número.

Os commits anteriores deste repositório ainda têm o número escrito. O histórico não foi reescrito.

## 2. Mudar os textos

Os textos visíveis estão no `index.html`, por baixo de `<body>`.

| O que mudar | Onde procurar |
|---|---|
| Frase e subtítulo | `Tecnologia sem complicações` e a frase logo a seguir |
| Passos | `<h2 id="titulo-funciona">` |
| Serviços | `<h2 id="titulo-servicos">` |
| Idades | `<h2 id="titulo-idades">` |
| Confiança | `<ul class="confianca">` |

Ao escrever, use português de Portugal, de forma impessoal ou com «você». Não use expressões do Brasil: telemóvel (não «celular»), ecrã (não «tela»), ficheiro (não «arquivo»).

Não ponha preços. A frase do site é: «Preço justo, combinado antes de começar.» Não há avaliações, de propósito. Não escreva um número de telefone nem um email na página, nas meta tags nem no bloco JSON-LD. Na página, o nome é Gomes Digital, em Arouca.

## 3. Ver a página no computador

Na pasta do projeto:

```bash
python3 -m http.server 8080
```

Depois abra `http://localhost:8080`.

A letra é grande. No telemóvel, o botão do WhatsApp fica fixo em baixo e não tapa o resto.

## 4. Publicar no GitHub Pages

O site fica no ar a partir da branch `main`, pasta raiz (`/`). O ficheiro `.nojekyll` não se apaga.

Quando estas alterações estiverem na branch `main`:

1. Abra o repositório no GitHub.
2. **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**.
4. Escolha `main` e a pasta **`/ (root)`**. Grave.
5. O endereço será `https://NOME-DA-CONTA.github.io/gomes-digital-arouca/`.

Cada gravação na branch `main` atualiza o site ao fim de cerca de um minuto.

## 5. Se o endereço público for outro

Os links de partilha usam, por agora:

`https://wizzynoise.github.io/gomes-digital-arouca/`

Se a conta ou o domínio mudarem, substitua esse endereço em `index.html`, `robots.txt` e `sitemap.xml`.

O bloco JSON-LD descreve a área de Arouca. Não tem rua, não tem preços, não tem telefone e não tem email.

## O que fica de fora

- Preços e promoções com valor.
- Testemunhos, estrelas, número de clientes ou credenciais que não sejam verdade.
- Fotografias de pessoas e imagens pesadas.
- O número de telefone ou um email escritos na página.

## Ficheiros

| Ficheiro | Para quê |
|---|---|
| `index.html` | A página: textos e dados para o Google |
| `styles.css` | Aspeto |
| `contacto.js` | Ligação curta do WhatsApp e a mensagem já escrita |
| `assets/og.jpg` | Imagem quando o link é partilhado |
| `assets/icon-180.png` | Ícone no telemóvel, se alguém guardar o site |
| `favicon.svg` | Ícone no separador do browser |
| `.nojekyll` | Obrigatório para o GitHub Pages. Não apagar |
| `robots.txt` e `sitemap.xml` | Ajudam os motores de busca a encontrar a página |
