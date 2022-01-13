setTimeout(() => {
  const copyButton = document.createElement('button');
  const label = document.createTextNode('クリップボードにコピー');
  copyButton.appendChild(label);

  const comments = document.getElementsByClassName('comment');
  for (let i = 0; i < comments.length; i++) {
    const dupNode = copyButton.cloneNode(true);
    dupNode.id = 'copyButton' + i;
    dupNode.addEventListener('click', () => {
      const text = comments[i].textContent;
      navigator.clipboard.writeText(text.slice(0, -11));
    });
    comments[i].appendChild(dupNode);
  }
  // document.onload 後にゴニョゴニョ DOM 生成するので適当な待ち時間を入れている
}, 7000);
