// if / else
if (true) {
    alert('male');
};

if ('male' === 'male') {
    alert('male');
};



// Function
function whatIsMyFavColor () {
    
}

// or (better)
var area = function (width, height) {
    return width * height;
}

var fullname = function (firstname, secondname) {
    return firstname + " " + secondname;
}


var whatIsMyFavColor = function () {
    return 'blue';
}

var doSomething = function () {
    console.log("do something!!!");
}

// Anything after return doesn't run
var whatIsMyFavColor = function () {
    return false;
    return true;
    return 'blue';
}

// Variables
var favColor = 'blue';
var myFavColors = ['blue', 'red', 'green'];
var numOfFavColors = 3;
var hasGotFavColors = true;
var venObject = {
    firstName: 'Marc Steven',
    lastName: 'Carbon',
    favColors: ['blue', 'red', 'green'],
    age: 10,
    isMale: true;
}

venObject.age;
