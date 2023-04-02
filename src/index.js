import "./styles.css";

const onClickAdd = () => {
  //テストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの雇用に各要素を設定
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
