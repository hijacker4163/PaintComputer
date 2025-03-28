document.getElementById('calcBtn').addEventListener('click', function() {
  // 呼叫 Netlify Functions 的 URL，預設為 /.netlify/functions/函式名稱
//   fetch('/.netlify/functions/calculate')
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById('result').innerText = `計算結果：${data.result}`;
//     })
//     .catch(err => {
//       document.getElementById('result').innerText = '錯誤：無法取得結果';
//       console.error(err);
//     });
    
    document.getElementById("result").innerText = "你點擊了按鈕！";
});
