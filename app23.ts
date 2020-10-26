
// ЗАДАНИЕ 
// 1)создаем файл с расширение ts))
// 2) создать class функция конструктор которого принимает два параметра
// schoolName, position, salary
// создать метод который возвращает обьект с полями position, salary, и создать тип для этого обьекта и указать соответственно возвращаемый тип!
// 3) class должен описывать обязательно один метод который возвращает скулнейм, задать строгость что если его не будет чтобы typescript ругался на класс
// 4) создать enum c Positions где будут константы boss - 'Vasia', hrManager - 'Zina', sales - 'Akakiy'



interface UserModel {
    getSchoolName():string
}

class User implements UserModel {
    private schoolName = 'Hillel';
    private position = 'teacher';
    private salary = 30000;
    constructor(schoolName: string, position: string, salary: number) {
        this.schoolName = schoolName;
        this.position = position;
        this.salary = salary;
    }


     getPositionData(): PositionData {
        return {
            position: this.position,
            salary: this.salary
        }
    }
    getSchoolName(): string {
        return this.schoolName;
    }
}
const bestUser = new User('Hillel ', 'teacher', 30000);

// tsc
interface PositionData {
    position: string;
    salary: number;
}


// -------------------
enum Positions {
    BOSS = 'Vasia',
    HRMANAGER = 'Zina',
    SALES = 'Akakiy',
}