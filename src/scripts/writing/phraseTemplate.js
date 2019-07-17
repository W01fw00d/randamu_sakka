ACTION_VERB_PARTICLE = 'o';

class PhraseTemplate {
  basicAction(w) {
    const verb = this.getOne(w.action_verbs);
    const particle = this.getOne(w.verbs_particles)

    return {
      romaji: `${this.firstUpperCase(verb.romaji)}${particle.romaji}`,
      english: particle.english.location == 'prefix'
        ? `${this.firstUpperCase(particle.english.word)} ${verb.english}`
        : `${this.firstUpperCase(verb.english)}${particle.english.word}`,
    };
  }

  basicActionOnNoun(w) {
    const noun = this.getOne(w.nouns);
    const verb = this.getOne(w.action_verbs);
    const particle = this.getOne(w.verbs_particles)

    return {
      romaji: `${this.firstUpperCase(noun.romaji)} ${ACTION_VERB_PARTICLE} ${verb.romaji}${particle.romaji}`,
      english: particle.english.location == 'prefix'
        ? `${this.firstUpperCase(particle.english.word)} ${verb.english} ${noun.english}`
        : `${this.firstUpperCase(verb.english)} ${noun.english}${particle.english.word}`,
    };
  }

  firstUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getOne(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
