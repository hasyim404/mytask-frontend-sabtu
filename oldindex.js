// const req = {
//     body: {
//         name: "Ismail",
//         age: 20,
//     },
// };

// // destructing object
// const {
//     name,
//     age,
//     tinggi = 170
// } = req.body;
// console.log(name, age, tinggi)

// // destructing array
// const familiy = ["Michael", "Hannah", "Jonas"]
// const [suami, istri, anak] = familiy;
// console.log(suami, istri, anak)


// /**
//  * Sum
//  */
// function sum(...numbers) {
//     let hasil = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         hasil = hasil + numbers[i];
//     }

//     console.log(hasil);
// }

// sum(1, 2, 3, 4, 5)


/**
 * Spread
 */
// // Spread array
// const family = ["Micheal", "Hannah"];
// const newFamily = [...family, "Jonas"];

// // Spread object
// const user = {
//     nama: "Ismail",
//     age: 20,
// };

// const newUser = {
//     // name: "Udin",
//     ...user,
//     major: "Informatic",
// };

// console.log(newUser);


/**
 * Foreach & Map
 */
const names = ["Micheal", "Hannah", "Jonas"];

// foreach utk looping data
names.forEach(function (nama) {
    console.log(nama);
});

// map utk format data
const namaTerformat = names.map(function (nama) {
    return `Mrs/Ms. ${nama}`;
});

console.log(namaTerformat);