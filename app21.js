// ЗАДАНИЕ
// С помощью module fs необходимо:

// 1)создать папку, и 3 файлы любым именем ( предусмотреть папка создавалась если не существует)
// 2)Реалиовать удаление всех файлов в текущей папке( метод unlink)
// 3)Cоздать текстовый файл с любым содержимым и считать содержимое и перенести любой другой файл.



const http = require('http')
const url = require('url');
const fs = require('fs');
const util = require('util');

const mkdirAsync = util.promisify(fs.mkdir);
const folders = ['test-folder1', 'test-folder2', 'test-folder3'];
async function run() {
    const createFolders = folders.map(folder => mkdirAsync(folder));
    await Promise.all(createFolders);
    const [firstFolder] = folders;
    fs.writeFileSync(`${firstFolder}/text.txt`, 'Hello world');
    fs.writeFileSync(`${firstFolder}/text2.txt`, 'Hello world');
    fs.writeFileSync(`${firstFolder}/text3.txt`, 'Hello world');
    await fs.unlinkSync(`${firstFolder}/text.txt`, 'Hello world');
    await fs.unlinkSync(`${firstFolder}/text2.txt`, 'Hello world');
    await fs.unlinkSync(`${firstFolder}/text3.txt`, 'Hello world');

    console.log('--------------------GOOD-----------------!!!');
}
run();

async function createFile() {
    const newFile = fs.writeFileSync('NEWFILE.txt', '+Hello Hillel');
    const newFile2 = fs.writeFileSync('NEWFILE2.txt', 'Текст на момент создания файла');
    const readFile = fs.readFileSync('NEWFILE.txt');
    console.log(String(readFile));
    const addToFile = fs.appendFileSync('NEWFILE2.txt', String(readFile));
    console.log(addToFile);
    console.log('-----------New file Start--------------')
}
createFile();





