

const numberChecker = function (number) {
    if (number > 100) {
        return "true";

    }
    else {
        return "fals";
    };
}

const result = numberChecker(101)
console.log(result)


const minAge = 18;
const maxNumberPeople = 20;
const currentPeople = 0;

const bouncer = function (age, amountPeople) {
    if (age < minAge) {
        return "this is a club for adults";
    }
    if ((amountPeople + currentPeople) <= maxNumberPeople) {
        return "come in";
    }
    else {
        return "its to busy now, come back later";
    };
}

const canIComeIN = bouncer(15, 210);
console.log(canIComeIN);

const canIComeIN1 = bouncer(22, 21);
console.log(canIComeIN1);

const canIComeIN2 = bouncer(10, 210)
console.log(canIComeIN2)

const canIComeIN3 = bouncer(25, 10)
console.log(canIComeIN3)

const grades = [1.5, 4.9, 5.6, 3.5, 2.5]

const getAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    return average;
};

const outcome = getAverage(grades);
console.log(Math.round(outcome));
