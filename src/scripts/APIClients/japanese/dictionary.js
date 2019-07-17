class Dictionary {
  get() {
    return {
      articles: [
        this.translation('kare', 'he', '彼'),
        this.translation('kanojo', 'she', '彼女'),
        this.translation('watashi', 'I', '私'),
      ],
      adverbs: {
        time: [
          this.translation('konban', 'tonight', '今晩'),
          this.translation('ashita', 'tomorrow', '明日'),
          this.translation('tokidoki', 'sometimes', '時々'),
          this.translation('mainichi', 'everyday', '毎日'),
        ],
        others: [
          this.translation('seji', 'certainly'),
        ]

      },
      answers: [
        this.translation('hai, dōzo', 'yes, go ahead'),
        this.translation('īe', 'no'),
      ],
      interjections: [
        //kara is therefore if it's on the phrase middle, and because if it's at the end
        this.translation('kara', 'therefore/because'),
        this.translation('soshite', 'and', 'そして'),
        this.translation('ga', 'but'),
        this.translation('to', 'with', 'と'),
        //'wa' is used to remark the contrast between two phrases united by a 'ga'
        this.translation('wa', '(remarked)'),
      ],
      pronouns: {
        interrogative: [
          this.translation('nani', 'what', '何'),
          this.translation('tore', 'which one', 'どれ'),
          this.translation('doko', 'where', 'どこ'),
          this.translation('dōshite', 'why', 'どうして'),
        ],
        demonstrative: [
          this.translation('kore', 'this', 'これ'),
          this.translation('sore', 'that', 'それ'),
          this.translation('āre', 'that over there', 'アーレ'),
        ]
      },
      expressions: [
        this.translation('nandesuka?', 'What is (it)?', '何ですか'),
      ],

      adjectives: [
        this.translation('omoshiroi', 'interesting', '面白い'),
        this.translation('oishī', 'delicious', 'おいしい'),
        this.translation('kawaii', 'cute', '可愛い'),
        this.translation('kowai', 'scary', '怖い'),

        this.translation('nemui', 'sleepy', '眠い'),
      ],

      nouns: [
        this.translation('kamera', 'camera'),
        this.translation('dejikame', 'digital camera', 'デジカメ'),
        this.translation('terebi', 'television', 'テレビ'),
        this.translation('denwa', 'phone', '電話'),
        this.translation('tīshatsu', 't-shirt'),

        this.translation('eiga', 'movie', '映画'),
        this.translation('Konsāto', 'concert', 'コンサート'),

        this.translation('gorufu', 'golf', 'ゴルフ'),
        this.translation('tenisu', 'tennis', 'テニス'),

        this.translation('shi-goto', 'work', 'しごと'),
        this.translation('rirakkusu', 'relax', 'リラックス'),

        this.translation('nihon', 'japan', '日本'),

        this.translation('hoteru', 'hotel'),
        this.translation('depāto', 'department store', 'デパート'),

        this.translation('sandwich', 'sandoitchi', 'サンドイッチ'),
        this.translation('aisukurīmu', 'ice-cream'),

        this.translation('jūsu', 'juice'),
        this.translation('kōhī', 'coffee'),
        this.translation('bīru', 'beer', 'ビール'),
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
        this.translation('mi', 'see/watch/look'),
        this.translation('jomi', 'read'),
        this.translation('kai', 'buy'),
        this.translation('shi', 'do/play'),
        this.translation('iki', 'go to'),
      ],
      // Japanese phrases always ends with a verb, so we add the . when needed here
      verbs_particles: [
        this.particles('mas.', 'affirmation'),
        this.particles('masen.', 'negation', 'don\'t', 'prefix'),
        this.particles('masho.', 'proposal', 'let\'s', 'prefix'),
        this.particles('mas ka?', 'question', '?', 'sufix'),
        this.particles('masen ka?', 'formal proposal', ', would you?', 'sufix'),
        this.particles('masho ka?', 'proposal', ', shall we?', 'sufix'),
        this.particles('tai des', 'desire', ', I want to ', 'prefix'),
        //'tai des ka?' affects beginning and end of english translated phrase
        this.particles('tai des ka?', 'desire question', ', Do you want to ', 'prefix'),
      ],
      special_verbs: [
        this.translation('sukidesu', 'like (it)'),
        this.translation('desu', 'is'),
        this.translation('o kudasai', 'Please give me'),
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
