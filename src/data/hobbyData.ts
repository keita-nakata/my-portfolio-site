import baseballImage from '../assets/img/profile/baseball.jpeg';
import fishingImage from '../assets/img/profile/fishing.jpg';
import runningImage from '../assets/img/profile/running_1.png';

export interface Hobby {
    imageUrl: string;
    title: string;
    description: string[];
    scale: number;
}

export const hobbies: Hobby[] = [
    {
        imageUrl: baseballImage,
        title: "Baseball",
        description: ["小学1年生の時野球を始める。", "その後高校まで野球部、大学では軟式野球サークルに所属。"],
        scale: 0.7,
    },
    {
        imageUrl: fishingImage,
        title: "Fishing",
        description: ["バス釣りから始めたが、最近はほぼ海釣り。ブリを釣るのが夢。", "良い写真が見つからず中学時代の写真を採用。実はこれが人生最大のブラックバス。"],
        scale: 0.5,
    },
    {
        imageUrl: runningImage,
        title: "Running",
        description: ["高校時代の引き締まった体を目指してランニングに励んでいる。", "現在東京に住んでいるので、チャンスがあれば東京マラソンに出たいと思っている。", "写真は2024年の津シティマラソン。"],
        scale: 0.6,
    },
];
