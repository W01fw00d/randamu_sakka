function init() {
  const api = new FakeAPI();
  const template = new PhraseTemplate();

  api.getFullSet().then(words => {
    paintOnHtml([
      template.basicAction(words),
      template.basicActionOnNoun(words),
    ]);
  });
}

function paintOnHtml(texts) {
  let htmlToInsert = '';

  texts.forEach((text) => {
    htmlToInsert += this.insertIntoDiv(text);
  })

  document.getElementById("text").innerHTML = htmlToInsert;
}

function insertIntoDiv(content) {
  return `<div class="phrase">
    <span class="romaji">${content.romaji}</span>
    <span class="english">${content.english}</span>
  </div>`;
}

window.onload = init;
