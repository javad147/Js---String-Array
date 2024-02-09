function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

let originalString = "Cavid";
let reversedString = reverseString(originalString);
console.log(reversedString);
  
  function yearFromAge(age) {
    return new Date().getFullYear() - age;
}
let age = 30;
let birthYear = yearFromAge(age);
console.log(birthYear);

let person1 = {
    id: 1,
    name: "Javad",
    fullName: "Javad Bakirli",
    age: 32,
    salary: 3500,
};

let person2 = {
    id: 2,
    name: "Nazim",
    fullName: "Nazim Bakirli",
    age: 60,
    salary: 4000,
};

let person3 = {
    id: 3,
    name: "Nijat",
    fullName: "Nijat Bakirli",
    age: 28,
    salary: 1800,
};

let person4 = {
    id: 4,
    name: "Zaur",
    fullName: "Zaur Alakbarov",
    age: 23,
    salary: 800,
};

let person5 = {
    id: 5,
    name: "Emin",
    fullName: "Emin Aliyev",
    age: 34,
    salary: 830,
};

let people = [person1, person2, person3, person4, person5];

function getTotalPeopleCount(peopleArray) {
    return peopleArray.length;
}

console.log(getTotalPeopleCount(people));

function getAverageSalary(peopleArray) {
    if (peopleArray.length === 0) {
        return 0;
    }

    let totalSalary = peopleArray.reduce((sum, person) => sum + person.salary, 0);
    return totalSalary / peopleArray.length;
}

console.log(getAverageSalary(people));

function searchPeopleByFullName(peopleArray, searchText) {
    if (!searchText) {
        return peopleArray;
    }

    searchText = searchText.toLowerCase();
    return peopleArray.filter(person => person.fullName.toLowerCase().includes(searchText));
}

let searchResult = searchPeopleByFullName(people, 'Bakirli');
searchResult.forEach(person => {
    console.log(`ID: ${person.id}, Name: ${person.name}, Full Name: ${person.fullName}, Age: ${person.age}, Salary: ${person.salary}`);
});

