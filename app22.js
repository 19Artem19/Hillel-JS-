// ЗАДАНИЕ 

// 1) Заимлементить сервер на порту 3000

// 2) Сервер должен реагировать на POST запрос /user , принимая такое body { school: 'Hillel', course: 'javascript pro'}, и необходимо добавить поле teacher: 'Sergei' к этому обьекту и вернуть его

// 3)Устанавливаем монго!

fetch('http://localhost:3000/user', {
  method: 'POST', headers: {
    'Content-Type': 'application/json'
  }, body: JSON.stringify({ school: 'Hillel', course: 'javascript pro' })
}).then(data => data.json()).then(result => console.log(result));

let http = require("http");
let url = require("url");
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'content-type');
    const methods = ["POST", "OPTIONS"];
    if (methods.includes(req.method) && req.url === "/user") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      })
        .on("end", () => {
          console.log(body);
          body = String(body);
          console.log(body);
          if (body) {
            const lovelyTeacher = JSON.parse(body);
            lovelyTeacher.teacher = 'Sergei';
            res.end(JSON.stringify(lovelyTeacher));
          }
          res.end(JSON.stringify({}))
        });
    }
  })
  .listen(3000, () =>
    console.log("Server is listening on port:" + 3000)
  );