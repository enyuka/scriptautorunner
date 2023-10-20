// 現在のURLを取得
const url = location.href;

// URLからhttpsから記事番号までを取得
const match = url.match(/(https:\/\/.+\/articles\/\d+)/);

if (match) {
  console.log(match);
  setTimeout(() => {
    // クリップボードにコピー
    navigator.clipboard.writeText(match[1]).then(() => {
      console.log("URLがクリップボードにコピーされました！😊");
    }).catch((err) => {
      console.log("エラーが発生しました。😢");
      console.error(err);
    });
  }, 1000); // 1 秒待たないと Document is not focused というエラーが出る
} else {
  console.log("記事番号が見つかりませんでした。😔");
}
