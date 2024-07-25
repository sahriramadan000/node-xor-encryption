
# README

## Daftar Isi
1. [Pendahuluan](#pendahuluan)
2. [Prasyarat](#prasyarat)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Penjelasan](#penjelasan)
6. [Catatan Penting](#catatan-penting)

## Pendahuluan
Program ini menyediakan implementasi sederhana enkripsi dan dekripsi menggunakan teknik XOR cipher dasar. Pengguna dapat mengenkripsi pesan plaintext dan mendekripsi ciphertext menggunakan kunci yang ditentukan. Pesan yang dienkripsi dan didekripsi disimpan dalam file.

## Prasyarat
Untuk menjalankan program ini, Anda perlu menginstal Node.js versi 22 di komputer Anda.

## Instalasi
1. Clone repository ini atau unduh kode sumbernya.
2. Buka terminal dan navigasikan ke direktori yang berisi kode sumber.

## Penggunaan
1. Pastikan Anda telah menginstal Node.js versi 22.
2. Di terminal, navigasikan ke direktori yang berisi file program.
3. Jalankan program dengan perintah:
   ```bash
   node index.js
   ```
   Ganti `index.js` dengan nama file yang berisi program.

4. Ikuti instruksi di layar untuk:
   - Memilih operasi: enkripsi (1), dekripsi (2), atau keluar (3).
   - Memasukkan kunci dan plaintext untuk enkripsi.
   - Memasukkan kunci untuk dekripsi.

## Penjelasan
- **Proses Enkripsi**:
  - Program menerima pesan plaintext dan kunci sebagai input.
  - Program menyimpan plaintext ke dalam file bernama `plaintext-before.txt`.
  - Program melakukan enkripsi XOR menggunakan kunci yang diberikan dan menyimpan pesan yang dienkripsi ke `cipher.txt`.

- **Proses Dekripsi**:
  - Program menerima kunci sebagai input.
  - Program membaca pesan yang dienkripsi dari `cipher.txt`.
  - Program melakukan dekripsi XOR menggunakan kunci yang diberikan dan menyimpan pesan yang didekripsi ke `plaintext-after.txt`.

- **Interaksi Pengguna**:
  - Program menggunakan modul `readline` untuk meminta input dari pengguna dan menampilkan pesan.
  - Program menampilkan pesan dalam warna hijau untuk menunjukkan operasi yang berhasil dan warna merah untuk kesalahan.

## Catatan Penting
- Pastikan kunci yang digunakan untuk enkripsi dan dekripsi sama agar dapat memperoleh kembali plaintext asli.
- Metode enkripsi XOR yang digunakan di sini hanya untuk tujuan edukasi dan tidak cocok untuk mengamankan data sensitif dalam aplikasi dunia nyata.
- File `plaintext-before.txt`, `cipher.txt`, dan `plaintext-after.txt` akan dibuat di direktori yang sama dengan program. Pastikan Anda memiliki izin tulis yang diperlukan.

Dengan mengikuti instruksi di atas, Anda dapat dengan mudah menjalankan dan memahami fungsi dasar dari program enkripsi dan dekripsi ini. Jika Anda mengalami masalah, pastikan Node.js versi 22 terinstal dengan benar dan Anda memiliki izin yang diperlukan untuk membuat dan menulis file di direktori tersebut.
