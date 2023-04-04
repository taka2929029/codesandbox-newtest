import "./styles.css";

const onClickAdd = () => {
  //テストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createimcompletelist(inputText);
};

//未完了リストから指定の要素を削除
const deletefromincompletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createimcompletelist = (text) => {
  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";

  completebutton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了タスクから削除
    deletefromincompletelist(completebutton.parentNode);
    // const completeTarget = completebutton.parentNode;
    // document.getElementById("incomplete-list").removeChild(completeTarget);

    //完了リストに追加する
    const addtarget = completebutton.parentNode;

    //TODO内容テキストを取得
    const text = addtarget.firstElementChild.innerText;

    //div以下を初期化
    addtarget.textContent = null;

    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタンの生成
    const buckbutton = document.createElement("button");
    buckbutton.innerText = "戻す";

    buckbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = buckbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = deleteTarget.firstElementChild.innerText;
      createimcompletelist(text);
    });

    //divタグの子要素に各要素設定
    addtarget.appendChild(li);
    addtarget.appendChild(buckbutton);

    document.getElementById("complete-list").appendChild(addtarget);
  });

  //button(削除)タグ生成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";

  deletebutton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了タスクから削除
    deletefromincompletelist(deletebutton.parentNode);
    // const deleteTarget = deletebutton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

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
