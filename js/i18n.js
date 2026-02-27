/* ========================================
   i18n - Bilingual Support (JA / EN)
   ======================================== */

(function () {
  'use strict';

  var translations = {

    /* ======================================
       Navigation (shared)
       ====================================== */
    ja: {
      // Nav
      'nav.home': 'ホーム',
      'nav.engineering': 'Engineering',
      'nav.language': '翻訳・編集',

      // ====== Landing Page ======
      'hero.name': '口藏 佳希',
      'hero.title': 'Engineering Manager & Translator / Editor',
      'hero.description': '約18年のソフトウェアエンジニアリング経験と、翻訳・編集の専門性を持つ二刀流。技術とことばの両面から、ものづくりに向き合っています。',
      'hero.avatarAlt': 'YK',

      'paths.title': '2つの専門領域',
      'paths.eng.title': 'Engineering & Management',
      'paths.eng.description': 'バックエンド開発、インフラ構築、そしてエンジニアリングマネジメント。Ruby, Python, AWSを中心に、要件定義から運用まで一貫して担当してきました。',
      'paths.eng.h1': 'タイミー EM（現職）',
      'paths.eng.h2': 'DeNA / PECO でのチームリード',
      'paths.eng.h3': 'フルスタック + インフラ',
      'paths.eng.cta': '詳しく見る →',
      'paths.lang.title': 'Translation & Editing',
      'paths.lang.description': '英語・イタリア語から日本語への翻訳、Webメディアの編集・校正、ライター育成。ことばに関わる仕事を幅広く手がけています。',
      'paths.lang.h1': 'TTRPG翻訳（Lex Arcana 等）',
      'paths.lang.h2': 'Webメディア編集・校正',
      'paths.lang.h3': '日・英・伊の3言語対応',
      'paths.lang.cta': '詳しく見る →',

      'about.title': 'About',
      'about.career.title': 'キャリアハイライト',
      'about.career.timee': 'タイミー',
      'about.career.timee.role': 'エンジニアリングマネージャー',
      'about.career.kaizoku': '海賊プレス',
      'about.career.kaizoku.role': '翻訳者',
      'about.career.peco': 'PECO',
      'about.career.peco.role': 'シニアSE / メディアディレクター',
      'about.career.dena': 'DeNA',
      'about.career.dena.role': 'SE / チームリーダー / PM',

      'about.languages.title': '言語',
      'about.languages.ja': '日本語',
      'about.languages.ja.level': '母国語',
      'about.languages.en': '英語',
      'about.languages.en.level': '読解・会話',
      'about.languages.it': 'イタリア語',
      'about.languages.it.level': '読解・会話',

      'about.interests.title': '興味関心',
      'about.interests.linguistics': '言語学',
      'about.interests.philosophy': '哲学',
      'about.interests.history': '歴史',
      'about.interests.italia': 'イタリア',
      'about.interests.cats': '猫',
      'about.interests.books': '読書',

      'links.title': 'Links',

      // ====== Engineering Page ======
      'eng.hero.label': 'Software Engineering & Management',
      'eng.hero.title': 'Engineering & Management',
      'eng.hero.subtitle': '約18年にわたり、バックエンド開発・インフラ構築・チームマネジメントに携わってきました。手を動かすことも、人と向き合うことも、どちらも大切にしています。',

      'eng.career.title': 'Career',
      'eng.career.timee.company': '株式会社タイミー',
      'eng.career.timee.role': 'エンジニアリングマネージャー / シニアバックエンドエンジニア',
      'eng.career.timee.d1': '報酬体験担当チームの運営・プロジェクト推進',
      'eng.career.timee.d2': '検便機能担当チームの運営',
      'eng.career.timee.d3': 'ピープル・テック・プロセス・プロジェクトの4軸マネジメント',
      'eng.career.timee.d4': '組織横断課題の解決',
      'eng.career.freelance.company': 'フリーランス',
      'eng.career.freelance.role': 'ソフトウェアエンジニア / インフラエンジニア',
      'eng.career.freelance.d1': 'AI学習サービス用システム構築（GPT-4 + LINE API）',
      'eng.career.freelance.d2': '簡易契約システム構築（Stripe API）',
      'eng.career.freelance.d3': 'PTA運営システムMVP構築',
      'eng.career.freelance.d4': 'ブラウザ監視拡張機能システム構築（AWS Bedrock）',
      'eng.career.freelance.d5': '技術的オブザーブ・アドバイザリー',
      'eng.career.peco.company': '株式会社PECO',
      'eng.career.peco.role': 'シニアソフトウェアエンジニア / インフラエンジニア / チームリーダー',
      'eng.career.peco.d1': '動物病院向け電子カルテAPI構築',
      'eng.career.peco.d2': '病院運用システム・通院情報共有サービス構築',
      'eng.career.peco.d3': 'ペットフード/用品サブスクリプションサービス構築',
      'eng.career.peco.d4': 'PECOメディアCMS構築',
      'eng.career.peco.d5': 'オフィスネットワークインフラ構築',
      'eng.career.dena.company': '株式会社ディー・エヌ・エー',
      'eng.career.dena.role': 'ソフトウェアエンジニア / チームリーダー / スクラムマスター / PM',
      'eng.career.dena.d1': 'Mobage ゲームプラットフォームのバックエンド開発',
      'eng.career.dena.d2': 'Next Browser Platform (NBPF)',
      'eng.career.dena.d3': 'Final Fantasy Record Keeper',
      'eng.career.dena.d4': '10人規模チームのリード、PO兼SM',
      'eng.career.griffin.company': '株式会社グリフィン',
      'eng.career.griffin.role': 'ソフトウェアエンジニア',
      'eng.career.griffin.d1': '業務基幹システム入れ替え',
      'eng.career.griffin.d2': '官公庁向け日本語教材検索Webシステム構築',
      'eng.career.splant.company': '株式会社エスプラント',
      'eng.career.splant.role': 'ソフトウェアエンジニア',
      'eng.career.splant.d1': '勤怠管理システム構築（200名規模）',
      'eng.career.splant.d2': '要件定義・設計・実装・テスト・運用まで一貫して担当',

      'eng.skills.title': 'Skills',
      'eng.skills.languages': 'Languages',
      'eng.skills.frameworks': 'Frameworks',
      'eng.skills.databases': 'Databases',
      'eng.skills.ai': 'AI / AI-Assisted Dev',
      'eng.skills.infra': 'Infrastructure',
      'eng.skills.methods': 'Methods',

      'eng.management.title': 'Management',
      'eng.management.description': 'タイミーでのEMとして、4つのマネジメント領域を横断的に担っています。',
      'eng.management.people.title': 'People',
      'eng.management.people.desc': 'メンバーの成長支援、1on1、キャリア開発',
      'eng.management.tech.title': 'Technology',
      'eng.management.tech.desc': '技術選定、アーキテクチャ設計、技術負債管理',
      'eng.management.project.title': 'Project',
      'eng.management.project.desc': '要件整理、スケジュール管理、ステークホルダー調整',
      'eng.management.process.title': 'Process',
      'eng.management.process.desc': '開発フロー改善、振り返り運営、組織横断課題解決',

      'eng.domain.title': '事業ドメイン知識',
      'eng.domain.hospital': '動物病院',
      'eng.domain.subscription': 'サブスクリプション',
      'eng.domain.media': 'Webメディア',
      'eng.domain.ec': 'EC・通販',
      'eng.domain.gaming': 'ゲームプラットフォーム',
      'eng.domain.hr': '人材マッチング',

      'eng.cert.title': '資格',
      'eng.edu.title': '学歴',
      'eng.edu.university': '徳島大学 総合科学部 人間科学科（2003年4月 – 2007年2月）',

      'eng.cta.description': '翻訳・校正校閲の仕事にも興味がありますか？',
      'eng.cta.link': 'Translation & Editing →',

      // ====== Language Page ======
      'lang.hero.label': 'Translation & Editing',
      'lang.hero.title': 'Translation & Editing',
      'lang.hero.subtitle': '英語・イタリア語から日本語への翻訳、Webメディアの編集・校正校閲。ことばの力で、異なる文化と世界をつなぐ仕事をしています。',

      'lang.translation.title': '翻訳実績',
      'lang.translation.lex.subtitle': 'テーブルトークRPG / イタリア語 → 日本語',
      'lang.translation.lex.description': '古代ローマ帝国を舞台にしたイタリア発のTTRPGルールブックの翻訳。原書のフレーバーテキストや歴史的文脈を尊重しながら、日本語として自然に読める訳文を追求しました。Kickstarterキャンペーンの運営、SNSマーケティングも担当。',
      'lang.translation.lex.tag1': 'イタリア語→日本語',
      'lang.translation.lex.tag2': '翻訳',
      'lang.translation.lex.tag3': '校正・編集',
      'lang.translation.lex.link': '公式サイトを見る →',
      'lang.translation.d100.subtitle': 'テーブルトークRPG / 英語 → 日本語',
      'lang.translation.d100.description': 'D100システムをベースにした汎用TTRPGの翻訳。ルールテキストの正確な訳出と、プレイヤーが実際に遊びやすい日本語表現の両立を目指しました。',
      'lang.translation.d100.tag1': '英語→日本語',
      'lang.translation.d100.tag2': '翻訳',
      'lang.translation.d100.tag3': '校正・編集',

      'lang.editing.title': '編集・メディア',
      'lang.editing.director.title': 'Webメディアディレクター',
      'lang.editing.director.period': 'PECO / 2017.01 – 2017.11',
      'lang.editing.director.description': '他社向けオウンドメディアの構築・運営を担当。',
      'lang.editing.director.d1': '企画・キーワード選定',
      'lang.editing.director.d2': 'ライター選定・進捗管理',
      'lang.editing.director.d3': '記事の校正・校閲',
      'lang.editing.director.d4': 'SEO施策の立案・実行',
      'lang.editing.trainer.title': '作文講師',
      'lang.editing.trainer.period': 'PECO / 2018.05 – 2019.04',
      'lang.editing.trainer.description': '社内ライター・応募者向けの作文講座を企画・運営。文章力の底上げとメディア品質の向上に貢献しました。',
      'lang.editing.media.title': 'コンテンツマネジメント',
      'lang.editing.media.period': 'PECO / 2016.10 – 2024.02',
      'lang.editing.media.description': 'PECOメディアサイトのコンテンツ品質管理を担当。',
      'lang.editing.media.d1': '5サイトのコンテンツマネジメント',
      'lang.editing.media.d2': 'ライター管理・記事編集',
      'lang.editing.media.d3': 'SEO施策の実施・効果検証',
      'lang.editing.sns.title': 'SNSマーケティング',
      'lang.editing.sns.period': '海賊プレス / 2018 –',
      'lang.editing.sns.description': 'TTRPG製品のSNS企画・運用、Kickstarterキャンペーンの運営・発送まで対応。',

      'lang.skills.title': '言語スキル',
      'lang.skills.ja.name': '日本語',
      'lang.skills.ja.level': '母国語',
      'lang.skills.ja.a1': 'ライティング',
      'lang.skills.ja.a2': '校正・校閲',
      'lang.skills.ja.a3': '翻訳（英→日、伊→日）',
      'lang.skills.en.name': '英語',
      'lang.skills.en.level': '読解・会話',
      'lang.skills.en.a1': 'リーディング',
      'lang.skills.en.a2': 'スピーキング',
      'lang.skills.it.name': 'イタリア語',
      'lang.skills.it.level': '読解・会話',
      'lang.skills.it.a1': 'リーディング',
      'lang.skills.it.a2': 'スピーキング',

      'lang.cert.title': '関連資格',
      'lang.cert.nihongo': '日本語検定 2級',
      'lang.cert.kanji': '漢字検定 2級',
      'lang.cert.komonjo': '古文書読解検定 3級',
      'lang.cert.kyudo': '弓道 三段',

      'lang.interests.title': '興味関心',
      'lang.interests.description': '言語そのものへの関心が、翻訳の仕事を支えています。古代ギリシャ・中国・日本の哲学、言語学、歴史、そしてイタリアの文化。ことばを通じて世界を深く理解することが、すべての仕事の土台です。',
      'lang.interests.t1': '言語学',
      'lang.interests.t2': '哲学（古代ギリシャ・中国・日本）',
      'lang.interests.t3': '歴史',
      'lang.interests.t4': 'イタリア',
      'lang.interests.t5': '猫',
      'lang.interests.t6': '読書',

      'lang.cta.description': 'エンジニアリング・マネジメントの経歴にも興味がありますか？',
      'lang.cta.link': 'Engineering & Management →'
    },

    en: {
      // Nav
      'nav.home': 'Home',
      'nav.engineering': 'Engineering',
      'nav.language': 'Translation',

      // ====== Landing Page ======
      'hero.name': 'Yoshiki Kuchikura',
      'hero.title': 'Engineering Manager & Translator / Editor',
      'hero.description': 'A dual-track professional with ~18 years of software engineering experience and expertise in translation and editing. Bridging technology and language.',
      'hero.avatarAlt': 'YK',

      'paths.title': 'Two Domains',
      'paths.eng.title': 'Engineering & Management',
      'paths.eng.description': 'Backend development, infrastructure, and engineering management. Experienced across the full lifecycle from requirements to operations, primarily with Ruby, Python, and AWS.',
      'paths.eng.h1': 'EM at Timee (current)',
      'paths.eng.h2': 'Team lead at DeNA / PECO',
      'paths.eng.h3': 'Full-stack + Infrastructure',
      'paths.eng.cta': 'Learn more →',
      'paths.lang.title': 'Translation & Editing',
      'paths.lang.description': 'Translation from English and Italian to Japanese, web media editing, proofreading, and writer training. Engaged in diverse language-related work.',
      'paths.lang.h1': 'TTRPG translation (Lex Arcana, etc.)',
      'paths.lang.h2': 'Web media editing & proofreading',
      'paths.lang.h3': 'Trilingual: JP / EN / IT',
      'paths.lang.cta': 'Learn more →',

      'about.title': 'About',
      'about.career.title': 'Career Highlights',
      'about.career.timee': 'Timee',
      'about.career.timee.role': 'Engineering Manager',
      'about.career.kaizoku': 'Kaizoku Press',
      'about.career.kaizoku.role': 'Translator',
      'about.career.peco': 'PECO',
      'about.career.peco.role': 'Senior SE / Media Director',
      'about.career.dena': 'DeNA',
      'about.career.dena.role': 'SE / Team Lead / PM',

      'about.languages.title': 'Languages',
      'about.languages.ja': 'Japanese',
      'about.languages.ja.level': 'Native',
      'about.languages.en': 'English',
      'about.languages.en.level': 'Reading & Speaking',
      'about.languages.it': 'Italian',
      'about.languages.it.level': 'Reading & Speaking',

      'about.interests.title': 'Interests',
      'about.interests.linguistics': 'Linguistics',
      'about.interests.philosophy': 'Philosophy',
      'about.interests.history': 'History',
      'about.interests.italia': 'Italy',
      'about.interests.cats': 'Cats',
      'about.interests.books': 'Books',

      'links.title': 'Links',

      // ====== Engineering Page ======
      'eng.hero.label': 'Software Engineering & Management',
      'eng.hero.title': 'Engineering & Management',
      'eng.hero.subtitle': 'Over 18 years of experience in backend development, infrastructure, and team management. I value both writing code and working with people.',

      'eng.career.title': 'Career',
      'eng.career.timee.company': 'Timee, inc.',
      'eng.career.timee.role': 'Engineering Manager / Senior Backend Engineer',
      'eng.career.timee.d1': 'Leading the Reward Experience Team',
      'eng.career.timee.d2': 'Managing the Health Check Feature Team',
      'eng.career.timee.d3': 'People, Tech, Process & Project management',
      'eng.career.timee.d4': 'Cross-functional organizational problem solving',
      'eng.career.freelance.company': 'Freelance',
      'eng.career.freelance.role': 'Software Engineer / Infrastructure Engineer',
      'eng.career.freelance.d1': 'AI-powered educational chatting service (GPT-4 + LINE API)',
      'eng.career.freelance.d2': 'Simplified contract management system (Stripe API)',
      'eng.career.freelance.d3': 'PTA management platform MVP',
      'eng.career.freelance.d4': 'Browser monitoring extension system (AWS Bedrock)',
      'eng.career.freelance.d5': 'Technical advisory & observation',
      'eng.career.peco.company': 'PECO, inc.',
      'eng.career.peco.role': 'Senior Software Engineer / Infra Engineer / Team Leader',
      'eng.career.peco.d1': 'Electronic Medical Chart API for animal hospitals',
      'eng.career.peco.d2': 'Hospital operation & visit information sharing systems',
      'eng.career.peco.d3': 'Pet food/items subscription services',
      'eng.career.peco.d4': 'PECO Media CMS development',
      'eng.career.peco.d5': 'Office network infrastructure',
      'eng.career.dena.company': 'DeNA Co., Ltd.',
      'eng.career.dena.role': 'Software Engineer / Team Leader / Scrum Master / PM',
      'eng.career.dena.d1': 'Mobage gaming platform backend development',
      'eng.career.dena.d2': 'Next Browser Platform (NBPF)',
      'eng.career.dena.d3': 'Final Fantasy Record Keeper',
      'eng.career.dena.d4': 'Leading a 10-person team as PO & SM',
      'eng.career.griffin.company': 'Griffin Co., Ltd.',
      'eng.career.griffin.role': 'Software Engineer',
      'eng.career.griffin.d1': 'Core system replacement',
      'eng.career.griffin.d2': 'Japanese teaching materials search system for government',
      'eng.career.splant.company': 'S-plant Co., Ltd.',
      'eng.career.splant.role': 'Software Engineer',
      'eng.career.splant.d1': 'Attendance management system (200 employees)',
      'eng.career.splant.d2': 'Full lifecycle: requirements to operations',

      'eng.skills.title': 'Skills',
      'eng.skills.languages': 'Languages',
      'eng.skills.frameworks': 'Frameworks',
      'eng.skills.databases': 'Databases',
      'eng.skills.ai': 'AI / AI-Assisted Dev',
      'eng.skills.infra': 'Infrastructure',
      'eng.skills.methods': 'Methods',

      'eng.management.title': 'Management',
      'eng.management.description': 'As an EM at Timee, I manage across four key areas.',
      'eng.management.people.title': 'People',
      'eng.management.people.desc': 'Growth support, 1-on-1s, career development',
      'eng.management.tech.title': 'Technology',
      'eng.management.tech.desc': 'Tech selection, architecture, tech debt management',
      'eng.management.project.title': 'Project',
      'eng.management.project.desc': 'Requirements, scheduling, stakeholder coordination',
      'eng.management.process.title': 'Process',
      'eng.management.process.desc': 'Dev flow improvement, retrospectives, cross-org issues',

      'eng.domain.title': 'Domain Knowledge',
      'eng.domain.hospital': 'Animal Hospitals',
      'eng.domain.subscription': 'Subscription',
      'eng.domain.media': 'Web Media',
      'eng.domain.ec': 'E-Commerce',
      'eng.domain.gaming': 'Gaming Platform',
      'eng.domain.hr': 'HR Matching',

      'eng.cert.title': 'Certifications',
      'eng.edu.title': 'Education',
      'eng.edu.university': 'Tokushima University, Faculty of Integrated Arts and Sciences (Apr 2003 – Feb 2007)',

      'eng.cta.description': 'Interested in my translation & editing work?',
      'eng.cta.link': 'Translation & Editing →',

      // ====== Language Page ======
      'lang.hero.label': 'Translation & Editing',
      'lang.hero.title': 'Translation & Editing',
      'lang.hero.subtitle': 'Translation from English and Italian to Japanese, web media editing and proofreading. Connecting cultures and worlds through the power of language.',

      'lang.translation.title': 'Translation Work',
      'lang.translation.lex.subtitle': 'Tabletop RPG / Italian → Japanese',
      'lang.translation.lex.description': 'Translation of an Italian TTRPG rulebook set in the ancient Roman Empire. Maintained the original flavor text and historical context while creating natural Japanese prose. Also managed the Kickstarter campaign and social media marketing.',
      'lang.translation.lex.tag1': 'Italian → Japanese',
      'lang.translation.lex.tag2': 'Translation',
      'lang.translation.lex.tag3': 'Proofreading',
      'lang.translation.lex.link': 'Visit official site →',
      'lang.translation.d100.subtitle': 'Tabletop RPG / English → Japanese',
      'lang.translation.d100.description': 'Translation of a universal TTRPG based on the D100 system. Balanced accurate rule translation with natural, player-friendly Japanese expressions.',
      'lang.translation.d100.tag1': 'English → Japanese',
      'lang.translation.d100.tag2': 'Translation',
      'lang.translation.d100.tag3': 'Proofreading',

      'lang.editing.title': 'Editing & Media',
      'lang.editing.director.title': 'Web Media Director',
      'lang.editing.director.period': 'PECO / Jan 2017 – Nov 2017',
      'lang.editing.director.description': 'Built and managed owned media for external companies.',
      'lang.editing.director.d1': 'Planning & keyword selection',
      'lang.editing.director.d2': 'Writer selection & progress management',
      'lang.editing.director.d3': 'Article proofreading & editing',
      'lang.editing.director.d4': 'SEO strategy & execution',
      'lang.editing.trainer.title': 'Writing Trainer',
      'lang.editing.trainer.period': 'PECO / May 2018 – Apr 2019',
      'lang.editing.trainer.description': 'Planned and ran in-house writing courses for writers and applicants. Contributed to improving overall writing quality and media standards.',
      'lang.editing.media.title': 'Content Management',
      'lang.editing.media.period': 'PECO / Oct 2016 – Feb 2024',
      'lang.editing.media.description': 'Managed content quality across PECO media sites.',
      'lang.editing.media.d1': 'Content management across 5 sites',
      'lang.editing.media.d2': 'Writer management & article editing',
      'lang.editing.media.d3': 'SEO implementation & measurement',
      'lang.editing.sns.title': 'Social Media Marketing',
      'lang.editing.sns.period': 'Kaizoku Press / 2018 –',
      'lang.editing.sns.description': 'TTRPG product social media planning, Kickstarter campaign management, and fulfillment.',

      'lang.skills.title': 'Language Skills',
      'lang.skills.ja.name': 'Japanese',
      'lang.skills.ja.level': 'Native',
      'lang.skills.ja.a1': 'Writing',
      'lang.skills.ja.a2': 'Proofreading & Editing',
      'lang.skills.ja.a3': 'Translation (EN→JP, IT→JP)',
      'lang.skills.en.name': 'English',
      'lang.skills.en.level': 'Reading & Speaking',
      'lang.skills.en.a1': 'Reading',
      'lang.skills.en.a2': 'Speaking',
      'lang.skills.it.name': 'Italian',
      'lang.skills.it.level': 'Reading & Speaking',
      'lang.skills.it.a1': 'Reading',
      'lang.skills.it.a2': 'Speaking',

      'lang.cert.title': 'Related Certifications',
      'lang.cert.nihongo': 'Japanese Language Proficiency Examination, Level 2',
      'lang.cert.kanji': 'Kanji Proficiency Test, Level 2',
      'lang.cert.komonjo': 'Classical Japanese Documents Reading Proficiency Test, Level 3',
      'lang.cert.kyudo': 'Kyudo (Japanese archery), Grade 3',

      'lang.interests.title': 'Interests',
      'lang.interests.description': 'A deep curiosity about language itself underpins my translation work. Ancient Greek, Chinese, and Japanese philosophy, linguistics, history, and Italian culture \u2014 understanding the world deeply through language is the foundation of everything I do.',
      'lang.interests.t1': 'Linguistics',
      'lang.interests.t2': 'Philosophy (Ancient Greek, Chinese, Japanese)',
      'lang.interests.t3': 'History',
      'lang.interests.t4': 'Italy',
      'lang.interests.t5': 'Cats',
      'lang.interests.t6': 'Books',

      'lang.cta.description': 'Interested in my engineering & management background?',
      'lang.cta.link': 'Engineering & Management →'
    }
  };

  // Determine initial language
  function getLang() {
    var urlParams = new URLSearchParams(window.location.search);
    var urlLang = urlParams.get('lang');
    if (urlLang && translations[urlLang]) return urlLang;

    var stored = localStorage.getItem('portfolio-lang');
    if (stored && translations[stored]) return stored;

    return navigator.language && navigator.language.startsWith('ja') ? 'ja' : 'en';
  }

  // Apply language to all data-i18n elements
  function setLang(lang) {
    if (!translations[lang]) return;

    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    var dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update toggle buttons
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      var isActive = opt.dataset.lang === lang;
      opt.classList.toggle('active', isActive);
      opt.setAttribute('aria-checked', isActive);
    });
  }

  // Initialize
  var currentLang = getLang();
  setLang(currentLang);

  // Bind toggle buttons
  document.querySelectorAll('.lang-option').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = this.dataset.lang;
      if (lang !== currentLang) {
        currentLang = lang;
        setLang(lang);
      }
    });
  });

})();
