/*
このファイルで作品のデータを管理

title: 作品のタイトル
imageSrc: サムネイル画像のパス
description: 作品の説明。配列で複数の段落を記述可能
technologies: 使用した技術など
githubUrl: GitHubのリポジトリURL
imageList: 作品の画像の（パスの）リスト。ダイアログで表示するためのもの

*/


// 画像をimportする
import ramenPrev from '../assets/img/works/ramen-prev.png';
import ramen1 from '../assets/img/works/ramen-adviser_1.jpg';
import ramen2 from '../assets/img/works/ramen-adviser_2.jpg';
import game1 from '../assets/img/works/game_1.png';
import game2 from '../assets/img/works/game_2.png';
import game3 from '../assets/img/works/game_3.png';
import game4 from '../assets/img/works/game_4.png';
import game5 from '../assets/img/works/game_5.png';
import rainbowColors from '../assets/img/works/rainbow-colors-154569_640.png';
import uecMap from '../assets/img/works/uec-map.png';
import uecMap2 from '../assets/img/works/uec-map_2.png';
import portfolioSite1 from '../assets/img/works/portfolio-site_1.png';
import portfolioSite2 from '../assets/img/works/portfolio-site_2.png';
import positiveImage from '../assets/img/works/young-woman-1722402_640.jpg';
import construction from '../assets/img/common/construction.png';
import favimakerPrev from '../assets/img/works/favimaker-preview.png';
import favimaker1 from '../assets/img/works/favimaker_1.png';
import favimaker2 from '../assets/img/works/favimaker_2.png';
import osm1 from '../assets/img/works/osm_prototype.png';
import nicebuddy1 from '../assets/img/works/nicebuddy_1.png';
import nicebuddy2 from '../assets/img/works/nicebuddy_2.png';
import nicebuddy3 from '../assets/img/works/nicebuddy_3.png';
import nicebuddy4 from '../assets/img/works/nicebuddy_4.png';
import l4d2_1 from '../assets/img/works/l4d2_1.png';
import l4d2_2 from '../assets/img/works/l4d2_2.png';

export interface Work {
    title: string;
    imageSrc: string;
    description: string[];
    technologies: string;
    githubUrl: string;
    imageList: string[];
}

export const works: Work[] = [
    {
        title: "ポートフォリオサイト",
        imageSrc: portfolioSite1,
        description: [
            `このサイト。`,
            `React+TypeScriptで作成している。`,
            `シンプルでおしゃれなデザインにすることを目標として、コンポーネント間の余白や文字サイズ、画像サイズなどは細部までこだわった。`,
            `多くのUIを引数で内容を調整できるコンポーネントとして実装しており、汎用的に使えるものにするよう心がけた。`,
        ],
        technologies: "React, TypeScript, MUI, Recharts, Github Pages",
        githubUrl: "https://github.com/keita-nakata/my-portfolio-site",
        imageList: [portfolioSite1, portfolioSite2],
    },
    {
        title: "Nice Buddy",
        imageSrc: nicebuddy2,
        description: [
            `2024年11月現在、PKSHA Technology様主催の生成AIハッカソンで作成中。`,
            `簡単に言うと、画面を見ながら教えてくれるAIアシスタント。OpenAIのchatAPIとAudioAPIを使用し、生成した回答を音声でフィードバックする。`,
            `さらに、ソースコードなどが回答に含まれるときはコード部分を音声部分と分けて生成され、ユーザーには音声+コード部分のテキストとしてフィードバックされる。`,
            `また、音声入力の内容からスクリーン情報の必要性をAIに判断させ、必要なら自動でスクリーンショットを撮影してその情報をもとに回答する。`,
        ],
        technologies: "React, TypeScript, MUI, Python, FastAPI, OpenAI API",
        githubUrl: "",
        imageList: [nicebuddy1, nicebuddy2, nicebuddy3, nicebuddy4],
    },
    {
        title: "One Punch favicon",
        imageSrc: favimakerPrev,
        description: [
            `faviconの設定に必要なファイルを一度に生成するツール。`,
            `ポートフォリオサイトのfaviconを設定しようとした時、複数のpngファイルやicoファイルを用意しなければいけないことを初めて知った。
            それを1つ1つ作るのが非常に面倒だったため、そのファイルセットを一発で作成できるサイトを作成。`,
            `アップロードされた画像データはバックエンドで様々な形式に変換した後、aws s3に保存。
            その後、生成されたURLをフロントエンドに返し、ユーザーがダウンロードできるようにした。
            s3に保存されたファイルは一定期間で削除されるように設定している。`,
            `バックエンドもサーバーレスにしようとしたが上手くいかず、一旦ローカルに置いている。`,
        ],
        technologies: "React, TypeScript, Node.js, Python, FastAPI, AWS(S3)",
        githubUrl: "https://github.com/keita-nakata/one-punch-favicon",
        imageList: [favimakerPrev, favimaker1, favimaker2],
    },
    {
        title: "LINE ラーメンbot",
        imageSrc: ramenPrev,
        description: [
            "学部3年時、株式会社システムサーバー様（名古屋市）のインターンに参加。",
            "顔写真を送ると感情を推定し、その感情に合った周辺のラーメン店をレコメンドするLINEチャットボットを作成。",
            "感情検出にはFaceAPI、ラーメン店検索にはホットペッパーグルメAPIを使用。",
            "感情とラーメン店をどのように紐づけるかが課題であった。感情ごとに複数の単語を設定し、お店の紹介文に含まれている単語をカウントして一番多い感情にお店を分類することで課題を解決。",
            "FaceAPIの感情分析機能の廃止に伴い、GoogleCloudVisionAPIへの移行を試みたがややこしくて断念...",
        ],
        technologies: "Google App Script, FaceAPI, ホットペッパーグルメAPI, LINE Messaging API",
        githubUrl: "https://github.com/keita-nakata/ramen-bot",
        imageList: [ramen1, ramen2],
    },
    {
        title: "在室状況管理アプリ",
        imageSrc: osm1,
        description: [
            "現在研究室のメンバー2人と開発中。",
            "紙と磁石で管理している研究室の古き良き在室管理表を刷新するため奮闘中。",
            "各自のスマホのWi-Fi接続状況をarp-scanで取得し、登録されたMacアドレスと照合して在室状況を管理。",
            "バックエンドの実装はすでに完了し、これからフロントエンドの実装に移る。",
        ],
        technologies: "HTML, CSS, PHP, MySQL, Raspberry Pi, apache",
        githubUrl: "",
        imageList: [osm1,],
    },
    {
        title: "ゲーム拡張マップまとめサイト",
        imageSrc: l4d2_2,
        description: [
            "L4D2（Left for Dead 2）というゲームの配布ステージ情報を管理するWebサイト。多数のステージの中から名前、難易度、おすすめ度など多数の要素で検索・ソートできる。",
            `元々研究室の同期がExcelで管理していたが、情報が増えるにつれて管理が大変になってきたことと多くの人に使ってもらいたいという思いから開発を決意。
            現在自分を含む同期5人で開発中。自分はフロントエンドのテーブル表示部分を担当し、ReactとTypeScriptを用いて開発している。`,
            "",
        ],
        technologies: "React, TypeScript, MUI, Python, FastAPI",
        githubUrl: "",
        imageList: [l4d2_1, l4d2_2],
    },
    {
        title: "脱出ゲーム 『研究室からの脱出』",
        imageSrc: game5,
        description: [
            "ゲームを作って稼ぎたい、と思い立ち作り始めた。",
            "イラスト素材はすべて自作しているので、絵のクオリティには目を瞑って頂きたい。",
            "あと少しで完成なのだが、最後の仕上げがなかなか進まない。ここまで来たら完成させたい。",
        ],
        technologies: "Unity, C#, IrisPaint",
        githubUrl: "https://github.com/keita-nakata/EscapeRikei",
        imageList: [game1, game2, game3, game4, game5],
    },
    {
        title: "色弱支援アプリ",
        imageSrc: rainbowColors,
        description: [
            "色弱の人が色の名前を知るためのアプリ。",
            `「画面の〜色の部分」ということを他人から言われたりこちらから言ったりした時に、
            双方の色の認識が異なることが原因で話が噛み合わなくなることが多々あると色弱の友人から聞き、それを解決したいと思い開発を始めた。`,
            `難しいのが、カラーコードと\"だいたいの\"色名をどう紐づけるか、という点であった。
            実際に他人に色を言う時はもちろんカラーコードでは言わず、「黒っぽい」「濃い緑」など、\"だいたいの\"色名を言うことが多いと思われる。
            一般的によく用いられるRGBやCMYKのユークリッド距離では実際の印象と異なる結果が返ってきたため、比較的新しい指標である\"CIEDE2000\"というものを採用した。
            これはRGBなどより人間の色覚に合わせたものであるため、より実際の印象に近い色名を返すことができる。
            これを用いたことで、より実生活に適したものになるよう心がけた。`,
            "現状ではバックエンドの実装（画像+指定の座標からその色名を返す）まで実装できており、今後はフロントエンドを実装したい。",
        ],
        technologies: "Python, OpenCV, CIEDE2000, Swift, Xcode",
        githubUrl: "https://github.com/work1",
        imageList: [construction],
    },
    {
        title: "電通大なんでもマップ",
        imageSrc: uecMap,
        description: [
            "「実システム創造」という講義で現在チームで開発中。",
            "キャンパス内の情報に特化し、建物名や施設名で検索できるだけでなく授業名からその開講場所をマップ上で表示する。",
            "さらに、ユーザーが各自で拡張マップを作成・追加できる機能も搭載し、学内のイベントなどにも臨機応変に対応。",
            "将来的には、学食のメニューや待ち時間などの情報も提供できるよう拡張したいと考えている。",
        ],
        technologies: "Kotlin, Android Studio",
        githubUrl: "",
        imageList: [uecMap2],
    },
    {
        title: "ポジティブになれるSNS 『ポジポジ』",
        imageSrc: positiveImage,
        description: [
            "株式会社エムティーアイ様（東京都）のインターンにおいて作成。",
            `「ポジティブシンキングを身に着けて、人生をもっと良くしたい！」という人に焦点を当てたアプリ。
            投稿はポジティブな内容のみに限定し、ポジティブなリアクションのみを送ることができるよう設計。
            否定的なコメントができないようにコメント機能をあえて排除し、ユーザーが安心して利用できる環境を作った。`,
            `開発は5人チームで行い、自分はフロント・バックの両方を担当。特に投稿まわりの開発を行った。`
        ],
        technologies: "Vue.js, AWS(S3, Lambda, API Gateway, DynamoDB), ",
        githubUrl: "https://github.com/keita-nakata/mti-intern",
        imageList: [construction],
    },
    
    // 他の作品を追加
];
