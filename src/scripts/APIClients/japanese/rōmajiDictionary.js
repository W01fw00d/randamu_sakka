class RōmajiDictionary {
  get() {
    return {
      answers: [
        this.translation('hai, dōzo', 'yes, go ahead'),
        this.translation('īe', 'no'),
      ],
      nouns: [
        this.translation('kamera', 'camera'),
        this.translation('tīshatsu', 't-shirt'),

        this.translation('hoteru', 'hotel'),

        this.translation('aisukurīmu', 'ice-cream'),

        this.translation('jūsu', 'juice'),
        this.translation('kōhī', 'coffee'),
      ],
      action_verbs: [
        this.translation('tabe', 'eat'),
        this.translation('nomi', 'drink'),
        // -mas sufix shouldn't be applied, and it's not really a verb, more like an expression
        // this.translation('kudasai', 'Please give me'),
      ],
      special_verbs: [
        this.translation('des', 'is'),
      ],
      // Japanese phrases always ends with a verb, so we add the . when needed here
      verbs_particles: [
        this.particles('mas.', 'affirmation'),
        this.particles('masen.', 'negation', 'don\'t', 'prefix'),
        this.particles('masho.', 'proposal', 'let\'s', 'prefix'),
        this.particles('mas ka?', 'question', '?', 'sufix'),
        this.particles('masen ka?', 'formal proposal', ', would you?', 'sufix'),
        this.particles('masho ka?', 'proposal', ', shall we?', 'sufix'),
      ],
    };
  }

  translation(japanese, english) {
    return {
      japanese: japanese,
      english: english,
    };
  }

  particles(japanese, meaning, english = '', location = 'sufix') {
    return {
      japanese: japanese,
      english: {
        meaning: meaning,
        word: english,
        location: location,
      },
    };
  }
}
