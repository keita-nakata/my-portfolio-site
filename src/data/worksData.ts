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
import ramenPrev from '/img/works/ramen-prev.png';
import ramen1 from '/img/works/ramen-adviser_1.jpg';
import ramen2 from '/img/works/ramen-adviser_2.jpg';
import game1 from '/img/works/game_1.png';
import game2 from '/img/works/game_2.png';
import game3 from '/img/works/game_3.png';
import game4 from '/img/works/game_4.png';
import game5 from '/img/works/game_5.png';
import rainbowColors from '/img/works/rainbow-colors-154569_640.png';
import uecMap from '/img/works/uec-map.png';
import uecMap2 from '/img/works/uec-map_2.png';
import portfolioSite1 from '/img/works/portfolio-site_1.png';
import portfolioSite2 from '/img/works/portfolio-site_2.png';
// import positiveImage from '/img/works/young-woman-1722402_640.jpg';
import construction from '/img/common/construction.png';
import favimakerPrev from '/img/works/favimaker-preview.png';
import favimaker1 from '/img/works/favimaker_1.png';
import favimaker2 from '/img/works/favimaker_2.png';
import osms1 from '/img/works/osms_1.png';
import nicebuddy1 from '/img/works/nicebuddy_1.png';
import nicebuddy2 from '/img/works/nicebuddy_2.png';
import nicebuddy3 from '/img/works/nicebuddy_3.png';
import nicebuddy4 from '/img/works/nicebuddy_4.png';
import l4d2_1 from '/img/works/l4d2_1.png';
import l4d2_2 from '/img/works/l4d2_2.png';
import hatai_1 from '/img/works/hatai_1.png';

export interface Work {
    title: string;
    imageSrc: string;
    description: string[];
    technologies: string;
    githubUrl?: string;
    publicUrl?: string;
    slideUrl?: string;
    imageList: string[];
}

export const works: Work[] = [
    {
        title: "【ハッカソン最優秀賞】Nice Buddy",
        imageSrc: nicebuddy2,
        description: [
            `2024年10~11月に開催された株式会社PKSHA Technology主催の生成AIハッカソンで最優秀賞を頂いたプロダクト。`,
            `PCの画面を見ながら教えてくれるAIアシスタントで、OpenAIのChatAPIとAudioAPIを使用し、生成した回答を音声でフィードバックする。`,
            `音声入力の内容からスクリーン情報の必要性をAIに判断させ、必要なら自動でスクリーンショットを撮影してその情報をもとに回答する。`,
            `ソースコードなどが回答に含まれるときはコード部分を音声部分と分けて生成され、ユーザーには音声+コード部分のテキストとしてフィードバックされる。`,
        ],
        technologies: "React, TypeScript, MUI, Python, FastAPI, OpenAI API",
        githubUrl: 'https://github.com/KimuraAkikazu/Nice-Buddy',
        publicUrl: "",
        slideUrl: 'https://drive.google.com/drive/folders/1ulu0WAIaY4l3QHyB8974IFvRjzSjrjRJ?usp=sharing',
        imageList: [nicebuddy1, nicebuddy2, nicebuddy3, nicebuddy4],
    },
    {
        title: '民宿ハタイ様 公式ウェブサイト',
        imageSrc: hatai_1,
        description: [
            `三重県熊野市で営業する民宿ハタイ様の公式ウェブサイト。`,
            `フロントエンドはNext.js+TypeScript、バックエンド（データベース）はSupabaseを使用して開発。別で管理画面も開発し、お知らせの投稿や予約状況の管理を行えるようにした。`,
        ],
        technologies: "Next.js, TypeScript, MUI, Supabase, PostgreSQL",
        githubUrl: "",
        publicUrl: "https://hatai-official.vercel.app/",
        imageList: [hatai_1],
    },
    {
        title: "UEC Map",
        imageSrc: uecMap,
        description: [
            "「実システム創造」という講義でチーム開発。",
            `位置情報を最大限活用したキャンパスマップアプリ。特筆すべきはマップ上にコメントを残せるようにしたことである。UIは細部までこだわった。`,
            `プレゼンに用いたスライドのリンクが下にあるので、ぜひ見ていただきたい。`
        ],
        technologies: "Kotlin, Android Studio",
        githubUrl: "",
        slideUrl: "https://www.canva.com/design/DAGi3bgf5Qw/Y1Dv93knYp7Sg5CWCco1dg/view?utm_content=DAGi3bgf5Qw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h652ab350cc",
        imageList: [uecMap2],
    },
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
        publicUrl: "https://keita-nakata.github.io/my-portfolio-site/",
        imageList: [portfolioSite1, portfolioSite2],
    },
    {
        title: "One Punch favicon",
        imageSrc: favimakerPrev,
        description: [
            `faviconの設定に必要なファイルを一度に生成するツール。`,
            `ポートフォリオサイトのfaviconを設定しようとした時、複数のpngファイルやicoファイルを用意しなければいけないことを初めて知った。
            それを1つ1つ作るのが非常に面倒だったため、そのファイルセットを一発で作成できるサイトを作成。`,
            `アップロードされた画像データはバックエンドに送られ、設定に必要な様々な形式に変換した後AWS S3に保存。
            その後、生成されたURLをフロントエンドに返し、ユーザーがダウンロードできるようにした。
            s3に保存されたファイルは一定期間で削除されるように設定している。`,
            `フロントエンドはVercel、バックエンドはHerokuでデプロイしている。`,
        ],
        technologies: "React, TypeScript, Node.js, Python, FastAPI, AWS(S3)",
        githubUrl: "https://github.com/keita-nakata/one-punch-favicon",
        publicUrl: "https://one-punch-favicon.vercel.app/",
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
        publicUrl: "",
        imageList: [ramen1, ramen2],
    },
    {
        title: "研究室 在室状況管理システム",
        imageSrc: osms1,
        description: [
            "研究室のメンバーの在室状況を表示するWebシステム。",
            "もともと紙と磁石で管理していた在室管理表をデジタル化した。",
            "各自のスマホのWi-Fi接続状況をarp-scanで取得し、登録されたMacアドレスと照合して在室状況を管理している。",
            "紙でできていたことは全てこのシステムでもできるように、かつ誰にとっても使いやすいようにすることにこだわった。",
            "端末の検出漏れが高い頻度であるので、その対策として一度の検出漏れで退室にせず一定時間検出されなかった場合にようやく退室とする設計にした。",
        ],
        technologies: "HTML, CSS, PHP, MySQL, Raspberry Pi, apache",
        githubUrl: "",
        publicUrl: "",
        imageList: [osms1,],
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
        publicUrl: "",
        imageList: [l4d2_1, l4d2_2],
    },
    {
        title: "脱出ゲーム 『研究室からの脱出』",
        imageSrc: game5,
        description: [
            "ゲームを作って稼ぎたい、と思い立ち作り始めた。",
            "イラスト素材はすべて自作している。",
            "開発中。"
        ],
        technologies: "Unity, C#, IrisPaint",
        githubUrl: "https://github.com/keita-nakata/EscapeRikei",
        publicUrl: "",
        imageList: [game1, game2, game3, game4, game5],
    },
    {
        title: "色弱支援アプリ",
        imageSrc: rainbowColors,
        description: [
            "色弱の人がPC画面上の色の名前を知るためのアプリ。",
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
        publicUrl: "",
        imageList: [construction],
    },
    // {
    //     title: "ポジティブになれるSNS 『ポジポジ』",
    //     imageSrc: positiveImage,
    //     description: [
    //         "株式会社エムティーアイ様（東京都）のインターンにおいて作成。",
    //         `「ポジティブシンキングを身に着けて、人生をもっと良くしたい！」という人に焦点を当てたアプリ。
    //         投稿はポジティブな内容のみに限定し、ポジティブなリアクションのみを送ることができるよう設計。
    //         否定的なコメントができないようにコメント機能をあえて排除し、ユーザーが安心して利用できる環境を作った。`,
    //         `開発は5人チームで行い、自分はフロント・バックの両方を担当。特に投稿まわりの開発を行った。`
    //     ],
    //     technologies: "Vue.js, AWS(S3, Lambda, API Gateway, DynamoDB), ",
    //     githubUrl: "https://github.com/keita-nakata/mti-intern",
    //     publicUrl: "",
    //     imageList: [construction],
    // },
    
    // 他の作品を追加
];
