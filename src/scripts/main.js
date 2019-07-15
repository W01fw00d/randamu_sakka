function init() {
  const api = new FakeAPI();
  const template = new PhraseTemplate();

  api.getFullSet(5).then(words => {
    paintOnHtml([
      template.basicAction(words),
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
  return '<div class="phrase">'
    + '<span class="japanese">' + content.japanese + '</span>'
    + '<span class="english">' + content.english + '</span>'
    + '</div>';
}

window.onload = init;