class Dictionary {
  get() {
    //TODO change translation order to romaji, kana and english. Add missing kanas.
    return {
      determiners: {
        demonstrative: [
          this.translation('kono', 'this', 'この'),
          this.translation('sono', 'that', 'その'),
          this.translation('ano', 'that over there', 'アの'),
        ],
        possesives: [
          this.translation('kare', 'he', '彼'),
          this.translation('kanojo', 'she', '彼女'),
          this.translation('watashi', 'I/me', '私'),
          this.translation('anata', 'you', 'アナタ'),
          this.translation('karera', 'they', '彼ら'),
        ],
      },
      adverbs: {
        //TODO: Relate time adverbs with verbs time sufixes
        time: [
          this.translation('kinō', 'yesterday', '昨日'),
          this.translation('kyō', 'today', '今日'),
          this.translation('konban', 'tonight', '今晩'),
          this.translation('ashita', 'tomorrow', '明日'),
          this.translation('saikin', 'nowadays', '最近'),
          this.translation('tokidoki', 'sometimes', '時々'),
          this.translation('mainichi', 'everyday', '毎日'),
          this.translation('hajimete', 'for the first time', '初めて'),
        ],
        others: [
          this.translation('seji', 'certainly'),
        ],
      },
      //TODO: implement a question/answer template
      answers: [
        this.translation('hai, dōzo', 'yes, go ahead'),
        this.translation('īe', 'no'),
      ],
      interjections: [
        //kara is therefore if it's on the phrase middle, and because if it's at the end
        this.translation('kara', 'therefore/because'),
        this.translation('soshite', 'and', 'そして'),
        this.translation('ka', 'or', 'か'),
        //TODO: develop a special template for ga. When doing a constrast on two phrases, the contrasted item must be followed by 'wa'
        this.translation('ga', 'but'),
        // this.translation('to', 'with', 'と'),
        //'wa' is used to remark the contrast between two phrases united by a 'ga'
        //it's also used to indicate who is the doer of the action
        // this.translation('wa', '(remarked)'),
        //TODO: define ni as particle for go to places and for calling to a person

      ],
      pronouns: {
        personal: [
          this.translation('watashi', 'I/me', '私'),
          this.translation('anata', 'you', 'アナタ'),
          this.translation('kare', 'he/him', '彼'),
          this.translation('kanojo', 'she/her', '彼女'),

          this.translation('watashi-tachi', 'we', '私たち'),
          this.translation('anata-tachi', 'you (plural)', 'あなたたち'),
          this.translation('karera', 'they (men)', '彼ら'),
          this.translation('kanojora', 'they (women)', '彼女ら'),

        ],
        interrogative: [
          this.translation('nani', 'what', '何'),
          this.translation('dore', 'which one', 'どれ'),
          this.translation('doko', 'where', 'どこ'),
          this.translation('dōshite', 'why', 'どうして'),
        ],
        //TODO: to use in front of 'o', for example 'kore o tabemas'
        // for ni, we need koko, soko y asoko: ex: 'koko ni ikimas'
        demonstrative: [
          this.translation('kore', 'this', 'これ'),
          this.translation('sore', 'that', 'それ'),
          this.translation('āre', 'that over there', 'アーレ'),
        ],
      },
      expressions: [
        this.translation('nandesuka?', 'What is (it)?', '何ですか'),
      ],

      adjectives: [
        this.translation('sugoi', 'great', 'すごい'),
        this.translation('omoshiroi', 'interesting', '面白い'),
        this.translation('oishī', 'delicious', 'おいしい'),
        this.translation('kawaii', 'cute', '可愛い'),
        this.translation('kowai', 'scary', '怖い'),

        this.translation('nemui', 'sleepy', '眠い'),
        this.translation('hazukashī', 'embarrassed', '恥ずかしい'),
        this.translation('abunai', 'dangerous', '危ない'),
      ],

      nouns: [
        this.noun('gorufu', 'ゴルフ', 'golf', 'uncountable'),
        this.noun('tenisu', 'テニス', 'tennis', 'uncountable'),

        this.noun('shi-goto', 'しごと', 'work', 'uncountable'),
        this.noun('rirakkusu', 'リラックス', 'relax', 'uncountable'),

        this.noun('miyage', '土産', 'present'),
        this.noun('koin', 'コイン', 'coin'),
        this.noun('kamera', 'カメラ', 'camera'),
        this.noun('dejikame', 'デジカメ', 'digital camera'),

        this.noun('terebi', 'テレビ', 'television'),
        this.noun('denwa', '電話', 'phone'),
        this.noun('keitai', '携帯', 'mobile phone'),
        this.noun('tīshatsu', 'Tシャツ', 'T-shirt'),

        this.noun('sofutō', 'ソフト', 'software'),
        this.noun('kokuhaku', '告白', 'confession'),
        this.noun('ai', '愛', 'love'),

        this.noun('eiga', '映画', 'movie'),
        this.noun('Konsāto', 'コンサート', 'concert'),
        this.noun('shukudai', '宿題', 'homework'),

        this.noun('mado', '窓', 'window'),
        this.noun('tsukue', '机', 'desk'),
        this.noun('isu', '椅子', 'chair'),
        this.noun('daidokoro', '台所', 'kitchen'),

        this.noun('gakkō', '学校', 'school'),
        this.noun('jaisha', '会社', 'company'),
        this.noun('hoteru', 'ホテル', 'hotel'),
        this.noun('depāto', 'デパート', 'department store'),

        this.noun('yasai', '野菜', 'vegetables'),
        this.noun('gohan', 'ご飯', 'rice/meal'),
        this.noun('sandoitchi', 'サンドイッチ', 'sandwich'),
        this.noun('aisukurīmu', 'アイスクリーム', 'ice-cream'),

        this.noun('nomimono', '飲み物', 'drink'),
        this.noun('mizu', '水', 'water'),
        this.noun('ocha', 'お茶', 'tea'),
        this.noun('jūsu', 'ジュース', 'juice'),
        this.noun('kōhī', 'コーヒー', 'coffee'),
        this.noun('bīru', 'ビール', 'beer'),

        this.noun('gakusei', '学生', 'student'),

        this.noun('petto', 'ペット', 'pet'),
        this.noun('inu', '犬', 'dog'),
        this.noun('neko', 'ネコ', 'cat'),
        this.noun('tori', '鳥', 'bird'),

        this.noun('mother', '母', '(own) mother'),
        this.noun('okāsan', 'お母', '(other\'s) mother'),
        this.noun('chichi', '父', '(own) father'),
        this.noun('otōsan', 'お父さん', '(other\'s) father'),

        this.noun('tomodachi', '友達', 'friend'),
        this.noun('teki', '敵', 'enemy'),
        this.noun('bengoshi', '弁護士', 'lawyer'),
        this.noun('reijou', '令嬢', 'daughter'),
        this.noun('kodomo', '子供', 'child'),

        // this.noun('namae', '名前', 'name'),
      ],
      concept_nouns: [
        this.meaning('kizuna', 'bound', 'Union between people'),
        this.meaning('omoiyari', 'empathy', 'Empathy towards other people feelings'),
        this.meaning('女心/On\'nagokoro', 'woman\'s heart', 'The way a woman\'s mind works, traditionally'),
      ],
      proper_nouns: [
        this.noun('nihon', '日本', 'Japan', 'uncountable'),
        this.noun('gaburieru', 'ガブリエル', 'Gabriel', 'uncountable'),
        this.noun('maruta', 'マルタ', 'Marta', 'uncountable'),
        this.noun('tanaka', '田中', 'Tanaka', 'uncountable'),
        this.noun('suzuki', '鈴木', 'Suzuki', 'uncountable'),
        this.noun('akira', '晶', 'Akira', 'uncountable'),
      ],
      action_verbs: [
        this.translation('tabe', 'eat'),
        this.translation('nomi', 'drink'),
        this.translation('mi', 'see/watch/look'),
        this.translation('jomi', 'read'),
        this.translation('kai', 'buy'),
        this.translation('shi', 'do/play'),
        //Bug: shall be 'go to' when a place is defined, 'go' when no place defined
        this.translation('iki', 'go to'),
        // this.translation('ii', 'is called'), //いいます
      ],
      //TODO: Change back to verbs_sufixes, as in japanese is always like that
      verbs_particles: [
        this.particles('mas', 'affirmation'),
        this.particles('masen', 'negation', 'don\'t'),
        this.particles('masho', 'proposal', 'let\'s'),
        this.particles('mashta', 'past', 'in the past,'),
        this.particles('masen deshita', 'past negation', 'didn\'t'),
        this.particles('tai des', 'desire', 'I want to'),
        this.particles('mas ka?', 'question', '', 'interrogative'),
        this.particles('masen ka?', 'formal proposal', 'would you', 'interrogative'),
        this.particles('masho ka?', 'proposal', 'shall we', 'interrogative'),
        this.particles('mashta ka?', 'past question', 'in the past,', 'interrogative'),
        this.particles('tai des ka?', 'desire question', 'Do you want to ', 'interrogative'),
      ],
      special_verbs: [
        this.translation('sukidesu', 'like (it)'),
        this.translation('desu', 'is'),
        this.translation('deshita', 'was'),
        this.translation('o kudasai', 'Please give me'),
      ],
    };
  }

  //TODO: Auxiliar functions, move to other class
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

  noun(romaji, kana, english, type = 'countable') {
    return {
      japanese: {
        romaji: romaji,
        kana: kana,
      },
      english: {
        word: english,
        countable: type == 'countable',
      },
    };
  }

  particles(romaji, meaning, english = '', type = '') {
    return {
      romaji: romaji,
      english: {
        meaning: meaning,
        word: english,
        interrogative: type == 'interrogative',
      },
    };
  }
}
