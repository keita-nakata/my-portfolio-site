export interface Hobby {
    imageUrl: string;
    title: string;
    description: string[];
    scale: number;
}

export const hobbies: Hobby[] = [
    {
        imageUrl: 'images/baseball.jpeg',
        title: "Baseball",
        description: ["小学生1年生の時野球を始める。", "その後高校まで野球部、大学では軟式野球サークルに所属。", "巨人ファン一家に生まれた阪神ファン。ホームがアウェー。"],
        scale: 0.7,
    },
    {
        imageUrl: 'images/fishing.jpg',
        title: "Fishing",
        description: ["バス釣りから始めたが、最近はほぼ海釣り。ブリを釣るのが夢。", "良い写真が見つからず中学時代の写真を採用。実はこれが人生最大のブラックバス。"],
        scale: 0.5,
    },
    {
        imageUrl: 'images/running_1.png',
        title: "Running",
        description: ["高校時代の引き締まった体を目指して毎朝ランニングを継続中。", "現在東京に住んでいるので、せっかくなら東京マラソンに出たいなと思っている。", "写真は2024年の津シティマラソン。"],
        scale: 0.6,
    },
];
