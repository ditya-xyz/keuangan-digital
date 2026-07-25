function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(angka);
}

function hitungKeuangan() {
    // Ambil nilai input
    const pemasukan = parseFloat(document.getElementById('pemasukan').value) || 0;
    const pengeluaran = parseFloat(document.getElementById('pengeluaran').value) || 0;
    const tabungan = parseFloat(document.getElementById('tabungan').value) || 0;

    // Perhitungan Keuntungan / Sisa Bersih (Pemasukan - Pengeluaran - Tabungan)
    const keuntungan = pemasukan - pengeluaran - tabungan;
    
    // Hitung margin keuntungan (%) dari total pemasukan setelah dikurangi pengeluaran
    let margin = 0;
    if (pemasukan > 0) {
        margin = ((pemasukan - pengeluaran) / pemasukan) * 100;
    }

    // Tampilkan Hasil
    document.getElementById('resPemasukan').innerText = formatRupiah(pemasukan);
    document.getElementById('resPengeluaran').innerText = formatRupiah(pengeluaran);
    document.getElementById('resTabungan').innerText = formatRupiah(tabungan);
    document.getElementById('resKeuntungan').innerText = formatRupiah(keuntungan);
    document.getElementById('resMargin').innerText = margin.toFixed(1) + '%';

    // Status / Pesan Evaluasi
    const statusDiv = document.getElementById('statusMessage');
    if (keuntungan > 0) {
        statusDiv.className = 'status success';
        statusDiv.innerText = '🎉 Luar biasa! Keuangan kamu surplus dan aman.';
    } else if (keuntungan === 0) {
        statusDiv.className = 'status warning';
        statusDiv.innerText = '⚖️ Keuangan kamu seimbang (pas).';
    } else {
        statusDiv.className = 'status danger';
        statusDiv.innerText = '⚠️ Peringatan: Keuangan kamu minus/defisit!';
    }

    // Tampilkan section hasil
    document.getElementById('hasil').style.display = 'block';
}