// ЗАДАНИЕ
// 1) необходимо написать сервер, который будет работать на порту 8090

// 2) при отправке гет запроса с таким урлом http://localhost:8090/user// необходимо вернуть одного юзера { userName: 'Boria', id: 1, email: 'boria23@gmail.com'}
// 3) при отправке гет запроса с таким урлом http://localhost:8090/users?id=1, где id может быть одно из чисел которое соответствует одному из id с массива users. В случае если такого юзера не существует то вернуть текст "User with following id does not exist"
// имея
// const users = [
// { userName: 'Boria', id: 1, email: 'boria23@gmail.com'},
// { userName: 'Vasia', id: 2, email: 'boria23@gmail.com'},
// { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
// { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
// { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
// ];

const http = require('http')
const url = require('url');
const users = [

    { userName: 'Boria', id: 1, email: 'boria23@gmail.com' },

    { userName: 'Vasia', id: 2, email: 'boria23@gmail.com' },

    { userName: 'Misha', id: 3, email: 'boria23@gmail.com' },

    { userName: 'Misha', id: 3, email: 'boria23@gmail.com' },

    { userName: 'Misha', id: 3, email: 'boria23@gmail.com' },

];

http.createServer((req, res) => {
    //console.log(req.url);
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(req.url);
    const uri = url.parse(req.url, true);
    const query = uri.query;
    // query.id
    console.log(query);
    console.log(uri.host);
    console.log(uri.pathname);
    console.log(uri.search);
    const pathName = uri.pathname;
    if (pathName === '/users') {
        const someError = "User with following id does not exist";
        const result = users.filter((el) => el.id == query.id);
        res.end(JSON.stringify(result ? result : someError));
    }
    else if (req.url === '/user') {
        res.end(JSON.stringify(users.find((el) => el.id == 1)));
    }
}).listen(8090, () => console.log('Server START on port 8090'))
