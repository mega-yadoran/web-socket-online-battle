# WebSocket を利用した多人数プレイ対応のオンラインしりとりゲーム

WebSocket(Socket.IO)を利用した多人数対応のオンラインゲームのサンプルアプリです。
解説記事は[こちら](https://qiita.com/mega_yadoran/items/eee7982a7f2b36c4ae0d)

## 動作確認済環境

- Node.js 14.16.0
- [Nodemon](https://www.digitalocean.com/community/tutorials/workflow-nodemon-ja) 2.0.15

## ローカル環境での動かし方

1. front / server のそれぞれディレクトリで `npm install` を実行
2. front ディレクトリで `npm run dev` を実行
3. server ディレクトリで `nodemon server.js` を実行
4. `http://localhost:8080/` にアクセス
