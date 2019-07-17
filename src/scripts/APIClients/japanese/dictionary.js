class Dictionary {
  get() {
    return {
      answers: [
        this.translation('hai, dōzo', 'yes, go ahead'),
        this.translation('īe', 'no'),
      ],
      interjections: [
        this.translation('kara', 'therefore'),
        this.translation('soshte', 'and'),
        this.translation('ga', 'but'),
      ],
      nouns: [
        this.translation('kamera', 'camera'),
        this.translation('dejikame', 'digital camera', 'デジカメ'),
        this.translation('tīshatsu', 't-shirt'),

        this.translation('hoteru', 'hotel'),

        this.translation('aisukurīmu', 'ice-cream'),

        this.translation('jūsu', 'juice'),
        this.translation('kōhī', 'coffee'),
      ],
      concept_nouns: [
        this.meaning('omoiyari', 'empathy', 'Empathy towards other people feelings'),
      ],
      proper_nouns: [
        this.translation('nihon', 'japan'),
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

  translation(romaji, english, japanese = '') {
    return {
      romaji: romaji,
      english: english,
      japanese: japanese,
    };
  }

  meaning(romaji, english, meaning) {
    return {
      romaji: romaji,
      english: english,
      meaning: meaning,
    };
  }

  particles(romaji, meaning, english = '', location = 'sufix') {
    return {
      romaji: romaji,
      english: {
        meaning: meaning,
        word: english,
        location: location,
      },
    };
  }
}
