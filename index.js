const fs = require('fs').promises;
const readline = require('readline');
const { red, green } = require('colorette');

// Fungsi untuk enkripsi
async function encrypt(key, plaintext) {
    const inputFilePath = 'plaintext-before.txt';
    const outputFilePath = 'cipher.txt';

    try {
        // Simpan plaintext ke file sebelum enkripsi
        await fs.writeFile(inputFilePath, plaintext);
        console.log(green('================================================================'));
        console.log(green('---> [Message] : Plaintext saved successfully.'));
        console.log(green('================================================================'));

        const keyLength = key.length;
        let encryptedText = '';

        for (let i = 0; i < plaintext.length; i++) {
            const charCode = plaintext.charCodeAt(i);
            const keyChar = key.charCodeAt(i % keyLength);
            const encryptedCharCode = charCode ^ keyChar;
            encryptedText += String.fromCharCode(encryptedCharCode);
        }

        await fs.writeFile(outputFilePath, encryptedText);
        console.log(green('---> [Plaintext] : '+ plaintext));
        console.log(green('---> [Key] : '+ key));
        console.log(green('---> [Result Encrypt] : '+ encryptedText));
        console.log(green('================================================================'));
        console.log(green('---> [Message] : File encrypted successfully.'));
        console.log(green('================================================================\n'));
    } catch (err) {
        console.log(green('================================================================'));
        console.error(red('---> [Message] : Error:', err));
        console.log(green('================================================================\n'));
    }
}

// Fungsi untuk dekripsi
async function decrypt(key) {
    const inputFilePath = 'cipher.txt';
    const outputFilePath = 'plaintext-after.txt';

    try {
        const data = await fs.readFile(inputFilePath, 'utf8');

        const keyLength = key.length;
        let decryptedText = '';

        for (let i = 0; i < data.length; i++) {
            const charCode = data.charCodeAt(i);
            const keyChar = key.charCodeAt(i % keyLength);
            const decryptedCharCode = charCode ^ keyChar;
            decryptedText += String.fromCharCode(decryptedCharCode);
        }

        await fs.writeFile(outputFilePath, decryptedText);
        console.log(green('================================================================'));
        console.log(green('---> [Key] : '+ key));
        console.log(green('---> [Result Decrypt (Plaintext)] : '+ decryptedText));
        console.log(green('================================================================'));
        console.log(green('---> [Message] : File decrypted successfully.'));
        console.log(green('================================================================\n'));
    } catch (err) {
        console.log(green('================================================================'));
        console.error(red('---> [Message] : Error:', err));
        console.log(green('================================================================\n'));
    }
}

// Fungsi untuk meminta input dari pengguna dan menjalankan operasi yang dipilih
async function requestInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (query) => new Promise((resolve) => rl.question(query, resolve));

    while (true) {
        console.log(green('================================================================'));
        const choice = await question(green('Pilih operasi (1 untuk enkripsi, 2 untuk dekripsi, 3 untuk keluar): '));
        
        if (choice === '1') {
            const key = await question(green('Kata kunci: '));
            const plaintext = await question(green('Masukkan plaintext: '));
            await encrypt(key, plaintext);
        } else if (choice === '2') {
            const key = await question(green('Kata kunci: '));
            await decrypt(key);
        } else if (choice === '3') {
            console.log(green('================================================================'));
            console.log(green('Program selesai.'));
            console.log(green('================================================================\n'));
            rl.close();
            break;
        } else {
            console.log(green('================================================================'));
            console.log(red('---> [Message] : Operasi tidak valid.'));
            console.log(green('================================================================\n'));
        }
    }
}

// Mulai program
requestInput();
