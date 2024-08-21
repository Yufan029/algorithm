1. bit operator.
2. Get the binary.
3. JavaScript Uses 32 bits Bitwise Operands
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

4. 负数以补码的形式存贮在计算机中，负数二进制和对应的正数二进制可以通过取反加一得到。
5. 精髓就是：取反 --> 加一

6. Use node to run it, no need the html file.