//TODO: Maybe move those particles to dictionary? on a constants atribute
ACTION_VERB_PARTICLE = 'o';
// Prepositions
WITH = {
  english: 'with',
  romaji: 'to',
  kana: 'と'
};
TO = {
  english: 'to',
  romaji: 'ni',
  kana: 'に',
};
AT = {
  english: 'at',
  romaji: 'de',
  kana: 'で',
};

COUNTABLE_DETERMINANT = 'a';

class PhraseTemplate {
  randomStructure(w) {
    let text = this.addPhrase(w);

    if (this.randomCondition()) {
      text = this.addCompoundPhrase(text, w);
    }

    return this.correctOrtography(text);
  }

  addPhrase(w) {
    let text = {
      romaji: '',
      english: '',
    };

    //TODO: random order for this adds when possible
    if (this.randomCondition()) {
      text = this.addActionOnNoun(text, w);
    }
    if (this.randomCondition()) {
      text = this.addActionWithArticle(text, w);
    }
    if (this.randomCondition()) {
      text = this.addTimeAdverb(text, w);
    }

    return text = this.addBasicAction(text, w);
  }

  addCompoundPhrase(text, w) {
    const interjection = this.getOne(w.interjections);

    const new_phrase = this.addPhrase(w);

    text.romaji = `${this.addWhitespaceAtEnd(text.romaji)}${interjection.romaji} ${new_phrase.romaji}`;
    text.english = `${this.addWhitespaceAtEnd(text.english)}${interjection.english} ${new_phrase.english}`;

    return text;
  }

  addActionOnNoun(text, w) {
    //TODO: we can add articles here too, actions can be done on them
    const noun = this.getOne(w.nouns);

    text.romaji = `${noun.japanese.romaji} ${ACTION_VERB_PARTICLE}${this.addWhitespaceAtBegin(text.romaji)}`;
    text.english = `${this.addWhitespaceAtEnd(text.english)}${
      noun.english.countable ? ' ' + COUNTABLE_DETERMINANT + ' ' : ''
    }${noun.english.word}`;

    return text;
  }

  addActionWithArticle(text, w) {
    const article = this.getOne(w.pronouns.personal);

    text.romaji = `${article.romaji} ${WITH.romaji}${this.addWhitespaceAtBegin(text.romaji)}`;
    text.english = `${this.addWhitespaceAtEnd(text.english)}${WITH.english} ${article.english}`;

    return text;
  }

  addTimeAdverb(text, w) {
    const adverb = this.getOne(w.adverbs.time);

    text.romaji = `${adverb.romaji}${this.addWhitespaceAtBegin(text.romaji)}`;
    text.english = `${this.addWhitespaceAtEnd(text.english)}${adverb.english}`;

    return text;
  }

  addBasicAction(text, w) {
    const verb = this.getOne(w.action_verbs);
    const particle = this.getOne(w.verbs_particles);

    text.romaji = `${this.addWhitespaceAtEnd(text.romaji)}${verb.romaji}${particle.romaji}`;
    text.english =
      `${this.addWhitespaceAtEnd(particle.english.word)}${verb.english}${
        this.addWhitespaceAtBegin(text.english)
      }${particle.english.interrogative ? '?' : ''}`;

    return text;
  }


  //TODO: Auxiliar functions, move to other class
  addWhitespaceAtBegin(string) {
    return `${string ? ' ' : ''}${string}`;
  }

  addWhitespaceAtEnd(string) {
    return `${string}${string ? ' ' : ''}`;
  }

  correctOrtography(text) {
    text = this.addEndingPointToPhrases(text);
    text = this.firstPhraseLetterToUppercase(text);

    return text;
  }

  addEndingPointToPhrases(text) {
    text.romaji = this.addEndingPoint(text.romaji);
    text.english = this.addEndingPoint(text.english);

    return text;
  }

  addEndingPoint(string) {
    if (string.charAt(string.length - 1) != '?') {
      string = `${string}.`
    }

    return string;
  }

  firstPhraseLetterToUppercase(text) {
    text.romaji = this.firstUpperCase(text.romaji);
    text.english = this.firstUpperCase(text.english);

    return text;
  }

  firstUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getOne(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  randomCondition() {
    return Math.floor(Math.random() * 2);
  }
}
