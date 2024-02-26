/**
 * 타입스크립트의 클래스
 */
const employee = {
    name: "chuck",
    age: 26,
    position: "developer",
    work() {
        console.log("일함");
    },
};

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    public static of(employee: Employee, officeNumber:number): ExecutiveOfficer {
        return new ExecutiveOfficer(employee.name, employee.age, employee.position, officeNumber);
    }

}

const employeeB = new Employee("hongchanhui", 26, "개발자");
console.log(employeeB);

const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
}