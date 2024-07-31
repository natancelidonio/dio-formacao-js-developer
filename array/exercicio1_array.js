// 1) Crie um programa que dado um número imprima a sua tabuada.
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
for (let i = 1; i <= 10; i++) {
    let base = i;
    for (let j = 1; j <= 10; j++) {
        console.log(`${base} x ${j} = ${base * j}`);
    }
}