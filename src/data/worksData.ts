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
        title: "ラーメンアドバイザーbot",
        imageSrc: "images/baseball.jpeg",
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
        title: "Work 2",
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
    {
        title: "ラーメンアドバイザーbot",
        imageSrc: "images/baseball.jpeg",
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
        title: "Work 2",
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
    {
        title: "ラーメンアドバイザーbot",
        imageSrc: "images/baseball.jpeg",
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
        title: "Work 2",
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
    {
        title: "ラーメンアドバイザーbot",
        imageSrc: "images/baseball.jpeg",
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
        title: "Work 2",
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
