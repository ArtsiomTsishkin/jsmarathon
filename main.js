const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let string = ''
let toString = ''

for (let i = 0; i <= firstRow.length; i++) {
    if (firstRow.charAt(i) === 'а') {
        string += i
    }
}

for (let i = 0; i <= secondRow.length; i++) {
    if (secondRow.charAt(i) === 'а') {
        toString += i
    }
}
function getRow() {
    string.length > toString.length ? console.log(firstRow):console.log(secondRow)
}
getRow()
