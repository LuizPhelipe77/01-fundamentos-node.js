

process.stdin
    .pipe(process.stdout)

import { Readable, Transform, Writable } from 'node:stream'

class OneToHunbredStrem extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
    
                this.push(buf)
            }
        }, 1000)
    }
}

class InvarseNumber extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed =  Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transformed)))
    }
}

class MultiplayByTenStrem extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new OneToHunbredStrem() 
    .pipe(new InvarseNumber())
    .pipe(new MultiplayByTenStrem())