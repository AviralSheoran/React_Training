let v = [2, 234, 52, 251, 290, 20];

let a = 0;

for (let i = 0; i < 6; i++) {
    if (v[i] > a) {
        a = v[i];
    }
}

console.log(a);
