function printBinary() {
    const bits = getBitsForSignedNumber();
    console.log(`The bits for number is: ${bits+1}`);

    console.log(`The Number.MAX_VALUE is: ${Number.MAX_VALUE}`);
    console.log(`The Number.MAX_SAFE_INTEGER is (2**53 - 1): ${Number.MAX_SAFE_INTEGER}`);
    console.log(`The Number.MIN_VALUE is: ${Number.MIN_VALUE}`);
    console.log(`The Number.MIN_SAFE_INTEGER is: ${Number.MIN_SAFE_INTEGER}`);

    const input = prompt(`please input number`);

    const number = Number(input);
    console.log(`The binary of ${number} is:`);

    const binaryArr = [];
    for (let i = bits; i >= 0; i--) {
        binaryArr.push((number & 1 << i) == 0 ? '0' : '1');
        if (i % 8 === 0) {
            binaryArr.push(' ');
        }
    }

    console.log(binaryArr.join(''));
}

function getBitsForSignedNumber() {
    const number = 1;
    let bits = 1;

    while ((number << bits) > 0) {
        bits++;
    }

    return bits;
}

printBinary();

/*
JavaScript Uses 32 bits Bitwise Operands

JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
*/