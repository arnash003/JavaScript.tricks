// The void operator returns an undefined value from an evaluated expression, or in other word;
// the void operator specifies an expression to be evaluated without returning a value
// It is commonly used in the client-side, JavaScript, where the browser should not display the value

function getYear() {
    return 2020;
};

console.log(getYear());
// Output
// 2020

console.log(void getYear());
// Output
// undefined

// usefull use case

button.onClick = () => void getYear();