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

  //button(完了)タグ生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";

  //button(削除)タグ生成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";

  //divタグの雇用に各要素を設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
