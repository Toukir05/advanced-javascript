const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaa'},
    {id: 41, name: 'Mayuri'},
    {id: 71, name: 'Deepjol'}
];

const names = students.map( s => s.name)
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>30);
const biggerOne = students.find( s => s.id>30);
console.log(biggerOne);