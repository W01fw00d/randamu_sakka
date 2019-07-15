class RōmajiDictionary {
  get() {
    return {
      nouns: [
        this.translation('kamera', 'camera'),
        this.translation('juzu', 'juice'),
      ],
      action_verbs: [
        this.translation('tabe', 'eat'),
        this.translation('nomi', 'drink'),
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
      ]
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
