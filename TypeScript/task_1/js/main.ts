interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

//  const teacher3: Teacher = {
//    firstName: 'John',
//    fullTimeEmployee: false,
//    lastName: 'Doe',
//    location: 'London',
//    contract: false,
//  };

// console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

//  const director1: Directors = {
//    firstName: 'John',
//    lastName: 'Doe',
//    location: 'London',
//    fullTimeEmployee: true,
//    numberOfReports: 17,
//  };

//  console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

//  printTeacher("John", "Doe") -> J. Doe
//  console.log(printTeacher);

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
