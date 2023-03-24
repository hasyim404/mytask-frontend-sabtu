// const name = "Muhammad Ismail";
// const age = 20;
// const isMarried = false;

// const greeting = `
// Hai nama saya: ${name}
// Umur saya: ${age}
// `;

// console.log(greeting);


/**
 * Conditional
 */

// const nilai = 90;

// if (nilai > 90) {
//     console.log("A");
// } else if (nilai > 80) {
//     console.log("B");
// } else if (nilai > 70) {
//     console.log("C");
// } else {
//     console.log("D")
// };

/**
 * Looping
 */
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

/**
 * Function
 */
// Function Declaration
// function hitungUmur(tahunLahir) {
//     const tahunSekarang = 2023;
//     const umur = tahunSekarang - tahunLahir;
//     return umur;
// };

// Function Expression
// const hitungUmurMhs = (tahunLahir) => {
//     const tahunSekarang = 2023;
//     const umur = tahunSekarang - tahunLahir;
//     return umur;
// };

// Arrow Function
// Versi singkat
// const hitungUmurArw = (tahunLahir) => 2023 - tahunLahir;
// console.log(hitungUmur(2002));


/**
 * Array
 */
// const animals = ["kucing", "anjing", "ikan", "burung"];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

/**
 * Object
 */
const user = {
    nama: "Muhammad Ismail",
    umur: 20,
    alamat: "Bogor",
};

// console.log(user.nama, user["umur"]);
for (let label in user) {
    console.log(user[label]);
    // console.log(typeof user[label]);
};