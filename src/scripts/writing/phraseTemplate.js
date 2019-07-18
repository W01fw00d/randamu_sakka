ACTION_VERB_PARTICLE = 'o';
WITH = 'to';

COUNTABLE_DETERMINANT = 'a';

class PhraseTemplate {
  randomStructure(w) {
    let text = {
      romaji: '',
      english: '',
    };

    if (this.randomCondition()) {
      text = this.addActionOnNoun(text, w);
    }

    text = this.addBasicAction(text, w);

    return this.correctOrtography(text);
  }

  addActionOnNoun(text, w) {
    const noun = this.getOne(w.nouns);

    text.romaji = `${noun.japanese.romaji} ${ACTION_VERB_PARTICLE}${this.addWhitespaceAtBegin(text.romaji)}`;
    text.english = `${this.addWhitespaceAtEnd(text.english)}${
      noun.english.countable ? ' ' + COUNTABLE_DETERMINANT + ' ' : ''
    }${noun.english.word}`

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

    console.log(text.english);

    return text;
  }

  //NOT USED
  withPerson(w) {
    return `${this.getOne(w.articles)} ${WITH}`;
  }

  addWhitespaceAtBegin(string) {
    if (string) {
      console.log(string);
    }
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
