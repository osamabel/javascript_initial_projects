
const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn','Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
'Bent,Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo,Frank',
'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// 1. Filter the list of inventors for those who were born in the 1500's [1500 -> 1599]
const filterList = inventors.filter( (e) => {
	return (e.year >= 1500 && e.year <= 1599)
})
console.table(filterList);


// 2. Give us an array of the inventory first and last names
const mapList = inventors.map( (e) => {
	return `${e.first}, ${e.last}`
})
console.table(mapList);


// 3. Sort the inventors by birthdate, oldest to youngest
const sortList = inventors.sort( (a,b) => {
	if (a.year > b.year)
		return 1;
	return -1;
});
console.table(sortList);


// 4. How many years did all the invetors live?
const reduceList = inventors.reduce((totale, e) => {
	return totale + e.passed - e.year;
},0)
console.table(reduceList);

// 5. Sort the inventors by years lived
const sortListLive = inventors.sort( (a,b) => {
	if (a.passed - a.year > b.passed - b.year)
		return -1;
	return 1;
});
console.table(sortListLive);


// 6. create a ist of Boulevards in Paris that contain 'de' anywhere in the name

// 7. sort Exercise

// Sort the people afphabeticaley by ast name

// 8. Reduce Exercise