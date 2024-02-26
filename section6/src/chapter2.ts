/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */
class Employee {
    // 필드
    private name: string;
    protected age: number;
    public position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
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

    // public static of(employee: Employee, officeNumber:number): ExecutiveOfficer {
    //     return new ExecutiveOfficer(employee.name, employee.age, employee.position, officeNumber);
    // }

    public func() {
        // this.name; // Error!
        this.age;
    }
}

const employee = new Employee("chuck", 26, "developer");
// employee.name = "chuck chuck"; // Error!
// employee.age = 30; // Error!
employee.position = "designer";