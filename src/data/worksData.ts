/*
このファイルで作品のデータを管理

title: 作品のタイトル
imageSrc: サムネイル画像のパス
description: 作品の説明。配列で複数の段落を記述可能
technologies: 使用した技術など
githubUrl: GitHubのリポジトリURL
imageList: 作品の画像の（パスの）リスト。ダイアログで表示するためのもの

*/

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
        title: "LINE ラーメンbot",
        imageSrc: "src/assets/img/works/ramen-prev.png",
        description: [
            "学部3年時、株式会社システムサーバー様（名古屋市）のインターンに参加。",
            "顔写真を送ると感情を推定し、その感情に合った周辺のラーメン店をレコメンドするLINEチャットボットを作成。",
            "感情検出にはFaceAPI、ラーメン店検索にはホットペッパーグルメAPIを使用。",
            "感情とラーメン店をどのように紐づけるかが課題であった。感情ごとに複数の単語を設定し、お店の紹介文に含まれている単語をカウントして一番多い感情にお店を分類することで課題を解決。"
        ],
        technologies: "Google App Script, FaceAPI, ホットペッパーグルメAPI, LINE Messaging API",
        githubUrl: "", // あとで変更
        imageList: ["src/assets/img/works/ramen-adviser_1.JPG", "src/assets/img/works/ramen-adviser_2.JPG"],
    },
    {
        title: "ポジティブになれるSNS 『ポジポジ』",
        imageSrc: "images/running_1.png",
        description: [
            "株式会社エムティーアイ様（東京都）のインターンにおいて作成。",
            `「ポジティブシンキングを身に着けて、人生をもっと良くしたい！」という人に焦点を当てたアプリ。
            投稿はポジティブな内容のみに限定し、ポジティブなリアクションのみを送ることができるよう設計。
            否定的なコメントができないようにコメント機能をあえて排除し、ユーザーが安心して利用できる環境を作った。`,
            `開発は5人チームで行い、自分はフロント・バックの両方を担当。特に投稿まわりの開発を行った。`
        ],
        technologies: "Vue.js, AWS(S3, Lambda, API Gateway, DynamoDB), ",
        githubUrl: "https://github.com/keita-nakata/mti-intern",
        imageList: ["images/running_2.jpeg", "images/running_3.jpeg"],
    },
    {
        title: "在室状況管理アプリ",
        imageSrc: "images/baseball.jpeg",
        description: [
            "現在研究室のメンバー2人と開発中。",
            "紙と磁石で管理している研究室の古き良き在室管理表を刷新するため奮闘中。",
            "Wi-Fiの接続状況をarp-scanで取得し、登録されたMacアドレスと照合して在室状況を管理。",
            "バックエンドの実装はすでに完了し、これからフロントエンドの実装に移る。",
        ],
        technologies: "HTML, CSS, PHP, MySQL, Raspberry Pi, apache",
        githubUrl: "",
        imageList: ["images/running_2.jpeg", "images/running_3.jpeg",],
    },
    {
        title: "脱出ゲーム 『研究室からの脱出』",
        imageSrc: "images/running_1.jpeg",
        description: [
            "Work 2 Description 1",
            "Work 2 Description 2",
            "Work 2 Description 3",
        ],
        technologies: "Unity, C#",
        githubUrl: "https://github.com/work2",
        imageList: ["images/running_2.jpeg", "images/running_3.jpeg"],
    },
    {
        title: "色名教えてくれるニキ",
        imageSrc: "src/assets/img/works/rainbow-colors-154569_640.png",
        description: [
            "",
        ],
        technologies: "Google App Script, FaceAPI, ホットペッパーグルメAPI, LINE Messaging API",
        githubUrl: "https://github.com/work1",
        imageList: ["images/running_1.jpeg", "images/running_2.jpeg", "images/running_3.jpeg", "images/running_3.jpeg", "images/running_3.jpeg"],
    },
    {
        title: "なんでも電通大マップ",
        imageSrc: "images/running_1.jpeg",
        description: [
            "Work 2 Description 1",
            "Work 2 Description 2",
            "Work 2 Description 3",
        ],
        technologies: "Tech Stack for Work 2",
        githubUrl: "",
        imageList: ["images/running_2.jpeg", "images/running_3.jpeg"],
    },
    {
        title: "ポートフォリオサイト",
        imageSrc: "src/assets/img/works/portfolio-site_1.png",
        description: [
            "学部3年時、株式会社システムサーバー様（名古屋市）のインターンに参加。",
            "顔写真を送ると感情を推定し、その感情に合った周辺のラーメン店をレコメンドするLINEチャットボットを作成。",
            "感情検出にはFaceAPI、ラーメン店検索にはホットペッパーグルメAPIを使用。",
            "感情とラーメン店をどのように紐づけるかが課題で、感情ごとに複数の単語を設定し、お店の紹介文に含まれている単語をカウントして一番多い感情にお店を分類する方式を採用。"
        ],
        technologies: "Google App Script, FaceAPI, ホットペッパーグルメAPI, LINE Messaging API",
        githubUrl: "https://github.com/work1",
        imageList: ["images/running_1.jpeg", "images/running_2.jpeg", "images/running_3.jpeg", "images/running_3.jpeg", "images/running_3.jpeg"],
    },
    {
        title: "M1 Gゼミ",
        imageSrc: "images/running_1.jpeg",
        description: [
            "Work 2 Description 1",
            "Work 2 Description 2",
            "Work 2 Description 3",
        ],
        technologies: "Tech Stack for Work 2",
        githubUrl: "https://github.com/work2",
        imageList: ["images/running_2.jpeg", "images/running_3.jpeg"],
    },
    // 他の作品を追加
];
