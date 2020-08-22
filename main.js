const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';


const liter = 'a'


getRow =(firstRow,secondRow ) => {
    let string = 0;
    let toString = 0;
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) === 'а') {
            string++
        }
    }

    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) === 'а') {
            toString++
        }
    }

   return  string>toString?console.log(firstRow):console.log(secondRow)
}


    getRow(firstRow, secondRow)

