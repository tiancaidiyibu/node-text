const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from('a')
console.log(buf2.toString())


const buf3 = Buffer.from('Buffer创建⽅方法');
console.log(buf3);



const buf4 = Buffer.concat([buf3, buf2]);
 console.log(buf4.toString());