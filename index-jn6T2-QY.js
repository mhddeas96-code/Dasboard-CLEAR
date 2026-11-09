(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const o=a=>String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),b=(a,e)=>Number(a).toLocaleString("id-ID",{minimumFractionDigits:e??0,maximumFractionDigits:e??1}),E=(a,e=a.value)=>`${b(e,a.unit==="t/jam"?1:0)} ${a.unit}`,na=a=>a?a.slice(0,8):"";function Ga(a){try{const e=localStorage.getItem(a);return e?JSON.parse(e):null}catch{return null}}function xa(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}let ga;function k(a,e="info"){const n=document.getElementById("toast");n&&(n.textContent=a,n.dataset.tone=e,n.hidden=!1,clearTimeout(ga),ga=setTimeout(()=>n.hidden=!0,e==="bad"?6e3:3500))}const h=(a,e)=>`<span class="pill" data-tone="${a}">${o(e)}</span>`,qa={diterima:["ok","Diterima"],dikoreksi:["info","Dikoreksi"],substitusi:["warn","Substitusi"],menunggu:["warn","Menunggu persetujuan"],koreksi:["warn","Koreksi diajukan"]};function _a(a){const[e,n]=qa[a.status]||["muted",a.status];return h(e,a.status==="dikoreksi"?`${n} · rev ${a.revCount+1}`:n)}const Na={gauge:'<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',factory:'<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',bank:'<path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M12 2 20 7H4z"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',book:'<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h8"/><path d="M8 11h6"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',check:'<path d="M20 6 9 17l-5-5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',back:'<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',play:'<path d="M6 3l14 9-14 9z"/>',reset:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',glossary:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',alert:'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',skip:'<path d="m5 4 10 8-10 8z"/><path d="M19 5v14"/>'},d=(a,e=18)=>`<svg class="ic" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${Na[a]||""}</svg>`,la={ledger:{t:"Ledger",d:"Buku catatan digital bersama. Isinya hanya bisa ditambah. Catatan lama tidak bisa dihapus atau diubah diam-diam."},cems:{t:"CEMS",d:"Continuous Emission Monitoring System. Sensor di cerobong pabrik yang mengukur emisi terus-menerus, setiap jam."},sispek:{t:"SISPEK",d:"Sistem milik Kementerian Lingkungan Hidup (KLH) yang menerima data sensor CEMS dari pabrik secara otomatis."},pspk:{t:"PSPK 1 dan 2",d:"Standar laporan keberlanjutan Indonesia, setara IFRS S1 dan S2, berlaku mulai 1 Januari 2027. PSPK 2 mengatur pengungkapan iklim, termasuk emisi."},assurance:{t:"Assurance",d:"Pemeriksaan oleh pihak independen untuk memastikan informasi dalam laporan bisa dipercaya. Mirip audit laporan keuangan."},issa:{t:"ISSA 5000",d:"Standar internasional untuk assurance laporan keberlanjutan, berlaku untuk periode mulai 15 Desember 2026."},limited:{t:"Limited assurance",d:"Pemeriksaan terbatas. Auditor menyatakan tidak menemukan hal yang membuat informasi tampak salah. Lebih ringan dan lebih murah."},reasonable:{t:"Reasonable assurance",d:"Pemeriksaan memadai yang lebih mendalam. Auditor menyatakan informasi sudah benar secara material, setara keyakinan audit laporan keuangan."},scope1:{t:"Emisi Scope 1",d:"Emisi langsung dari sumber milik perusahaan, misalnya cerobong pabrik dan bahan bakar alat berat."},tkbi:{t:"TKBI",d:"Taksonomi untuk Keuangan Berkelanjutan Indonesia dari OJK. Panduan untuk menilai apakah suatu kegiatan termasuk kegiatan hijau."},greenwashing:{t:"Greenwashing",d:"Klaim ramah lingkungan yang berlebihan atau tidak didukung bukti."},sidik:{t:"Sidik digital",d:"Kode unik yang dihitung dari isi sebuah catatan. Kalau isinya berubah sedikit saja, kodenya ikut berubah, sehingga perubahan diam-diam langsung ketahuan."},sll:{t:"Sustainability-linked loan",d:"Pinjaman yang bunganya bisa turun bila target keberlanjutan yang disepakati tercapai dan diverifikasi pihak independen."},ojk:{t:"OJK",d:"Otoritas Jasa Keuangan. Dalam CLEAR, OJK mengelola ledger dan mengawasi pelaporan."},klh:{t:"KLH",d:"Kementerian Lingkungan Hidup. Mengelola SISPEK dan data sensor CEMS."},komite:{t:"Komite Keberlanjutan",d:"Komite di bawah Dewan Komisaris yang menelaah laporan keberlanjutan sebelum dikirim ke auditor."},offset:{t:"Kredit offset",d:"Kredit karbon yang dibeli perusahaan untuk “mengimbangi” emisinya. Kualitasnya beragam, dan sebagian tidak benar-benar mengurangi emisi."},pojk:{t:"POJK 51/2017",d:"Peraturan OJK tentang keuangan berkelanjutan. Lampiran II-nya masih mencantumkan verifikasi independen sebagai “jika ada”."}},va=(a,e)=>la[a]?`<button type="button" class="term" data-term="${a}" aria-haspopup="dialog">${e}</button>`:e,j=(a,e)=>va(a,o(e)),q=a=>o(a).replace(/\[\[(\w+)\|([^\]]+)\]\]/g,(e,n,s)=>va(n,s)),ya={cems:{tone:"s1",ic:"gauge",title:"CEMS dan SISPEK",sub:"Pemantauan emisi",owner:"KLH",ranah:"Ranah teknis",body:"Sensor [[cems|CEMS]] di cerobong mencatat emisi setiap jam. Data dikirim ke [[sispek|SISPEK]] milik KLH, lalu diteruskan ke ledger. Sensor ini sudah wajib di sepuluh kategori industri, misalnya semen dan pembangkit listrik termal.",feeds:"Mengirim data emisi ke ledger"},pspk:{tone:"s2",ic:"file",title:"PSPK 1 dan PSPK 2",sub:"Pelaporan keberlanjutan",owner:"DSK IAI",ranah:"Ranah tata kelola",body:"Angka di ledger disusun menjadi laporan keberlanjutan sesuai [[pspk|PSPK 1 dan 2]]. Setiap angka di laporan wajib menunjuk ke entri ledger. Laporan disetujui Direksi dan ditelaah [[komite|Komite Keberlanjutan]], jadi penyusun dan pengawasnya berbeda.",feeds:"Menautkan setiap angka laporan ke ledger"},issa:{tone:"s3",ic:"shield",title:"ISSA 5000",sub:"Assurance independen",owner:"IAPI",ranah:"Ranah regulasi",body:"Pemeriksa independen menelusuri angka laporan sampai ke sensor, sesuai [[issa|ISSA 5000]]. Pemeriksaan dibuat wajib, bertahap dari [[limited|limited]] menuju [[reasonable|reasonable assurance]]. Kesimpulannya dicatat kembali ke ledger.",feeds:"Menelusuri bukti dan mencatat hasil pemeriksaan"},dana:{tone:"s4",ic:"bank",title:"Insentif pembiayaan bersyarat",sub:"Pembiayaan berkelanjutan",owner:"Lembaga pembiayaan",ranah:"Ranah pasar",body:"Bank menjadikan laporan [[assurance|assurance]] sebagai syarat green loan, green bond, sukuk hijau, atau [[sll|sustainability-linked loan]]. Dengan izin perusahaan, bank memeriksa bukti langsung di ledger. Bila target tercapai dan terverifikasi, margin bunga bisa turun.",feeds:"Membaca ledger atas persetujuan perusahaan"}};let da="cems";function Ha(a,e){if(a==="pick")da=e.dataset.id;else return!1}function J(a){const e=ya[a];return`<button class="comp" data-tone="${e.tone}" data-act="pick" data-id="${a}" aria-pressed="${da===a}">
    <span class="comp-ic">${d(e.ic,20)}</span>
    <span class="comp-sub">${o(e.sub)}</span>
    <span class="comp-title">${o(e.title)}</span>
    <span class="comp-feed">${o(e.feeds)}</span>
  </button>`}function Ja(){const a=ya[da];return`
<section class="hero wrap">
  <div class="hero-copy">
    <p class="eyebrow">Credible Ledger for Emission Assurance and Reporting</p>
    <h1>Setiap angka emisi harus bisa ditunjukkan asal-usulnya.</h1>
    <p class="lead">Seperti struk belanja yang membuktikan setiap angka di tagihan, CLEAR menyimpan bukti di balik setiap angka emisi perusahaan. Sensor pabrik, laporan, auditor, dan bank memakai satu ${j("ledger","catatan bersama")} yang tidak bisa dihapus.</p>
    <div class="cta-row">
      <a class="btn btn-primary btn-lg" href="#demo">${d("play")} Coba demo · 5 menit</a>
      <a class="btn btn-lg" href="#ledger">Buka prototipe ${d("arrow")}</a>
    </div>
    <p class="fine">Prototipe konsep dari esai Accounting Parade 2026. Nama perusahaan, orang, dan angka adalah data contoh.</p>
  </div>
  <figure class="trace" aria-label="Contoh penelusuran satu angka emisi dari laporan sampai sensor">
    <div class="trace-node" data-tone="s2"><span class="trace-k">Laporan keberlanjutan</span><span class="trace-v">Scope 1 · <b>1.202.040</b> tCO₂e</span></div>
    <div class="trace-node" data-tone="ink"><span class="trace-k">Assurance ledger · OJK</span><span class="trace-v mono">LDG-28-K1 · 8.784 entri</span></div>
    <div class="trace-node" data-tone="s1"><span class="trace-k">SISPEK · KLH</span><span class="trace-v">Kiriman jam-an, cocok dengan ledger</span></div>
    <div class="trace-node" data-tone="s1"><span class="trace-k">Sensor CEMS Kiln 1</span><span class="trace-v">Analyzer CO₂ · kalibrasi 13 Mar 2028</span></div>
    <figcaption>Dari laporan sampai sensor, dalam empat langkah.</figcaption>
  </figure>
</section>

<section class="band band-alt quick">
  <div class="wrap">
    <p class="eyebrow">CLEAR dalam 30 detik</p>
    <ol class="quick-steps">
      <li data-tone="s1">${d("gauge",26)}<h3>Catat</h3><p>Sensor pabrik mengirim angka emisi setiap jam ke satu ${j("ledger","ledger")}. Koreksi tercatat beserta alasannya.</p></li>
      <li data-tone="s3">${d("shield",26)}<h3>Periksa</h3><p>Laporan disusun dari ledger, lalu auditor independen menelusuri setiap angka sampai ke sensornya.</p></li>
      <li data-tone="s4">${d("bank",26)}<h3>Manfaatkan</h3><p>Bank memakai hasil pemeriksaan sebagai syarat pembiayaan hijau berbunga lebih rendah.</p></li>
    </ol>
  </div>
</section>

<section class="band paths-band">
  <div class="wrap">
    <p class="eyebrow">Mulai dari peranmu</p>
    <h2>Lihat CLEAR dari sudut pandang yang paling dekat denganmu.</h2>
    <div class="paths">
      <a class="path" href="#demo" data-tone="ink">${d("play",22)}<b>Baru mengenal CLEAR</b><span>Ikuti demo terpandu 5 langkah</span>${d("arrow",18)}</a>
      <a class="path" href="#ledger" data-tone="s1">${d("factory",22)}<b>Perusahaan</b><span>Catat data, ajukan koreksi, susun laporan</span>${d("arrow",18)}</a>
      <a class="path" href="#assurance" data-tone="s3">${d("shield",22)}<b>Auditor</b><span>Telusuri angka dan terbitkan kesimpulan</span>${d("arrow",18)}</a>
      <a class="path" href="#pembiayaan" data-tone="s4">${d("bank",22)}<b>Bank</b><span>Periksa prasyarat pembiayaan hijau</span>${d("arrow",18)}</a>
      <a class="path" href="#publik" data-tone="s2">${d("users",22)}<b>Masyarakat</b><span>Baca ringkasan emisi yang sudah diperiksa</span>${d("arrow",18)}</a>
    </div>
  </div>
</section>
<section class="band band-alt">
  <div class="wrap">
    <p class="eyebrow">Masalahnya</p>
    <h2>Perusahaan wajib melapor emisi, tapi belum wajib membuktikannya.</h2>
    <div class="stats">
      <div class="stat"><span class="stat-n">97%</span><span class="stat-t">perusahaan besar dunia sudah mengungkapkan informasi keberlanjutan pada 2024.</span></div>
      <div class="stat"><span class="stat-n">75%</span><span class="stat-t">yang laporannya diperiksa pihak independen (${j("assurance","assurance")}), itu pun sering hanya sebagian.</span><span class="src">IFAC, AICPA &amp; CIMA, 2026</span></div>
      <div class="stat"><span class="stat-n">2,7%</span><span class="stat-t">emisi Scope 2 Telkom 2024 ternyata tercatat terlalu rendah. Baru ketahuan setelah ada assurance.</span><span class="src">Telkom Indonesia, 2026</span></div>
    </div>
    <div class="ranah">
      <article>${d("file",20)}<h3>Regulasi</h3><p>${j("pojk","POJK 51/2017")} masih mencantumkan verifikasi independen sebagai “jika ada”.</p></article>
      <article>${d("gauge",20)}<h3>Teknis</h3><p>Tanpa pemeriksaan, perusahaan kurang terdorong membuat catatan yang bisa ditelusuri.</p></article>
      <article>${d("bank",20)}<h3>Pasar</h3><p>${j("offset","Kredit offset")} murah berkualitas rendah tetap laku karena buktinya jarang diperiksa.</p></article>
      <article>${d("users",20)}<h3>Tata kelola</h3><p>Siapa yang mengelola data, mengawasi laporan, dan menindaklanjuti temuan sering tidak jelas.</p></article>
    </div>
    <p class="punch">Keempatnya bermuara pada satu hal: klaim emisi belum terhubung dengan bukti yang bisa diperiksa.</p>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <p class="eyebrow">Solusinya</p>
    <h2>Empat alat yang sudah ada, disambungkan oleh satu ledger.</h2>
    <p class="lead narrow">CLEAR tidak membuat lembaga baru. Sensor, standar laporan, standar pemeriksaan, dan pembiayaan hijau sudah ada, tetapi berjalan sendiri-sendiri. Ledger yang dikelola OJK menjadi titik temu keempatnya. Pilih satu komponen untuk melihat perannya.</p>
    <div class="system">
      <div class="sys-col">${J("cems")}${J("dana")}</div>
      <div class="ledger-core">
        <span class="core-k">Assurance ledger · dikelola OJK</span>
        <ol class="core-list">
          <li><b>Sumber data</b><span>Data CEMS dari SISPEK dan inventarisasi gas rumah kaca</span></li>
          <li><b>Metode pengukuran</b><span>Cara setiap angka dihitung</span></li>
          <li><b>Riwayat perubahan</b><span>Koreksi dicatat beserta alasannya, nilai lama tetap ada</span></li>
          <li><b>Hasil pemeriksaan</b><span>Cakupan, tingkat keyakinan, dan kesimpulan assurance</span></li>
        </ol>
      </div>
      <div class="sys-col">${J("pspk")}${J("issa")}</div>
    </div>
    <div class="comp-detail" data-tone="${a.tone}" aria-live="polite">
      <div class="cd-h">${d(a.ic,24)}<div><span class="eyebrow">${o(a.sub)} · dikelola ${o(a.owner)}</span><h3>${o(a.title)}</h3></div></div>
      <p>${q(a.body)}</p>
      <span class="pill" data-tone="muted">Menjawab ${o(a.ranah.toLowerCase())}</span>
    </div>
  </div>
</section>

<section class="band band-alt">
  <div class="wrap">
    <p class="eyebrow">Cara kerjanya</p>
    <h2>Rantai empat tahap yang saling menguji.</h2>
    <ol class="steps">
      <li data-tone="s1">${d("gauge",22)}<h3>Pemantauan</h3><p>Sensor CEMS mencatat emisi tiap jam dan mengirimnya lewat SISPEK ke ledger.</p></li>
      <li data-tone="s2">${d("file",22)}<h3>Pelaporan</h3><p>Divisi ESG menyusun laporan PSPK. Direksi menyetujui, Komite Keberlanjutan menelaah.</p></li>
      <li data-tone="s3">${d("shield",22)}<h3>Assurance</h3><p>Pemeriksa independen menelusuri bukti di ledger dan mencatat kesimpulannya.</p></li>
      <li data-tone="s4">${d("bank",22)}<h3>Insentif pembiayaan</h3><p>Bank memakai hasil assurance sebagai syarat pembiayaan hijau berbiaya lebih rendah.</p></li>
    </ol>
    <div class="who">
      <article>${d("bank",20)}<h3>Lembaga pembiayaan</h3><p>Mendapat data emisi yang bisa ditelusuri sebelum memberi pembiayaan hijau.</p></article>
      <article>${d("search",20)}<h3>Investor</h3><p>Mendapat informasi emisi yang layak dipercaya untuk keputusan investasi.</p></article>
      <article>${d("users",20)}<h3>Masyarakat</h3><p>Bisa menilai kinerja lingkungan lewat ringkasan data yang sudah diperiksa.</p></article>
      <article>${d("factory",20)}<h3>Perusahaan</h3><p>Assurance berubah dari beban kepatuhan menjadi jalan menuju pendanaan yang lebih murah.</p></article>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <p class="eyebrow">Penerapan bertahap</p>
    <h2>Dimulai dari percontohan, naik mengikuti kesiapan.</h2>
    <div class="phases">
      <article data-tone="s1"><span class="ph-k">Fase 1 · 2027</span><h3>Percontohan</h3><p>Komite pengarah OJK dan KLH. Protokol SISPEK–ledger. Uji coba pada 5–10 emiten wajib CEMS, misalnya semen.</p></article>
      <article data-tone="s2"><span class="ph-k">Fase 2 · 2028–2029</span><h3>Perluasan</h3><p>Limited assurance sukarela pada 2028 dan wajib pada 2029. Insentif pembiayaan mulai berjalan.</p></article>
      <article data-tone="ink"><span class="ph-k">Fase 3 · 2030+</span><h3>Pendalaman</h3><p>Metrik emisi inti menuju reasonable assurance. Cakupan diperluas ke Scope 3.</p></article>
    </div>
    <p class="fine">Peralihan fase diputuskan dari evaluasi tahunan: kelengkapan data, penyelesaian temuan, dan realisasi manfaat.</p>
  </div>
</section>

<section class="band band-alt">
  <div class="wrap two">
    <div>
      <p class="eyebrow">Transparansi prototipe</p>
      <h2>Mana yang dari esai, mana tambahan.</h2>
      <p class="lead">Website ini mengikuti mekanisme esai. Beberapa fitur kami tambahkan supaya mekanismenya bisa dicoba. Fitur tambahan ditandai jelas.</p>
    </div>
    <div class="origin">
      <h3>Dari esai</h3>
      <ul><li>Ledger yang mencatat sumber data, metode, riwayat perubahan, dan hasil pemeriksaan</li><li>Koreksi dicatat dengan alasan tanpa menghapus nilai lama</li><li>Pemisahan penyusun, penelaah, dan penyetuju laporan</li><li>Prasyarat pembiayaan berdasarkan jenis kesimpulan dan fase</li><li>Akses lembaga pembiayaan atas persetujuan perusahaan</li></ul>
      <h3>Tambahan prototipe <span class="tag-add">Tambahan</span></h3>
      <ul><li>Sidik digital berantai untuk menunjukkan bahwa catatan lama tidak bisa diubah diam-diam</li><li>Ringkasan publik satu layar untuk masyarakat</li><li>Mode demo dengan perbandingan tanpa dan dengan CLEAR</li></ul>
    </div>
  </div>
</section>


<section class="band band-ink">
  <div class="wrap cta-band">
    <div><h2>Lihat sendiri bagaimana satu angka emisi diuji.</h2><p>Ikuti angka 68,2 ton CO₂ per jam dari cerobong sampai keputusan bank. Tanpa login, data contoh sudah tersedia.</p></div>
    <a class="btn btn-light" href="#demo">Mulai demo</a>
  </div>
</section>`}const Fa=Object.freeze(Object.defineProperty({__proto__:null,act:Ha,render:Ja},Symbol.toStringTag,{value:"Module"})),$a="0000000000000000";function fa(a){let e=3735928559,n=1103547991;for(let s=0;s<a.length;s++){const t=a.charCodeAt(s);e=Math.imul(e^t,2654435761),n=Math.imul(n^t,1597334677)}return e=Math.imul(e^e>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),(n>>>0).toString(16).padStart(8,"0")+(e>>>0).toString(16).padStart(8,"0")}const ja=a=>JSON.stringify([a.seq,a.prev,a.type,a.actor,a.at,a.payload]);function oa(a,{type:e,actor:n,at:s,payload:t}){const r=a.length?a[a.length-1].hash:$a,l={seq:a.length+1,prev:r,type:e,actor:n,at:s,payload:t};return l.hash=fa(ja(l)),[...a,l]}function I(a){let e=$a;for(let n=0;n<a.length;n++){const s=a[n];if(s.prev!==e||fa(ja(s))!==s.hash)return{ok:!1,index:n,seq:s.seq};e=s.hash}return{ok:!0,count:a.length}}function Sa(a,e,n){return a.map(s=>s.seq===e?{...s,payload:{...s.payload,...n}}:s)}function ua(a){const e={},n={stage:null,by:{}};let s=null,t=null;for(const r of a){const l=r.payload;if(r.type==="data")e[l.code]={...l,original:l.value,status:l.kind==="grk"?"menunggu":l.sub?"substitusi":"diterima",revCount:0,pending:null,by:r.actor,history:[{label:"Nilai awal",value:l.value,at:r.at,by:r.actor,seq:r.seq,note:l.note}]};else if(r.type==="data_setuju"){const c=e[l.code];c&&(c.status="diterima",c.approvedBy=r.actor,c.history.push({label:"Disetujui",value:c.value,at:r.at,by:r.actor,seq:r.seq}))}else if(r.type==="koreksi_ajuan"){const c=e[l.code];c&&(c.pending={seq:r.seq,to:l.to,reason:l.reason,doc:l.doc,by:r.actor,at:r.at},c.prevStatus=c.status,c.status="koreksi")}else if(r.type==="koreksi_setuju"){const c=e[l.code];c&&c.pending&&(c.revCount+=1,c.history.push({label:`Revisi ${c.revCount+1}`,value:c.pending.to,from:c.value,reason:c.pending.reason,doc:c.pending.doc,by:c.pending.by,approvedBy:r.actor,at:r.at,seq:r.seq}),c.value=c.pending.to,c.pending=null,c.status="dikoreksi")}else if(r.type==="koreksi_tolak"){const c=e[l.code];c&&c.pending&&(c.history.push({label:"Koreksi ditolak",value:c.pending.to,reason:l.reason,by:r.actor,at:r.at,seq:r.seq}),c.pending=null,c.status=c.prevStatus||"diterima")}else r.type==="laporan"?(n.stage=l.stage,n.by[l.stage]={actor:r.actor,at:r.at,seq:r.seq}):r.type==="kesimpulan"?s={...l,by:r.actor,at:r.at,seq:r.seq}:r.type==="akses"&&(t={...l,at:r.at,by:r.actor,seq:r.seq})}return{entries:e,report:n,conclusion:s,access:t}}const O="PT Karsa Semen Mandiri Tbk",Ka="Periode 2028",p={rina:{name:"Rina H.",role:"Operator data CEMS",side:"Perusahaan"},dimas:{name:"Dimas P.",role:"Pengendalian internal",side:"Perusahaan"},lestari:{name:"A. Lestari",role:"Divisi Keberlanjutan",side:"Perusahaan"},komite:{name:"Komite Keberlanjutan",role:"Di bawah Dewan Komisaris",side:"Perusahaan"},direksi:{name:"Direktur Keuangan",role:"Direksi",side:"Perusahaan"},sispek:{name:"SISPEK (KLH)",role:"Kiriman otomatis dari sensor",side:"KLH"},auditor:{name:"S. Wiratama",role:"KAP Pradana Wiratama dan Rekan",side:"Penyedia assurance"},bank:{name:"Unit Pembiayaan Berkelanjutan",role:"Lembaga pembiayaan (ilustratif)",side:"Lembaga pembiayaan"}},wa={data:"Data masuk",data_setuju:"Data disetujui",koreksi_ajuan:"Koreksi diajukan",koreksi_setuju:"Koreksi disetujui",koreksi_tolak:"Koreksi ditolak",laporan:"Tahap laporan",kesimpulan:"Kesimpulan assurance",akses:"Izin akses"},M={disusun:"Disusun",ditelaah:"Ditelaah Komite",disetujui:"Disetujui Direksi",dikirim:"Dikirim ke penyedia assurance"},G=["disusun","ditelaah","disetujui","dikirim"],Pa={disusun:"lestari",ditelaah:"komite",disetujui:"direksi",dikirim:"lestari"},_=[{id:"k1",label:"Kiln 1",group:"LDG-28-K1",base:612446.3,method:"Pengukuran langsung CEMS",count:"8.784 entri jam-an"},{id:"k2",label:"Kiln 2",group:"LDG-28-K2",base:548208.8,method:"Pengukuran langsung CEMS",count:"8.784 entri jam-an"},{id:"grk",label:"Bahan bakar sumber lain",group:"LDG-28-GRK",base:37968,method:"Faktor emisi, inventarisasi GRK",count:"314 entri"}],za=[{code:"T-01",text:"6 dari 34 jam substitusi Kiln 2 belum disertai dokumentasi metode",mat:"Tidak material",follow:"Dokumentasi dilengkapi 20 Feb 2029"},{code:"T-02",text:"Berita acara 2 koreksi Kiln 1 diunggah lebih dari 7 hari setelah koreksi",mat:"Tidak material",follow:"Batas unggah bukti ditetapkan 3 hari"},{code:"T-03",text:"Faktor emisi solar alat berat belum diperbarui ke nilai nasional terbaru",mat:"Perlu dikoreksi",follow:"Entri GRK dikoreksi, selisih tidak material"}],Wa=[{name:"PT Pupuk Samudra Raya Tbk",sector:"Pupuk",level:"Limited",concl:"Wajar dengan pengecualian, pada pengungkapan target",status:"bersyarat"},{name:"PT Baja Lintas Timur Tbk",sector:"Besi dan baja",level:"Limited",concl:"Tidak menyatakan kesimpulan",status:"tidak"},{name:"PT Kertas Mega Prima Tbk",sector:"Pulp dan kertas",level:"Belum ada",concl:"Penugasan berjalan",status:"belum"}];function L(a,e){let n=a.base;for(const s of Object.values(e))s.group===a.group&&(s.kind==="rate"&&(n+=s.value-s.original),s.kind==="grk"&&(n+=s.value));return Math.round(n*10)/10}function ca(a,e){const s=Object.values(e).filter(t=>t.group===a.group).filter(t=>t.pending||t.status==="menunggu").length;return{open:s,ok:s===0}}function Ta(){let a=[];const e=(s,t,r,l)=>{a=oa(a,{type:s,actor:t,at:r,payload:l})},n={src:"CEMS Kiln 1 · SISPEK",param:"CO₂ (laju massa)",unit:"t/jam",kind:"rate",group:"LDG-28-K1"};return e("data","sispek","14 Mar 2028, 10.05",{...n,code:"LDG-28-K1-004127",time:"14 Mar 2028, 10.00",value:72.4}),e("data","sispek","14 Mar 2028, 11.05",{...n,code:"LDG-28-K1-004128",time:"14 Mar 2028, 11.00",value:68.2}),e("data","sispek","14 Mar 2028, 16.05",{...n,code:"LDG-28-K1-004133",time:"14 Mar 2028, 16.00",param:"Laju alir gas buang",value:412600,unit:"Nm³/jam",kind:"flow",sub:!0,note:"Analyzer gangguan, diisi metode substitusi yang ditetapkan"}),e("data","sispek","14 Mar 2028, 10.05",{code:"LDG-28-K2-003981",group:"LDG-28-K2",time:"14 Mar 2028, 10.00",src:"CEMS Kiln 2 · SISPEK",param:"CO₂ (laju massa)",value:64.1,unit:"t/jam",kind:"rate"}),e("koreksi_ajuan","rina","15 Mar 2028, 08.40",{code:"LDG-28-K1-004128",to:71.9,reason:"Koreksi faktor kalibrasi analyzer CO₂ setelah uji akurasi relatif, 13 Mar 2028",doc:"Berita acara kalibrasi.pdf"}),e("koreksi_setuju","dimas","15 Mar 2028, 09.10",{code:"LDG-28-K1-004128"}),e("data","sispek","15 Mar 2028, 07.05",{code:"LDG-28-K2-004082",group:"LDG-28-K2",time:"15 Mar 2028, 07.00",src:"CEMS Kiln 2 · SISPEK",param:"CO₂ (laju massa)",value:63.8,unit:"t/jam",kind:"rate"}),e("data","rina","2 Feb 2029, 08.30",{code:"LDG-28-GRK-000214",group:"LDG-28-GRK",time:"Jan 2028",src:"Inventarisasi GRK",param:"Solar alat berat",value:3412,unit:"tCO₂e",kind:"grk"}),e("koreksi_ajuan","rina","3 Feb 2029, 10.15",{code:"LDG-28-K2-004082",to:65,reason:"Pembacaan drift setelah pergantian filter, sesuai log pemeliharaan",doc:"Log pemeliharaan Kiln 2.pdf"}),e("laporan","lestari","5 Feb 2029, 14.00",{stage:"disusun"}),a}let Va=0;function Ua(){const a=new Date(2029,1,10,9,0);a.setMinutes(a.getMinutes()+35*Va++);const e=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][a.getMonth()];return`${a.getDate()} ${e} ${a.getFullYear()}, ${String(a.getHours()).padStart(2,"0")}.${String(a.getMinutes()).padStart(2,"0")}`}const D={tanpa:{label:"Tanpa modifikasi",plain:"Auditor tidak menemukan hal yang membuat angka emisi salah secara material."},pengecualian:{label:"Wajar dengan pengecualian",plain:"Ada bagian tertentu yang bermasalah, tapi tidak menyeluruh."},tidakwajar:{label:"Tidak wajar",plain:"Angka emisi salah secara material dan menyeluruh."},tidakmenyatakan:{label:"Tidak menyatakan kesimpulan",plain:"Bukti tidak cukup untuk menarik kesimpulan."}},z={limited:"Limited (terbatas)",reasonable:"Reasonable (memadai)"},N={1:{label:"Fase 1 · 2027",short:"Percontohan",min:"limited",note:"Percontohan pada 5–10 emiten wajib CEMS. Prasyarat dipakai untuk uji coba."},2:{label:"Fase 2 · 2028–2029",short:"Perluasan",min:"limited",note:"Minimal limited assurance: sukarela 2028, wajib 2029."},3:{label:"Fase 3 · 2030+",short:"Pendalaman",min:"reasonable",note:"Metrik emisi inti wajib reasonable assurance."}},x={memenuhi:{label:"Memenuhi prasyarat",tone:"ok",plain:"Perusahaan boleh mengajukan pembiayaan hijau. Bukti emisinya sudah diperiksa pihak independen."},bersyarat:{label:"Memenuhi bersyarat",tone:"warn",plain:"Boleh mengajukan, dengan catatan tindak lanjut harus selesai sebelum periode berikutnya."},tidak:{label:"Tidak memenuhi",tone:"bad",plain:"Belum bisa mengajukan. Bukti emisi belum cukup meyakinkan."},belum:{label:"Belum dapat diperiksa",tone:"muted",plain:"Laporan atau kesimpulan assurance belum tersedia di ledger."}};function Ma(a,e){return!a||!a.pending?{ok:!1,msg:"Tidak ada koreksi yang menunggu persetujuan."}:a.pending.by===e?{ok:!1,msg:`Ditolak: ${p[e].name} mengajukan koreksi ini, jadi tidak boleh menyetujuinya sendiri.`}:e!=="dimas"?{ok:!1,msg:`Ditolak: persetujuan koreksi adalah tugas pengendalian internal, bukan ${p[e].role.toLowerCase()}.`}:{ok:!0}}function La(a,e){return!a||a.status!=="menunggu"?{ok:!1,msg:"Entri ini tidak menunggu persetujuan."}:a.by===e?{ok:!1,msg:`Ditolak: ${p[e].name} memasukkan data ini, jadi tidak boleh menyetujuinya sendiri.`}:e!=="dimas"?{ok:!1,msg:"Ditolak: persetujuan data adalah tugas pengendalian internal."}:{ok:!0}}function X(a){const e=_.reduce((s,t)=>s+ca(t,a.entries).open,0),n=a.report.by;return[{label:"Semua angka tertaut ke entri ledger yang sudah disetujui",ok:e===0,note:e?`${e} entri belum disetujui`:"terpenuhi"},{label:"Penyusun dan penelaah adalah pihak berbeda",ok:!!n.ditelaah,note:n.ditelaah?"terpenuhi":"belum ditelaah Komite"},{label:"Persetujuan Direksi",ok:!!n.disetujui,note:n.disetujui?"terpenuhi":"belum"}]}function Da(a){const e=a.report.stage,n=e?G.indexOf(e):-1;return n<G.length-1?G[n+1]:null}function W(a,e){if(Da(a)!==e)return{ok:!1,msg:"Tahap ini harus menunggu tahap sebelumnya selesai."};if(e==="dikirim"){const n=X(a).filter(s=>!s.ok);if(n.length)return{ok:!1,msg:"Laporan ditahan. "+n.map(s=>s.label+" ("+s.note+")").join("; ")+"."}}return{ok:!0,actor:Pa[e]}}function pa({reportSent:a,conclusion:e,phase:n}){const s=N[n].min,t=e&&(s==="limited"||e.level==="reasonable"),r=[{label:"Laporan PSPK 1 dan 2 tersedia di ledger",ok:!!a},{label:"Assurance ISSA 5000 oleh praktisi independen",ok:!!e},{label:`Tingkat keyakinan sesuai ${N[n].label} (minimal ${s})`,ok:!!t,na:!e},{label:"Jenis kesimpulan memenuhi aturan",ok:!!e&&(e.type==="tanpa"||e.type==="pengecualian"&&!e.inti),na:!e},{label:"Cakupan memuat metrik emisi Scope 1",ok:!!e},{label:"Kegiatan yang dibiayai sesuai kriteria TKBI (efisiensi energi)",ok:!0}];let l;return!a||!e?l="belum":t?e.type==="tanpa"?l="memenuhi":e.type==="pengecualian"&&!e.inti?l="bersyarat":l="tidak":l="tidak",{checks:r,status:l}}const ta=[{id:"k1",label:"Kiln 1",group:"D-K1",base:612446.3,method:"Sensor CEMS"},{id:"k2",label:"Kiln 2",group:"D-K2",base:548210,method:"Sensor CEMS"},{id:"grk",label:"Solar alat berat",group:"D-GRK",base:37968,method:"Inventarisasi GRK"}],V=[{code:"D-K1-1000",time:"10.00",value:72.4},{code:"D-K1-1100",time:"11.00",value:68.2},{code:"D-K1-1200",time:"12.00",value:70.8}],y="D-K1-1100",Aa={rina:{name:"Rina H.",role:"Operator data sensor",icon:"gauge"},pabrik:{name:"PT Karsa Semen Mandiri",role:"Perusahaan (operator, pengawas, Komite, Direksi)",icon:"factory"},auditor:{name:"S. Wiratama",role:"Auditor independen",icon:"shield"},bank:{name:"Petugas bank",role:"Penilai pembiayaan hijau",icon:"bank"}},H=[null,{tone:"s1",short:"Sensor",title:"Sensor mencatat emisi",role:"rina",what:"Pabrik semen punya sensor [[cems|CEMS]] di cerobongnya. Setiap jam, sensor mengukur berapa ton CO₂ yang keluar, lalu mengirimnya ke [[sispek|SISPEK]] dan diteruskan ke [[ledger|ledger]].",tasks:[{t:"Tekan “Kirim data sensor”",act:"s1send",done:()=>f(1)}],result:"Tiga angka masuk ke ledger lengkap dengan jam, sumber, dan [[sidik|sidik digital]]. Lihat panel ledger: setiap catatan tersambung ke catatan sebelumnya seperti mata rantai.",why:"Angka emisi sekarang punya asal-usul yang jelas sejak detik pertama. Inilah fondasi agar angka bisa dibuktikan nanti.",ranah:"Ranah teknis",off:{what:"Tanpa CLEAR, angka sensor disalin manual ke lembar kerja biasa.",tasks:[{t:"Tekan “Salin ke lembar kerja”",act:"o1",done:()=>i.off.s1}],result:"Angka tersimpan, tapi tidak tercatat dari mana asalnya. Siapa pun bisa mengetik ulang angka itu tanpa ketahuan."}},{tone:"s1",short:"Koreksi",title:"Ternyata ada yang salah",role:"rina",what:"Hasil uji kalibrasi menunjukkan alat ukur CO₂ membaca terlalu rendah. Angka jam 11.00 seharusnya 71,9 ton, bukan 68,2 ton. Angka ini perlu dikoreksi secara jujur.",tasks:[{t:"Ajukan koreksi sebagai Rina",act:"s2submit",done:a=>{var e,n;return!!((e=a.entries[y])!=null&&e.pending)||((n=a.entries[y])==null?void 0:n.status)==="dikoreksi"}},{t:"Coba setujui sendiri sebagai Rina",act:"s2approve:rina",done:()=>i.triedSelf||f(2)},{t:"Minta Dimas (pengawas internal) menyetujui",act:"s2approve:dimas",done:()=>f(2)},{t:"Coba curang: ubah nilai lama diam-diam",act:"s2tamper",done:()=>i.triedTamper,optional:!0}],result:"Angka sekarang 71,9, tetapi 68,2 tetap terlihat beserta alasan dan berita acaranya. Rina tidak bisa menyetujui koreksinya sendiri; Dimas yang menyetujui.",why:"Koreksi yang jujur tercatat terbuka, sedangkan perubahan diam-diam langsung memutus rantai. Kesalahan bisa diperbaiki tanpa membuka celah kecurangan.",ranah:"Ranah tata kelola",off:{what:"Tanpa CLEAR, koreksi dilakukan dengan mengetik ulang angka di lembar kerja.",tasks:[{t:"Tekan “Ubah angka”",act:"o2",done:()=>i.off.s2}],result:"Angka 68,2 hilang begitu saja. Tidak ada catatan siapa yang mengubah, kapan, dan kenapa. Koreksi yang jujur dan kecurangan jadi terlihat sama."}},{tone:"s2",short:"Laporan",title:"Menyusun laporan keberlanjutan",role:"pabrik",what:"Divisi Keberlanjutan menyusun laporan [[pspk|PSPK 2]]: total [[scope1|emisi Scope 1]] sekitar 1,2 juta ton CO₂e. Satu angka, emisi solar alat berat, baru dimasukkan Rina dan belum disetujui siapa pun.",tasks:[{t:"Coba kirim laporan ke auditor",act:"s3send",done:()=>i.triedSend||f(3)},{t:"Setujui data solar sebagai Dimas",act:"s3grk:dimas",done:a=>{var e;return((e=a.entries["D-GRK-0214"])==null?void 0:e.status)==="diterima"}},{t:"Telaah laporan sebagai Komite Keberlanjutan",act:"s3stage:ditelaah",done:a=>!!a.report.by.ditelaah},{t:"Setujui laporan sebagai Direksi",act:"s3stage:disetujui",done:a=>!!a.report.by.disetujui},{t:"Kirim laporan ke auditor",act:"s3send",done:()=>f(3)}],result:"Laporan baru bisa dikirim setelah semua angka tertaut ke ledger, ditelaah [[komite|Komite Keberlanjutan]], dan disetujui Direksi. Setiap tahap tercatat beserta nama pelakunya.",why:"Penyusun, penelaah, dan penyetuju laporan adalah orang berbeda. Angka yang belum diperiksa tidak bisa ikut keluar.",ranah:"Ranah tata kelola",off:{what:"Tanpa CLEAR, laporan berupa dokumen yang angkanya diketik manual.",tasks:[{t:"Tekan “Kirim laporan”",act:"o3",done:()=>i.off.s3}],result:"Laporan langsung terkirim, termasuk angka yang belum disetujui siapa pun. Tidak jelas siapa menyusun dan siapa memeriksa."}},{tone:"s3",short:"Auditor",title:"Diperiksa auditor independen",role:"auditor",what:"Sekarang kamu auditor dari KAP Pradana Wiratama dan Rekan. Tugasmu memastikan angka di laporan benar-benar punya bukti, sesuai standar [[issa|ISSA 5000]].",tasks:[{t:"Telusuri angka Kiln 1 sampai ke sensornya",act:"s4trace",done:()=>i.traced>=3},{t:"Pilih kesimpulan, lalu terbitkan ke ledger",act:"s4publish",done:()=>f(4)}],result:"Kesimpulanmu tercatat di ledger. Pihak yang diberi izin bisa melihat cakupan, tingkat keyakinan, dan hasil pemeriksaan.",why:"Perusahaan tidak hanya melapor, tapi juga membuktikan. Pemeriksaan bersifat wajib, bukan lagi “jika ada”.",ranah:"Ranah regulasi",off:{what:"Tanpa CLEAR, auditor hanya menerima laporan dan lampiran lembar kerja.",tasks:[{t:"Tekan “Telusuri angka” sampai berhenti",act:"o4",done:()=>i.off.s4>=2}],result:"Penelusuran berhenti di lembar kerja. Sumber angkanya tidak tercatat, jadi auditor sulit memastikan angka itu benar."}},{tone:"s4",short:"Bank",title:"Mengajukan pembiayaan hijau",role:"bank",what:"PT Karsa ingin menerbitkan obligasi hijau untuk proyek pemanfaatan panas buang Kiln 1. Bank mensyaratkan bukti emisi yang sudah diperiksa pihak independen dan kegiatan yang sesuai [[tkbi|TKBI]].",tasks:[{t:"Tekan “Periksa di ledger”",act:"s5check",done:a=>i.triedCheck||!!a.access},{t:"Beri izin akses sebagai PT Karsa",act:"s5grant",done:a=>!!a.access},{t:"Periksa prasyarat",act:"s5check",done:()=>i.checked},{t:"Ganti fase atau skenario untuk membandingkan",act:"s5play",done:()=>i.played,optional:!0}],result:"",why:"[[assurance|Assurance]] berubah dari beban kepatuhan menjadi jalan menuju pendanaan yang lebih murah. Klaim tanpa bukti tidak lolos.",ranah:"Ranah pasar",off:{what:"Tanpa CLEAR, bank hanya menerima laporan PDF berisi klaim emisi.",tasks:[{t:"Tekan “Nilai pengajuan”",act:"o5",done:()=>i.off.s5}],result:"Bank tidak bisa memeriksa bukti. Pilihannya menolak, atau percaya begitu saja. Celah inilah yang memberi ruang bagi [[greenwashing|greenwashing]]."}}],sa=()=>({step:0,max:0,on:!0,chain:[],backup:null,msg:null,corrTo:"71.9",corrReason:"Koreksi faktor kalibrasi analyzer CO₂ setelah uji akurasi relatif",traced:0,concl:"tanpa",level:"limited",inti:!1,phase:"2",scenario:"actual",checked:!1,off:{s1:!1,s2:!1,s3:!1,s4:0,s5:!1},triedSelf:!1,triedTamper:!1,triedSend:!1,triedCheck:!1,played:!1});let i=sa(),U=0,Y=0;const Ya=(a,e)=>{var s;return a==="data"&&((s=e.time)!=null&&s.includes(", "))?e.time.replace(/\.00$/,".05"):a.startsWith("koreksi")?`${16+Math.floor(U/4)} Mar 2028, ${String(9+U++%4*2).padStart(2,"0")}.20`:`${3+Math.floor(Y/3)*4} Feb 2029, ${String(9+Y++%3*3).padStart(2,"0")}.30`},$=(a,e,n)=>{i.chain=oa(i.chain,{type:a,actor:e,at:Ya(a,n),payload:n})},K=()=>ua(i.chain);function f(a){var n;const e=K();return i.on?a===1?Object.keys(e.entries).filter(s=>s.startsWith("D-K1")).length===3:a===2?((n=e.entries[y])==null?void 0:n.status)==="dikoreksi":a===3?e.report.stage==="dikirim":a===4?!!e.conclusion:a===5?i.checked&&!!e.access:!0:a===4?i.off.s4>=2:!!i.off["s"+a]}function F(a){const e=K();if(a===1&&!f(1)&&V.forEach(n=>$("data","sispek",{code:n.code,group:"D-K1",time:`14 Mar 2028, ${n.time}`,src:"CEMS Kiln 1 · SISPEK",param:"CO₂ (laju massa)",value:n.value,unit:"t/jam",kind:"rate"})),a===2&&!f(2)&&(e.entries[y].pending||$("koreksi_ajuan","rina",{code:y,to:71.9,reason:i.corrReason,doc:"Berita acara kalibrasi.pdf"}),$("koreksi_setuju","dimas",{code:y})),a===3){ka();let n=K();n.entries["D-GRK-0214"].status==="menunggu"&&$("data_setuju","dimas",{code:"D-GRK-0214"});for(const s of["ditelaah","disetujui","dikirim"]){n=K();const t=W(n,s);t.ok&&$("laporan",t.actor,{stage:s})}}a===4&&!f(4)&&(i.traced=3,Ca()),a===5&&(K().access||$("akses","komite",{granted:!0,lembaga:p.bank.name}),i.checked=!0)}function ka(){K().entries["D-GRK-0214"]||$("data","rina",{code:"D-GRK-0214",group:"D-GRK",time:"Jan 2028",src:"Inventarisasi GRK",param:"Solar alat berat",value:3412,unit:"tCO₂e",kind:"grk"}),K().report.stage||$("laporan","lestari",{stage:"disusun"})}function Ca(){$("kesimpulan","auditor",{type:i.concl,level:i.level,inti:i.concl==="pengecualian"&&i.inti,scope:"Emisi Scope 1, PSPK 2",standard:"ISSA 5000"})}function B(a){if(i.on)for(let e=1;e<a;e++)f(e)||F(e);i.on&&a===3&&ka(),i.step=a,i.max=Math.max(i.max,a),i.msg=null}function Za(a,e){i[a]=e}function Xa(a,e){const n=K();switch(i.msg=null,a){case"start":B(1);break;case"next":B(Math.min(6,i.step+1));break;case"prev":i.step=Math.max(0,i.step-1);break;case"goto":B(+e.dataset.n);break;case"skip":i.on?F(i.step):i.off["s"+i.step]=i.step===4?2:!0,B(Math.min(6,i.step+1));break;case"reset":i=sa(),U=0,Y=0;break;case"replay":{const s=e.dataset.on==="1";i=sa(),U=0,Y=0,i.on=s,B(1);break}case"mode":{if(i.on=e.dataset.on==="1",i.on&&i.step>=1&&i.step<=5){for(let s=1;s<i.step;s++)f(s)||F(s);i.step===3&&ka()}break}case"s1send":F(1);break;case"s2submit":{const s=parseFloat(String(i.corrTo).replace(",","."));if(!isFinite(s)||s<=0){i.msg={tone:"bad",text:"Isi nilai koreksi dengan angka yang valid."};break}if(!i.corrReason.trim()){i.msg={tone:"bad",text:"Alasan koreksi wajib diisi. Tanpa alasan, koreksi tidak bisa diperiksa."};break}$("koreksi_ajuan","rina",{code:y,to:s,reason:i.corrReason.trim(),doc:"Berita acara kalibrasi.pdf"}),i.msg={tone:"info",text:"Koreksi diajukan dan tercatat di ledger. Statusnya menunggu persetujuan."};break}case"s2approve":{const s=e.dataset.who,t=Ma(n.entries[y],s);if(s==="rina"&&(i.triedSelf=!0),!t.ok){i.msg={tone:"bad",text:t.msg+" Persetujuan harus datang dari orang lain, yaitu pengawas internal."};break}$("koreksi_setuju",s,{code:y}),i.msg={tone:"ok",text:"Disetujui oleh Dimas P. Nilai lama tetap tersimpan sebagai riwayat."};break}case"s2tamper":{i.triedTamper=!0,i.backup=i.chain;const s=i.chain.find(t=>t.type==="data"&&t.payload.code===y);i.chain=Sa(i.chain,s.seq,{value:75}),i.msg={tone:"bad",text:`Seseorang mengubah nilai awal di catatan #${s.seq} menjadi 75,0 tanpa lewat prosedur. Sidiknya tidak lagi cocok, jadi rantai langsung terputus.`};break}case"s2restore":i.chain=i.backup||i.chain,i.backup=null,i.msg={tone:"ok",text:"Catatan dipulihkan. Rantai kembali utuh."};break;case"s3send":{if(i.triedSend=!0,!W(n,"dikirim").ok){const t=X(n).filter(r=>!r.ok).map(r=>r.label.toLowerCase());i.msg={tone:"bad",text:`Laporan ditahan sistem. Yang belum terpenuhi: ${t.join("; ")}. Ikuti daftar tugas untuk membereskannya.`};break}$("laporan","lestari",{stage:"dikirim"}),i.msg={tone:"ok",text:"Laporan terkirim ke penyedia assurance. Tercatat di ledger."};break}case"s3grk":{const s=e.dataset.who,t=La(n.entries["D-GRK-0214"],s);if(!t.ok){i.msg={tone:"bad",text:t.msg};break}$("data_setuju",s,{code:"D-GRK-0214"}),i.msg={tone:"ok",text:"Data solar disetujui Dimas P. Angka ini sekarang tertaut."};break}case"s3stage":{const s=e.dataset.stage,t=W(n,s);if(!t.ok){i.msg={tone:"bad",text:t.msg};break}$("laporan",t.actor,{stage:s}),i.msg={tone:"ok",text:`${M[s]} oleh ${p[t.actor].name}.`};break}case"s4trace":i.traced=Math.min(3,i.traced+1);break;case"s4concl":i.concl=e.value;break;case"s4level":i.level=e.value;break;case"s4inti":i.inti=e.checked;break;case"s4publish":if(i.traced<3){i.msg={tone:"bad",text:"Telusuri angka sampai ke sensor dulu sebelum menyimpulkan."};break}Ca(),i.msg={tone:"ok",text:"Kesimpulan tercatat di ledger."};break;case"s5check":if(i.triedCheck=!0,!n.access){i.msg={tone:"bad",text:"Akses ditolak. Bank hanya boleh membaca ledger perusahaan atas persetujuan perusahaan."};break}i.checked=!0;break;case"s5grant":$("akses","komite",{granted:!0,lembaga:p.bank.name}),i.msg={tone:"ok",text:"PT Karsa memberi izin. Bank sekarang bisa membaca bukti emisi di ledger."};break;case"s5phase":i.phase=e.value,i.played=!0;break;case"s5scenario":i.scenario=e.value,i.played=!0;break;case"o1":i.off.s1=!0;break;case"o2":i.off.s2=!0;break;case"o3":i.off.s3=!0;break;case"o4":i.off.s4=Math.min(2,i.off.s4+1);break;case"o5":i.off.s5=!0;break;default:return!1}}let ma=null;const Ra=a=>i.on?a.tasks:a.off.tasks;function Qa(a){const e=H[i.step];if(!e)return null;const n=Ra(e).find(s=>!s.optional&&!s.done(a));return n?n.act:"next"}const g=a=>ma===a?' data-next="true"':"";function ha(){return`<ol class="demo-progress" aria-label="Langkah demo">${[1,2,3,4,5].map(a=>{const e=i.step===a?"now":f(a)?"done":a<=i.max?"seen":"todo";return`<li data-tone="${H[a].tone}" data-state="${e}"><button data-act="goto" data-n="${a}" ${a>i.max+1?"disabled":""} ${i.step===a?'aria-current="step"':""}>
      <span class="pg-n">${e==="done"?d("check",14):a}</span><span class="pg-t">${H[a].short}</span></button></li>`}).join("")}</ol>`}function ae(){if(!i.msg)return"";const a={ok:"check",bad:"alert",info:"info",warn:"alert"}[i.msg.tone];return`<div class="msg" data-tone="${i.msg.tone}" role="status">${d(a,18)}<span>${o(i.msg.text)}</span></div>`}function ee(a){if(!i.on)return`<div class="role" data-tone="bad">${d("alert",20)}<div><span>Versi pembanding</span><b>Tanpa CLEAR</b></div></div>`;const e=Aa[a.role];return`<div class="role">${d(e.icon,20)}<div><span>Kamu berperan sebagai</span><b>${o(e.name)}</b><small>${o(e.role)}</small></div></div>`}function ne(a,e){const n=i.on?a:a.off,s=Ra(a);return`<div class="brief">
    <div class="brief-what"><span class="tri-k">${d("info",14)} Situasinya</span><p>${q(n.what)}</p></div>
    <div class="brief-tasks"><span class="tri-k">${d("check",14)} Tugasmu</span>
      <ol class="tasks">${s.map(t=>{const r=t.done(e),l=!r&&ma===t.act;return`<li data-ok="${r}" data-now="${l}"><span class="tk">${r?d("check",13):""}</span><span>${o(t.t)}${t.optional?" <em>(opsional)</em>":""}</span></li>`}).join("")}</ol>
    </div>
  </div>`}function te(a,e){const n=i.on?a:a.off,s=i.on&&i.step===5?ce(e):n.result;return`<div class="outcome" role="status">
    <div class="out-res"><span class="tri-k">${d("check",14)} Hasilnya</span><p>${q(s)}</p></div>
    ${i.on?`<div class="out-why"><span class="tri-k">${d("bulb",14)} Kenapa ini penting · ${o(a.ranah)}</span><p>${q(a.why)}</p></div>`:""}
  </div>`}function se(a){if(!i.on)return`<div class="sheet"><div class="sheet-bar">emisi_kiln1.xlsx</div>
      <table><thead><tr><th>Jam</th><th>CO₂ (t/jam)</th></tr></thead><tbody>
      ${i.off.s1?V.map(n=>`<tr><td>${n.time}</td><td>${b(n.value,1)}</td></tr>`).join(""):'<tr><td colspan="2" class="muted">Kosong</td></tr>'}
      </tbody></table></div>
      <button class="btn btn-primary" data-act="o1"${g("o1")} ${i.off.s1?"disabled":""}>Salin ke lembar kerja</button>`;const e=V.map(n=>a.entries[n.code]).filter(Boolean);return`<div class="sensor">
      <div class="stack" aria-hidden="true"><span class="smoke"></span><span class="smoke s2"></span><div class="chimney"></div></div>
      <div class="sensor-info"><b>Sensor CEMS · Kiln 1</b><span>PT Karsa Semen Mandiri Tbk · 14 Mar 2028 · pembacaan per jam</span></div>
    </div>
    <div class="readings">${e.length?e.map(n=>`<div class="reading"><span class="mono">${n.code}</span><span>Jam ${n.time.split(", ")[1]}</span><b>${E(n)}</b>${h("ok","Masuk ledger")}</div>`).join(""):'<p class="empty">Belum ada data. Tekan tombol di bawah untuk mengirim tiga pembacaan sensor.</p>'}</div>
    <button class="btn btn-primary" data-act="s1send"${g("s1send")} ${e.length?"disabled":""}>${d("arrow")} Kirim data sensor</button>`}function ie(a){return`<ol class="hist">${a.history.map((e,n)=>{const s=n===a.history.length-1;return`<li data-latest="${s}">
      <div class="hist-top"><span>${o(e.label)}</span>${s?h("ok","Berlaku"):h("muted","Tersimpan, tidak berlaku")}</div>
      <div class="hist-v ${s?"":"struck"}">${E(a,e.value)}</div>
      ${e.reason?`<p class="hist-r">Alasan: ${o(e.reason)}${e.doc?` · <u>${o(e.doc)}</u>`:""}</p>`:""}
      <p class="hist-m">${e.approvedBy?`Diajukan ${o(p[e.by].name)} · disetujui ${o(p[e.approvedBy].name)}`:`Dari ${o(p[e.by].name)}`} · ${o(e.at)}</p>
    </li>`}).join("")}</ol>`}function re(a){if(!i.on)return`<div class="sheet"><div class="sheet-bar">emisi_kiln1.xlsx</div>
      <table><thead><tr><th>Jam</th><th>CO₂ (t/jam)</th></tr></thead><tbody>
      ${V.map(t=>`<tr ${t.code===y?'class="hl"':""}><td>${t.time}</td><td>${t.code===y&&i.off.s2?"71,9":b(t.value,1)}</td></tr>`).join("")}
      </tbody></table></div>
      <button class="btn btn-primary" data-act="o2"${g("o2")} ${i.off.s2?"disabled":""}>Ubah angka</button>`;const e=a.entries[y],n=I(i.chain);let s="";return e.status!=="dikoreksi"&&!e.pending?s=`<form class="form" aria-label="Formulir koreksi">
      <div class="who-tag">${d("user",16)}<span>Bertindak sebagai <b>Rina H.</b>, operator data sensor</span></div>
      <label for="d-corr">Nilai yang benar (t/jam)</label><input id="d-corr" inputmode="decimal" data-bind="corrTo" value="${o(i.corrTo)}">
      <label for="d-reason">Alasan koreksi <span class="req">wajib</span></label><input id="d-reason" data-bind="corrReason" value="${o(i.corrReason)}">
      <div class="attach">${d("file",16)} Bukti terlampir: <u>Berita acara kalibrasi.pdf</u></div>
      <button class="btn btn-primary" data-act="s2submit"${g("s2submit")}>Ajukan koreksi</button>
    </form>`:e.pending?s=`<div class="approve">
      <p>Koreksi <b>${b(e.value,1)} → ${b(e.pending.to,1)} t/jam</b> menunggu persetujuan. Siapa yang menyetujui?</p>
      <div class="choice">
        <button class="btn" data-act="s2approve" data-who="rina"${g("s2approve:rina")}>${d("user",16)} Rina sendiri (pengaju)</button>
        <button class="btn btn-primary" data-act="s2approve" data-who="dimas"${g("s2approve:dimas")}>${d("shield",16)} Dimas (pengawas internal)</button>
      </div></div>`:s=`<div class="tamper">
      <p><b>Coba curang (opsional).</b> Bagaimana kalau seseorang diam-diam mengubah nilai awal langsung di database, tanpa lewat prosedur koreksi?</p>
      ${i.backup?`<button class="btn" data-act="s2restore">${d("reset",16)} Pulihkan catatan</button>`:`<button class="btn btn-danger" data-act="s2tamper">${d("alert",16)} Ubah nilai lama diam-diam</button>`}
      <div class="chainstate" data-ok="${n.ok}">${d(n.ok?"check":"alert",15)} ${n.ok?`Rantai utuh: ${n.count} catatan cocok dengan sidiknya`:`Rantai terputus di catatan #${n.seq}. Perubahan diam-diam langsung ketahuan.`}</div>
    </div>`,`<div class="split"><div class="card-lite"><span class="eyebrow">Riwayat angka jam 11.00 · ${y}</span>${ie(e)}${e.pending?`<p class="pend">${d("alert",14)} Usulan Rina: ${b(e.pending.to,1)} t/jam, menunggu persetujuan</p>`:""}</div><div>${s}</div></div>`}function le(a){const e=ta.reduce((n,s)=>n+L(s,a.entries),0);return`<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Sumber emisi</th><th class="r">Nilai 2028</th><th>Cara mengukur</th><th>Tertaut ke ledger?</th></tr></thead><tbody>
    ${ta.map(n=>{const s=ca(n,a.entries);return`<tr><td>${n.label}</td><td class="r num">${b(L(n,a.entries),0)} tCO₂e</td><td>${n.method}</td><td>${s.ok?h("ok","Ya, sudah disetujui"):h("warn","Belum disetujui")}</td></tr>`}).join("")}
    <tr class="tot"><td>Total Scope 1</td><td class="r num">${b(e,0)} tCO₂e</td><td colspan="2"></td></tr>
  </tbody></table></div>`}function de(a){if(!i.on)return`<div class="doc-mock"><div class="sheet-bar">Laporan_Keberlanjutan_2028_final.docx</div>
      <p>Total emisi Scope 1 tahun 2028 sebesar <b>1.202.040 tCO₂e</b>.</p><p class="muted">Sumber angka: tidak disebutkan.</p></div>
      <button class="btn btn-primary" data-act="o3"${g("o3")} ${i.off.s3?"disabled":""}>Kirim laporan</button>
      ${i.off.s3?`<div class="msg" data-tone="warn">${d("alert",18)}<span>Terkirim. Angka solar yang belum disetujui ikut masuk.</span></div>`:""}`;const e=X(a),n=a.entries["D-GRK-0214"],s=a.report.by,t=["disusun","ditelaah","disetujui","dikirim"];return`${le(a)}
  <div class="split">
    <div class="card-lite">
      <span class="eyebrow">Siapa mengerjakan apa</span>
      <ol class="duty">${t.map(r=>{const l=!!s[r],c=r==="ditelaah"?`<button class="btn btn-sm" data-act="s3stage" data-stage="ditelaah"${g("s3stage:ditelaah")}>Telaah sebagai Komite</button>`:r==="disetujui"?`<button class="btn btn-sm" data-act="s3stage" data-stage="disetujui"${g("s3stage:disetujui")}>Setujui sebagai Direksi</button>`:"";return`<li data-done="${l}"><span class="duty-n">${l?d("check",14):""}</span><div><b>${M[r]}</b><span>${l?`${o(p[s[r].actor].name)} · ${o(s[r].at)}`:"Belum"}</span></div>${!l&&c?c:""}</li>`}).join("")}</ol>
    </div>
    <div class="card-lite">
      <span class="eyebrow">Syarat sebelum dikirim ke auditor</span>
      <ul class="checks">${e.map(r=>`<li data-ok="${r.ok}"><span class="ck">${d(r.ok?"check":"x",12)}</span>${o(r.label)}<small>${o(r.note)}</small></li>`).join("")}</ul>
      ${n.status==="menunggu"?`<div class="approve"><p>Data solar alat berat <b>${E(n)}</b> dimasukkan Rina H. dan belum disetujui siapa pun.</p><div class="choice"><button class="btn btn-sm" data-act="s3grk" data-who="rina">Setujui sebagai Rina</button><button class="btn btn-sm btn-primary" data-act="s3grk" data-who="dimas"${g("s3grk:dimas")}>Setujui sebagai Dimas</button></div></div>`:""}
      <button class="btn btn-primary" data-act="s3send"${g("s3send")} ${a.report.stage==="dikirim"?"disabled":""}>${a.report.stage==="dikirim"?`${d("check")} Laporan sudah dikirim`:`${d("arrow")} Kirim ke auditor`}</button>
    </div>
  </div>`}function oe(a){const e=a.entries[y],n=[{k:"Laporan PSPK 2",v:`${b(L(ta[0],a.entries),0)} tCO₂e`,s:"Emisi Scope 1 Kiln 1 di laporan",tone:"s2",ic:"file"},{k:"Assurance ledger (OJK)",v:"D-K1 · 8.784 entri",s:"Catatan per jam, 1 di antaranya dikoreksi",tone:"ink",ic:"book"},{k:"SISPEK (KLH)",v:"8.662 kiriman",s:"Cocok dengan nilai awal di ledger",tone:"s1",ic:"link"},{k:"Sensor CEMS Kiln 1",v:"Analyzer CO₂ + flow meter",s:"Kalibrasi terakhir 13 Mar 2028",tone:"s1",ic:"gauge"}];if(!i.on)return`<div class="drill">${[n[0],{k:"Lampiran",v:"emisi_final_v3.xlsx",s:"Sumber angka tidak tercatat",tone:"bad",ic:"alert"}].slice(0,i.off.s4||1).map(l=>`<div class="drill-node" data-tone="${l.tone}">${d(l.ic,18)}<div><span>${l.k}</span><b>${l.v}</b><small>${l.s}</small></div></div>`).join("")}
      ${i.off.s4>=2?`<div class="drill-end">${d("x",16)} Jalan buntu. Tidak ada sumber untuk ditelusuri lebih jauh.</div>`:""}</div>
      <button class="btn btn-primary" data-act="o4"${g("o4")} ${i.off.s4>=2?"disabled":""}>${d("search")} Telusuri angka</button>`;const s=a.conclusion,t=Math.min(4,i.traced+1);return`<div class="drill" aria-live="polite">${n.slice(0,t).map((r,l)=>`<div class="drill-node" data-tone="${r.tone}">${d(r.ic,18)}<div><span>Tingkat ${l+1} · ${r.k}</span><b>${r.v}</b><small>${r.s}</small></div></div>`).join("")}
    ${t<4?`<div class="drill-more">${4-t} tingkat lagi sampai ke sensor</div>`:""}</div>
  ${t<4?`<button class="btn btn-primary" data-act="s4trace"${g("s4trace")}>${d("search")} ${i.traced===0?"Mulai telusuri angka Kiln 1":"Telusuri satu tingkat lagi"}</button>`:`
  <div class="sample">${d("check",18)}<div><span class="eyebrow">Bukti ditemukan · ${y}</span><p>Nilai awal ${b(e.original,1)} dikoreksi menjadi ${b(e.value,1)} t/jam. Alasan dan berita acara kalibrasi tersedia. Pengaju dan penyetuju adalah orang berbeda.</p></div></div>
  <div class="split">
    <fieldset class="card-lite" ${s?"disabled":""}>
      <legend class="eyebrow">Apa kesimpulanmu?</legend>
      ${Object.entries(D).map(([r,l])=>`<label class="radio"><input type="radio" name="d-concl" value="${r}" data-change="s4concl" ${i.concl===r?"checked":""}><span><b>${l.label}</b><small>${l.plain}</small></span></label>`).join("")}
      ${i.concl==="pengecualian"?`<label class="check"><input type="checkbox" data-change="s4inti" ${i.inti?"checked":""}> Pengecualian menyangkut metrik emisi inti</label>`:""}
    </fieldset>
    <div class="card-lite">
      <label for="d-level" class="eyebrow">Seberapa dalam pemeriksaanmu?</label>
      <select id="d-level" data-change="s4level" ${s?"disabled":""}>${Object.entries(z).map(([r,l])=>`<option value="${r}" ${i.level===r?"selected":""}>${l}</option>`).join("")}</select>
      <p class="fine">${j("limited","Limited")} lebih ringan; ${j("reasonable","reasonable")} lebih mendalam. Cakupan: emisi Scope 1, PSPK 2.</p>
      ${s?`<div class="msg" data-tone="ok">${d("check",18)}<span>Tercatat di ledger sebagai catatan #${s.seq}: ${o(D[s.type].label)}, ${o(z[s.level])}.</span></div>`:`<button class="btn btn-primary" data-act="s4publish"${g("s4publish")}>${d("shield")} Terbitkan kesimpulan ke ledger</button>`}
    </div>
  </div>`}`}function ue(a){if(!i.on)return`<div class="doc-mock"><div class="sheet-bar">Pengajuan obligasi hijau.pdf</div><p>“Emisi kami sudah sesuai standar dan terus menurun.”</p><p class="muted">Lampiran bukti: tidak ada.</p></div>
      <button class="btn btn-primary" data-act="o5"${g("o5")} ${i.off.s5?"disabled":""}>Nilai pengajuan</button>
      ${i.off.s5?`<div class="msg" data-tone="warn">${d("alert",18)}<span>Klaim tidak bisa diverifikasi. Keputusan bergantung pada kepercayaan, bukan bukti.</span></div>`:""}`;const e=a.conclusion;if(!a.access||!i.checked)return`<div class="bank-card">${d("bank",22)}<div><span class="eyebrow">Pengajuan obligasi hijau</span><b>PT Karsa Semen Mandiri Tbk</b><small>Proyek pemanfaatan panas buang Kiln 1</small></div></div>
    ${a.access?`<button class="btn btn-primary" data-act="s5check"${g("s5check")}>${d("search")} Periksa prasyarat di ledger</button>`:`<div class="approve"><p>${d("lock",16)} Ledger milik perusahaan. Bank perlu izin PT Karsa untuk membacanya.</p>
      <div class="choice"><button class="btn" data-act="s5check"${g("s5check")}>${d("search",16)} Periksa di ledger</button><button class="btn btn-primary" data-act="s5grant"${g("s5grant")}>${d("check",16)} Beri izin (sebagai PT Karsa)</button></div></div>`}`;const n=i.scenario==="actual"?e:{type:i.scenario.split(":")[0],level:i.scenario.split(":")[1]||"limited",inti:!1},s=pa({reportSent:a.report.stage==="dikirim",conclusion:n,phase:i.phase}),t=x[s.status];return`<div class="verdict" data-tone="${t.tone}">${d(t.tone==="ok"?"check":t.tone==="warn"?"alert":"x",26)}<div><span class="eyebrow">Proyek pemanfaatan panas buang Kiln 1</span><b>${t.label}</b><p>${o(t.plain)}</p></div></div>
    <ul class="checks">${s.checks.map(r=>`<li data-ok="${r.ok}"><span class="ck">${d(r.ok?"check":"x",12)}</span>${o(r.label)}</li>`).join("")}</ul>
    <div class="compare">
      <span class="tri-k">${d("bulb",14)} Coba bandingkan</span>
      <div class="bankbar">
        <div><label for="d-phase">Aturan fase</label>
          <select id="d-phase" data-change="s5phase">${Object.entries(N).map(([r,l])=>`<option value="${r}" ${i.phase===r?"selected":""}>${l.label} · ${l.short}</option>`).join("")}</select></div>
        <div><label for="d-scen">Kesimpulan auditor</label>
          <select id="d-scen" data-change="s5scenario">
            <option value="actual" ${i.scenario==="actual"?"selected":""}>Pilihanmu: ${o(D[e.type].label)}, ${e.level}</option>
            <option value="tanpa:reasonable" ${i.scenario==="tanpa:reasonable"?"selected":""}>Tanpa modifikasi, reasonable</option>
            <option value="pengecualian:limited" ${i.scenario==="pengecualian:limited"?"selected":""}>Wajar dengan pengecualian, limited</option>
            <option value="tidakmenyatakan:limited" ${i.scenario==="tidakmenyatakan:limited"?"selected":""}>Tidak menyatakan kesimpulan</option>
          </select></div>
      </div>
      <p class="fine">${o(N[i.phase].note)}</p>
    </div>
    <p class="fine">Prasyarat ini membuka akses pengajuan. Kelayakan proyek tetap dinilai terpisah. Pada ${j("sll","sustainability-linked loan")}, margin bunga dapat diturunkan bila target tercapai dan diverifikasi independen.</p>`}function ce(a){if(!i.checked||!a.conclusion)return"";const e=pa({reportSent:!0,conclusion:a.conclusion,phase:i.phase});return`Dengan kesimpulan yang kamu terbitkan, status PT Karsa: ${x[e.status].label}. Bank memutuskan berdasarkan bukti yang bisa diperiksa, bukan sekadar klaim.`}function pe(){if(!i.on)return`<aside class="ledger-panel off"><div class="lp-head"><span class="lp-title">${d("alert",16)} Tidak ada ledger</span></div><p class="lp-empty">Data tersebar di lembar kerja, email, dan dokumen. Tidak ada yang bisa memastikan mana versi yang benar.</p></aside>`;const a=I(i.chain),e=[...i.chain].reverse().slice(0,8);return`<aside class="ledger-panel" aria-label="Isi ledger">
    <div class="lp-head"><span class="lp-title">${d("book",16)} Buku catatan bersama</span><span class="chainstate sm" data-ok="${a.ok}">${a.ok?`${i.chain.length} catatan · utuh`:`terputus di #${a.seq}`}</span></div>
    <p class="lp-note">Inilah ${j("ledger","ledger")}. Setiap tindakanmu tercatat di sini dan tidak bisa dihapus.</p>
    ${e.length?`<ol class="lp-list">${e.map((n,s)=>`<li data-broken="${!a.ok&&n.seq>=a.seq}" data-new="${s===0}">
      <span class="lp-seq">#${n.seq}</span>
      <div><b>${wa[n.type]}</b><small>${o(p[n.actor].name)}${n.payload.code?" · "+o(n.payload.code):""}${n.payload.stage?" · "+o(M[n.payload.stage]):""}</small></div>
      <span class="mono lp-h" title="Sidik digital catatan ini">${na(n.hash)}</span>
    </li>`).join("")}</ol>`:'<p class="lp-empty">Masih kosong. Catatan akan muncul di sini saat kamu mencoba.</p>'}
    <p class="lp-note">Kode di kanan adalah ${j("sidik","sidik digital")}. Setiap catatan menyimpan sidik catatan sebelumnya, jadi semuanya terkunci seperti rantai.</p>
  </aside>`}function ke(){return`<section class="demo-intro">
    <span class="eyebrow">Mode demo · sekitar 5 menit · tanpa login</span>
    <h1>Ikuti satu angka emisi, dari cerobong pabrik sampai keputusan bank.</h1>
    <p class="lead">Laporan sebuah pabrik semen menyebut emisinya 1,2 juta ton CO₂ setahun. Dari mana angka itu? Siapa yang memeriksanya? Bisakah bank mempercayainya?</p>
    <div class="vs">
      <div class="vs-col" data-tone="bad"><span class="tri-k">${d("x",14)} Hari ini</span><ul><li>Angka bisa diubah tanpa jejak</li><li>Pemeriksaan independen belum wajib</li><li>Bank sulit memeriksa klaim emisi</li></ul></div>
      <div class="vs-col" data-tone="ok"><span class="tri-k">${d("check",14)} Dengan CLEAR</span><ul><li>Setiap angka punya catatan asal-usul</li><li>Auditor menelusuri sampai ke sensor</li><li>Bank memakai bukti sebagai syarat pendanaan</li></ul></div>
    </div>
    <h2 class="h-sm">Kamu akan memerankan</h2>
    <div class="intro-cast">${[1,2,3,4,5].map(a=>{const e=H[a],n=Aa[e.role];return`<div data-tone="${e.tone}">${d(n.icon,20)}<b>${a}. ${e.short}</b><span>${o(n.name)}</span></div>`}).join("")}</div>
    <h2 class="h-sm">Cara memakai demo</h2>
    <ul class="howto">
      <li>${d("check",18)}<span>Ikuti <b>Tugasmu</b> di setiap langkah. Tugas yang selesai tercentang otomatis.</span></li>
      <li><span class="dot-demo" aria-hidden="true"></span><span>Tombol yang perlu ditekan berikutnya diberi <b>lingkaran berdenyut</b>.</span></li>
      <li>${d("glossary",18)}<span>Ketuk ${j("assurance","istilah bergaris titik")} untuk melihat artinya.</span></li>
      <li>${d("skip",18)}<span>Bisa melewati langkah kapan saja, atau beralih ke versi <b>Tanpa CLEAR</b> untuk membandingkan.</span></li>
    </ul>
    <div class="btn-row"><button class="btn btn-primary btn-lg" data-act="start" data-next="true">${d("play")} Mulai demo</button></div>
    <p class="fine">Data contoh. PT Karsa Semen Mandiri Tbk dan semua orang di demo ini fiktif. Demo berjalan terpisah dan tidak mengubah data prototipe.</p>
  </section>`}function me(){const a=[{tone:"s1",ranah:"Teknis",ic:"gauge",t:"Setiap angka punya asal-usul",b:"Data sensor tercatat dengan sumber dan jam. Koreksi meninggalkan jejak, dan perubahan diam-diam memutus rantai."},{tone:"s2",ranah:"Tata kelola",ic:"users",t:"Tanggung jawab terbagi jelas",b:"Pengaju tidak bisa menyetujui koreksinya sendiri. Laporan baru keluar setelah ditelaah Komite dan disetujui Direksi."},{tone:"s3",ranah:"Regulasi",ic:"shield",t:"Melapor sekaligus membuktikan",b:"Auditor menelusuri angka sampai ke sensor, dan kesimpulannya ikut tercatat di ledger."},{tone:"s4",ranah:"Pasar",ic:"bank",t:"Bukti dihargai dengan pendanaan",b:"Bank memakai hasil assurance sebagai syarat pembiayaan hijau. Klaim tanpa bukti tidak lolos."}];return`<section class="demo-summary">
    <span class="eyebrow">Selesai</span>
    <h1>Satu angka, empat penjaga.</h1>
    ${i.on?`<p class="lead">Kamu baru saja melihat angka 68,2 ton dikoreksi menjadi 71,9 ton secara terbuka, masuk laporan, diperiksa auditor, lalu dipakai bank. ${i.chain.length} catatan tersimpan di ledger, dan tidak satu pun bisa dihapus.</p>`:'<p class="lead">Di versi tanpa CLEAR, angka bisa diubah tanpa jejak, laporan terkirim tanpa pemeriksaan berlapis, auditor menemui jalan buntu, dan bank hanya bisa percaya pada klaim. Inilah empat celah yang ditutup CLEAR.</p>'}
    <div class="sum-grid">${a.map(e=>`<article data-tone="${e.tone}">${d(e.ic,22)}<span class="eyebrow">Ranah ${e.ranah}</span><h3>${e.t}</h3><p>${e.b}</p></article>`).join("")}</div>
    <p class="punch">CLEAR memastikan setiap klaim emisi bisa ditelusuri sampai ke bukti yang mendasarinya.</p>
    <div class="btn-row"><a class="btn btn-primary" href="#ledger">Jelajahi prototipe lengkap ${d("arrow")}</a><button class="btn" data-act="replay" data-on="${i.on?0:1}">${i.on?"Coba versi tanpa CLEAR":"Coba versi dengan CLEAR"}</button><button class="btn btn-ghost" data-act="reset">${d("reset")} Ulangi demo</button></div>
  </section>`}function be(){const a=K();ma=Qa(a);const e=`<div class="seg" role="group" aria-label="Versi yang ditampilkan">
      <button data-act="mode" data-on="1" aria-pressed="${i.on}">Dengan CLEAR</button>
      <button data-act="mode" data-on="0" aria-pressed="${!i.on}">Tanpa CLEAR</button></div>`,n=`<div class="demo-top wrap">
    <div class="demo-title"><b>Mode demo</b>${h("muted","Data contoh")}</div>
    <div class="demo-tools">${e}<button class="btn btn-sm btn-ghost" data-act="reset">${d("reset",16)} Ulangi</button></div>
  </div>`;if(i.step===0)return`${n}<div class="wrap">${ke()}</div>`;if(i.step===6)return`${n}<div class="wrap">${ha()}${me()}</div>`;const s=H[i.step],t=f(i.step),r=[null,se,re,de,oe,ue][i.step](a);return`${n}
  <div class="wrap">
    ${ha()}
    <div class="demo-grid">
      <section class="step-card" data-tone="${i.on?s.tone:"bad"}" aria-labelledby="step-h">
        <div class="step-head">
          <div><span class="eyebrow">Langkah ${i.step} dari 5${i.on?"":" · versi tanpa CLEAR"}</span><h2 id="step-h">${s.title}</h2></div>
          ${ee(s)}
        </div>
        ${ne(s,a)}
        ${ae()}
        <div class="stage">${r}</div>
        ${t?te(s,a):""}
        <div class="step-nav">
          <button class="btn btn-ghost" data-act="prev">${d("back",16)} Kembali</button>
          <div class="btn-row">
            ${t?"":`<button class="btn btn-ghost" data-act="skip">${d("skip",16)} Lewati</button>`}
            <button class="btn ${t?"btn-primary":""}" data-act="next"${g("next")} ${t?"":"disabled"}>${i.step===5?"Lihat ringkasan":"Lanjut"} ${d("arrow",16)}</button>
          </div>
        </div>
      </section>
      ${pe()}
    </div>
  </div>`}const ge=Object.freeze(Object.defineProperty({__proto__:null,act:Xa,bind:Za,render:be},Symbol.toStringTag,{value:"Module"})),Ea="clear-prototipe-v1",Oa=()=>({persona:"rina",selected:"LDG-28-K1-004128",mode:null,corrTo:"",corrReason:"",corrDoc:"",grkParam:"Genset darurat",grkValue:"128",concl:"tanpa",level:"limited",inti:!1,phase:"2",requested:!1,checked:!1,backup:null,verified:!1});let v=Ga(Ea)||Ta(),u=Oa(),Z="ledger";const ia=()=>xa(Ea,v),w=(a,e,n)=>{v=oa(v,{type:a,actor:e,at:Ua(),payload:n}),ia()};function he(a,e){u[a]=e}function ve(a,e){const n=ua(v);switch(a){case"reset":v=Ta(),u=Oa(),ia(),k("Data prototipe dikembalikan ke keadaan awal.","ok");break;case"persona":u.persona=e.dataset.p||e.value;break;case"select":u.selected=e.dataset.code,u.mode=null;break;case"open-corr":u.mode="corr",u.corrTo="",u.corrReason="",u.corrDoc="";break;case"open-grk":u.mode="grk";break;case"cancel":u.mode=null;break;case"submit-corr":{const s=n.entries[u.selected],t=parseFloat(String(u.corrTo).replace(",","."));if(!isFinite(t)||t<0)return k("Isi nilai koreksi dengan angka yang valid.","bad"),!1;if(t===s.value)return k("Nilai koreksi sama dengan nilai yang berlaku.","bad"),!1;if(!u.corrReason.trim())return k("Alasan koreksi wajib diisi agar bisa diperiksa auditor.","bad"),!1;w("koreksi_ajuan",u.persona,{code:s.code,to:t,reason:u.corrReason.trim(),doc:u.corrDoc.trim()||"Tanpa lampiran"}),u.mode=null,k(`Koreksi ${s.code} diajukan oleh ${p[u.persona].name}.`,"ok");break}case"approve-corr":{const s=Ma(n.entries[u.selected],u.persona);if(!s.ok)return k(s.msg,"bad"),!1;w("koreksi_setuju",u.persona,{code:u.selected}),k("Koreksi disetujui. Nilai lama tetap tersimpan sebagai riwayat.","ok");break}case"reject-corr":{const s=n.entries[u.selected];if(!(s!=null&&s.pending))return!1;if(s.pending.by===u.persona)return k("Pengaju tidak bisa menolak koreksinya sendiri. Batalkan lewat pengendalian internal.","bad"),!1;w("koreksi_tolak",u.persona,{code:u.selected,reason:"Bukti pendukung belum memadai"}),k("Koreksi ditolak dan alasannya tercatat.","ok");break}case"approve-data":{const s=La(n.entries[u.selected],u.persona);if(!s.ok)return k(s.msg,"bad"),!1;w("data_setuju",u.persona,{code:u.selected}),k("Data inventarisasi GRK disetujui.","ok");break}case"submit-grk":{const s=parseFloat(String(u.grkValue).replace(",","."));if(!u.grkParam.trim()||!isFinite(s)||s<=0)return k("Isi sumber emisi dan nilai tCO₂e dengan benar.","bad"),!1;const t=Object.keys(n.entries).filter(l=>l.startsWith("LDG-28-GRK")).length,r=`LDG-28-GRK-${String(215+t).padStart(6,"0")}`;w("data",u.persona,{code:r,group:"LDG-28-GRK",time:"Feb 2029",src:"Inventarisasi GRK",param:u.grkParam.trim(),value:s,unit:"tCO₂e",kind:"grk"}),u.selected=r,u.mode=null,k(`${r} ditambahkan. Menunggu persetujuan pihak lain.`,"ok");break}case"stage":{const s=e.dataset.stage,t=W(n,s);if(!t.ok)return k(t.msg,"bad"),!1;w("laporan",t.actor,{stage:s}),k(`${M[s]} · ${p[t.actor].name}`,"ok");break}case"goto-entry":return u.selected=e.dataset.code,u.mode=null,location.hash==="#ledger"?!0:(location.hash="#ledger",!1);case"concl":u.concl=e.value;break;case"level":u.level=e.value;break;case"inti":u.inti=e.checked;break;case"publish":if(n.conclusion)return!1;w("kesimpulan","auditor",{type:u.concl,level:u.level,inti:u.concl==="pengecualian"&&u.inti,scope:"Emisi Scope 1, PSPK 2",standard:"ISSA 5000"}),k("Kesimpulan assurance diterbitkan ke ledger.","ok");break;case"phase":u.phase=e.value;break;case"check":if(!n.access)return u.requested=!0,k("Akses belum diberikan. Permintaan izin dikirim ke perusahaan.","bad"),!0;u.checked=!0;break;case"grant":w("akses","komite",{granted:!0,lembaga:p.bank.name}),u.checked=!0,k("PT Karsa memberi izin akses ledger kepada lembaga pembiayaan.","ok");break;case"verify":{u.verified=!0;const s=I(v);k(s.ok?`Rantai utuh: ${s.count} catatan cocok dengan sidiknya.`:`Rantai terputus di catatan #${s.seq}.`,s.ok?"ok":"bad");break}case"tamper":{u.backup=v;const s=v.find(t=>t.type==="data"&&t.payload.code==="LDG-28-K1-004128");v=Sa(v,s.seq,{value:60}),k(`Nilai awal di catatan #${s.seq} diubah diam-diam menjadi 60,0. Sidiknya tidak cocok lagi.`,"bad");break}case"restore":v=u.backup||v,u.backup=null,ia(),k("Catatan dipulihkan.","ok");break;default:return!1}}const ye=[{id:"ledger",label:"Ledger emisi",side:"Perusahaan",ic:"factory"},{id:"laporan",label:"Laporan PSPK 1 dan 2",side:"Perusahaan",ic:"file"},{id:"assurance",label:"Penelusuran dan kesimpulan",side:"Penyedia assurance",ic:"shield"},{id:"pembiayaan",label:"Verifikasi prasyarat",side:"Lembaga pembiayaan",ic:"bank"},{id:"jejak",label:"Jejak ledger",side:"OJK · pengelola ledger",ic:"book"},{id:"publik",label:"Ringkasan publik",side:"Masyarakat",ic:"users",add:!0}];function $e(a){const e=a.entries["LDG-28-GRK-000214"],n=a.entries["LDG-28-K2-004082"],s=a.report.by;return[{t:"Setujui data solar alat berat sebagai Dimas",page:"ledger",code:"LDG-28-GRK-000214",ok:(e==null?void 0:e.status)!=="menunggu"},{t:"Setujui koreksi Kiln 2 sebagai Dimas",page:"ledger",code:"LDG-28-K2-004082",ok:!(n!=null&&n.pending)},{t:"Telaah laporan sebagai Komite",page:"laporan",ok:!!s.ditelaah},{t:"Setujui laporan sebagai Direksi",page:"laporan",ok:!!s.disetujui},{t:"Kirim laporan ke auditor",page:"laporan",ok:!!s.dikirim},{t:"Terbitkan kesimpulan assurance",page:"assurance",ok:!!a.conclusion},{t:"Beri izin dan periksa prasyarat bank",page:"pembiayaan",ok:!!a.access&&u.checked},{t:"Uji keutuhan ledger",page:"jejak",ok:u.verified}]}function fe(a){const e=$e(a),n=e.filter(t=>t.ok).length,s=e.find(t=>!t.ok);return`<nav class="side" aria-label="Peran">
    <span class="eyebrow">Masuk sebagai</span>
    ${ye.map(t=>`<a href="#${t.id}" class="side-link" ${Z===t.id?'aria-current="page"':""}>${d(t.ic,18)}<span class="sl-t"><b>${t.side}</b><span>${t.label}${t.add?' <span class="tag-add">Tambahan</span>':""}</span></span></a>`).join("")}
    <div class="flow">
      <div class="flow-h"><span class="eyebrow">Alur lengkap</span><span class="flow-n">${n}/${e.length}</span></div>
      <div class="flow-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${e.length}" aria-valuenow="${n}" aria-label="Kemajuan alur"><span style="width:${n/e.length*100}%"></span></div>
      <ol class="tasks">${e.map(t=>`<li data-ok="${t.ok}" data-now="${t===s}"><span class="tk">${t.ok?d("check",13):""}</span>${t===s?`<a href="#${t.page}" ${t.code?`data-act="goto-entry" data-code="${t.code}"`:""}>${o(t.t)}</a>`:`<span>${o(t.t)}</span>`}</li>`).join("")}</ol>
      ${s?"":'<p class="fine">Semua tahap selesai. Lihat <a href="#publik">ringkasan publik</a>.</p>'}
    </div>
    <div class="side-foot">
      <p>Prototipe konsep. Nama entitas, orang, dan angka bersifat ilustratif.</p>
      <button class="btn btn-sm btn-ghost" data-act="reset">${d("reset",16)} Kembalikan data awal</button>
    </div>
  </nav>`}const je={ledger:{what:"Ini [[ledger|ledger]] emisi PT Karsa. Setiap baris adalah satu catatan dari sensor [[cems|CEMS]] atau inventarisasi bahan bakar. Pilih baris untuk melihat riwayatnya.",tryit:"Pilih entri LDG-28-GRK-000214 lalu setujui sebagai Rina: sistem menolak karena Rina yang memasukkannya. Ganti ke Dimas dan coba lagi."},laporan:{what:"Laporan [[pspk|PSPK 2]] disusun dari angka di ledger. Setiap angka harus tertaut ke catatan yang sudah disetujui.",tryit:"Tekan “Kirim ke penyedia assurance” sebelum syaratnya lengkap, dan lihat sistem menahannya."},assurance:{what:"Auditor independen menelusuri angka laporan sampai ke sensor, lalu menerbitkan kesimpulan sesuai [[issa|ISSA 5000]].",tryit:"Klik kode sampel uji untuk membuka riwayat koreksinya di ledger."},pembiayaan:{what:"Bank menilai apakah perusahaan memenuhi prasyarat pembiayaan hijau berdasarkan hasil [[assurance|assurance]] di ledger.",tryit:"Setelah status muncul, ganti aturan ke Fase 3. Kesimpulan limited tidak lagi cukup."},jejak:{what:"[[ojk|OJK]] menjaga keutuhan ledger. Setiap catatan menyimpan [[sidik|sidik digital]] dirinya dan catatan sebelumnya.",tryit:"Tekan “Simulasi: ubah data lama diam-diam”, lalu “Periksa keutuhan”. Baris yang rusak langsung ditandai."},publik:{what:"Versi sederhana untuk warga sekitar industri: berapa emisinya, dari mana angkanya, dan apakah sudah diperiksa.",tryit:""}};function Se(){const a=je[Z];return`<div class="hint">${d("info",18)}<div><p>${q(a.what)}</p>${a.tryit?`<p class="hint-try"><b>Coba:</b> ${o(a.tryit)}</p>`:""}</div></div>`}const A=(a,e,n="")=>`<header class="p-head"><div><span class="eyebrow">${a}</span><h1>${e}</h1></div><div class="p-head-r">${n}</div></header>${Se()}`;function Q(){const a=I(v);return a.ok?"":`<div class="msg" data-tone="bad">Rantai ledger terputus di catatan #${a.seq}. Ada catatan lama yang diubah tanpa prosedur. <a href="#jejak">Lihat jejak ledger</a></div>`}function Ke(a){const e=Object.values(a.entries),n=e.filter(c=>c.pending||c.status==="menunggu").length,s=36+e.filter(c=>c.revCount>0).length,t=a.entries[u.selected]||e[0],r=`<div class="persona"><span id="p-persona-l">Bertindak sebagai</span>
      <div class="seg seg-people" role="group" aria-labelledby="p-persona-l">${["rina","dimas","lestari"].map(c=>`<button data-act="persona" data-p="${c}" aria-pressed="${u.persona===c}">${d("user",15)}<span><b>${p[c].name}</b><small>${p[c].role}</small></span></button>`).join("")}</div></div>`;let l="";if(u.mode==="grk")l=`<form class="form" aria-label="Tambah data inventarisasi GRK">
      <span class="eyebrow">Tambah data inventarisasi GRK</span>
      <label for="p-gp">Sumber emisi</label><input id="p-gp" data-bind="grkParam" value="${o(u.grkParam)}">
      <label for="p-gv">Nilai (tCO₂e)</label><input id="p-gv" inputmode="decimal" data-bind="grkValue" value="${o(u.grkValue)}">
      <p class="fine">Dimasukkan oleh ${o(p[u.persona].name)}. Data baru harus disetujui pihak lain sebelum bisa dipakai di laporan.</p>
      <div class="btn-row"><button class="btn btn-primary" data-act="submit-grk">Tambahkan ke ledger</button><button class="btn btn-ghost" data-act="cancel">Batal</button></div>
    </form>`;else if(t){const c=!t.pending&&t.status!=="menunggu";l=`<div class="detail">
      <span class="eyebrow">Jejak perubahan</span>
      <h3 class="mono">${o(t.code)}</h3>
      <p class="fine">${o(t.src)} · ${o(t.param)} · ${o(t.time)}</p>
      <ol class="hist">${t.history.map((m,P)=>{const ea=P===t.history.length-1;return`<li data-latest="${ea}"><div class="hist-top"><span>${o(m.label)}</span>${ea?h("ok","Berlaku"):h("muted","Terkunci")}</div>
          <div class="hist-v ${ea||m.label==="Disetujui"?"":"struck"}">${E(t,m.value)}</div>
          ${m.reason?`<p class="hist-r">Alasan: ${o(m.reason)}${m.doc?` · <u>${o(m.doc)}</u>`:""}</p>`:""}
          ${m.note?`<p class="hist-r">${o(m.note)}</p>`:""}
          <p class="hist-m">${m.approvedBy?`Diajukan ${o(p[m.by].name)} · disetujui ${o(p[m.approvedBy].name)}`:o(p[m.by].name)} · ${o(m.at)}</p></li>`}).join("")}</ol>
      ${t.pending?`<div class="approve"><p>Koreksi ke <b>${E(t,t.pending.to)}</b> diajukan ${o(p[t.pending.by].name)}.<br><small>${o(t.pending.reason)} · ${o(t.pending.doc)}</small></p>
        <div class="btn-row"><button class="btn btn-primary btn-sm" data-act="approve-corr">Setujui koreksi</button><button class="btn btn-sm" data-act="reject-corr">Tolak</button></div></div>`:""}
      ${t.status==="menunggu"?`<div class="approve"><p>Data dimasukkan ${o(p[t.by].name)} dan menunggu persetujuan.</p><button class="btn btn-primary btn-sm" data-act="approve-data">Setujui data</button></div>`:""}
      ${u.mode==="corr"?`<form class="form" aria-label="Ajukan koreksi">
        <label for="p-ct">Nilai yang benar (${o(t.unit)})</label><input id="p-ct" inputmode="decimal" data-bind="corrTo" value="${o(u.corrTo)}" placeholder="${b(t.value,1)}">
        <label for="p-cr">Alasan koreksi</label><input id="p-cr" data-bind="corrReason" value="${o(u.corrReason)}" placeholder="Contoh: hasil uji kalibrasi ulang">
        <label for="p-cd">Lampiran bukti</label><input id="p-cd" data-bind="corrDoc" value="${o(u.corrDoc)}" placeholder="Nama berkas berita acara">
        <div class="btn-row"><button class="btn btn-primary btn-sm" data-act="submit-corr">Ajukan koreksi</button><button class="btn btn-ghost btn-sm" data-act="cancel">Batal</button></div>
      </form>`:c?'<button class="btn btn-sm" data-act="open-corr">Ajukan koreksi untuk entri ini</button>':""}
      <p class="fine">Entri lama tidak bisa dihapus dan tetap terbaca oleh penyedia assurance dan OJK. Pengaju koreksi tidak dapat menyetujui koreksinya sendiri.</p>
    </div>`}return`${A(`${O} · ${Ka}`,"Ledger emisi",h("info","Fase 2 · limited assurance"))}
  ${r}
  ${Q()}
  <div class="kpis">
    <div class="kpi"><span>Kelengkapan data jam-an</span><b>99,1%</b><small>17.412 dari 17.568 jam, 2 kiln</small></div>
    <div class="kpi"><span>Entri dikoreksi</span><b>${s}</b><small>Semua beralasan dan disetujui pihak lain</small></div>
    <div class="kpi"><span>Jam dengan data substitusi</span><b>156</b><small>Metode wajib didokumentasikan</small></div>
    <div class="kpi" data-alert="${n>0}"><span>Menunggu persetujuan</span><b>${n}</b><small>Koreksi dan data inventarisasi GRK</small></div>
  </div>
  <div class="p-grid">
    <section class="panel">
      <div class="panel-h"><h2>Entri ledger</h2><button class="btn btn-sm" data-act="open-grk">Tambah data inventarisasi GRK</button></div>
      <div class="tbl-wrap"><table class="tbl click">
        <thead><tr><th>Entri dan waktu</th><th>Sumber</th><th class="r">Nilai</th><th>Status</th></tr></thead>
        <tbody>${e.map(c=>`<tr data-act="select" data-code="${c.code}" aria-selected="${c.code===(t==null?void 0:t.code)}" tabindex="0">
          <td><span class="mono nw">${o(c.code)}</span><small class="block">${o(c.time)}</small></td><td>${o(c.src.split(" · ")[0])}<small class="block">${o(c.param)}</small></td><td class="r num">${E(c)}</td><td>${_a(c)}</td></tr>`).join("")}</tbody>
      </table></div>
      <p class="fine">Menampilkan contoh entri. Ledger penuh berisi 8.784 entri jam-an per kiln untuk periode 2028.</p>
    </section>
    <aside class="panel">${l}</aside>
  </div>`}function we(a){const e=_.reduce((l,c)=>l+L(c,a.entries),0),n=X(a),s=Da(a),t=a.report.by,r=a.report.stage==="dikirim"?h("ok","Terkirim ke penyedia assurance"):h("warn",s?`Menunggu: ${M[s]}`:"");return`${A(`${O} · ${Ka}`,"Laporan keberlanjutan PSPK 1 dan 2",r)}
  ${Q()}
  <div class="p-grid">
    <section class="panel">
      <div class="tabs" role="tablist"><span>Tata kelola</span><span>Strategi</span><span>Manajemen risiko</span><span aria-selected="true">Metrik dan target · PSPK 2</span></div>
      <h2>Emisi GRK Scope 1: cerobong dan sumber tidak bergerak</h2>
      <p class="fine">Setiap angka wajib tertaut ke entri ledger sebelum laporan dapat dikirim ke penyedia assurance.</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Sumber</th><th class="r">Nilai 2028</th><th>Metode</th><th>Rujukan ledger</th><th>Status tautan</th></tr></thead><tbody>
        ${_.map(l=>{const c=ca(l,a.entries),m=Object.values(a.entries).find(P=>P.group===l.group&&(P.pending||P.status==="menunggu"))||Object.values(a.entries).find(P=>P.group===l.group);return`<tr><td>${l.label}</td><td class="r num">${b(L(l,a.entries),1)} tCO₂</td><td>${l.method}</td>
            <td><button class="linkish mono" data-act="goto-entry" data-code="${(m==null?void 0:m.code)||""}">${l.group}</button><small class="block">${l.count}</small></td>
            <td>${c.ok?h("ok","Tertaut 100%"):h("warn",`${c.open} entri menunggu`)}</td></tr>`}).join("")}
        <tr class="tot"><td>Total Scope 1</td><td class="r num">${b(e,1)} tCO₂e</td><td colspan="3"></td></tr>
      </tbody></table></div>
      <div class="support">
        <div><b>Metode pengukuran</b><p>CO₂ dan laju alir gas buang diukur CEMS, dikirim jam-an ke SISPEK, lalu diteruskan otomatis ke ledger.</p></div>
        <div><b>Batas pelaporan</b><p>Dua kiln dan sumber bahan bakar lain di pabrik utama. Scope 3 dan klaim offset di luar cakupan.</p></div>
        <div><b>Asumsi</b><p>Jam tanpa data diisi metode substitusi yang ditetapkan dan didokumentasikan per kejadian.</p></div>
        <div><b>Keterbatasan data</b><p>156 jam (0,9%) memakai data substitusi akibat gangguan analyzer dan jadwal kalibrasi.</p></div>
      </div>
    </section>
    <aside class="panel">
      <span class="eyebrow">Pemisahan tugas</span>
      <ol class="duty">${G.map(l=>{const c=!!t[l],m=s===l;return`<li data-done="${c}"><span class="duty-n">${c?"✓":G.indexOf(l)+1}</span><div><b>${M[l]}</b><span>${c?`${o(p[t[l].actor].name)} · ${o(t[l].at)}`:`Oleh ${o(p[Pa[l]].name)}`}</span></div>
          ${m&&l!=="dikirim"?`<button class="btn btn-sm" data-act="stage" data-stage="${l}">${l==="ditelaah"?"Telaah":"Setujui"}</button>`:""}</li>`}).join("")}</ol>
      <span class="eyebrow">Syarat kirim ke assurance</span>
      <ul class="checks">${n.map(l=>`<li data-ok="${l.ok}"><span class="ck">${l.ok?"✓":"!"}</span>${o(l.label)}<small>${o(l.note)}</small></li>`).join("")}</ul>
      <button class="btn btn-primary wide" data-act="stage" data-stage="dikirim" ${a.report.stage==="dikirim"?"disabled":""}>${a.report.stage==="dikirim"?"Sudah dikirim":"Kirim ke penyedia assurance"}</button>
      <p class="fine">Penyedia: KAP Pradana Wiratama dan Rekan, ditunjuk atas rekomendasi Komite Keberlanjutan.</p>
    </aside>
  </div>`}function Pe(a){const e=a.report.stage==="dikirim",n=a.entries["LDG-28-K1-004128"],s=h("info","Praktisi bersertifikat")+`<span class="who-tag">${p.auditor.name} · Rekan penanggung jawab</span>`;if(!e)return`${A(`KAP Pradana Wiratama dan Rekan · Klien ${O}`,"Penelusuran dan kesimpulan assurance",s)}
    <div class="locked"><b>Laporan belum diterima.</b><p>Penelusuran baru bisa dimulai setelah perusahaan mengirim laporan PSPK yang semua angkanya tertaut ke ledger, ditelaah Komite, dan disetujui Direksi.</p><a class="btn" href="#laporan">Buka laporan perusahaan</a></div>`;const t=a.conclusion;return`${A(`KAP Pradana Wiratama dan Rekan · Klien ${O}`,"Penelusuran dan kesimpulan assurance",s)}
  ${Q()}
  <div class="kpis">
    <div class="kpi"><span>Standar</span><b class="sm">ISSA 5000</b></div>
    <div class="kpi"><span>Tingkat keyakinan</span><b class="sm">${o(z[t?t.level:u.level])}</b></div>
    <div class="kpi"><span>Cakupan</span><b class="sm">Emisi Scope 1, PSPK 2</b></div>
    <div class="kpi"><span>Independensi</span><b class="sm ok">Pernyataan ditandatangani</b></div>
  </div>
  <section class="panel">
    <div class="panel-h"><h2>Telusuri angka ke sumbernya</h2><span class="fine">Emisi Scope 1 Kiln 1, dari laporan sampai sensor di cerobong</span></div>
    <div class="drill row">
      <div class="drill-node" data-tone="s2"><span>1 · Laporan PSPK 2</span><b>${b(L(_[0],a.entries),1)} tCO₂</b><small>Metrik Scope 1, Kiln 1</small></div>
      <div class="drill-node" data-tone="ink"><span>2 · Assurance ledger</span><b class="mono">LDG-28-K1</b><small>8.784 entri, ${n.revCount?"koreksi tercatat":"tanpa koreksi"}, 122 jam substitusi</small></div>
      <div class="drill-node" data-tone="s1"><span>3 · SISPEK (KLH)</span><b>8.662</b><small>Kiriman jam-an, cocok dengan nilai awal di ledger</small></div>
      <div class="drill-node" data-tone="s1"><span>4 · CEMS Kiln 1</span><b>Analyzer CO₂ dan flow meter</b><small>Kalibrasi terakhir 13 Mar 2028</small></div>
    </div>
    <p class="sample-line">Sampel uji <button class="linkish mono" data-act="goto-entry" data-code="LDG-28-K1-004128">LDG-28-K1-004128</button>: ${b(n.original,1)} menjadi ${b(n.value,1)} t/jam. Alasan dan berita acara kalibrasi tersedia; pengaju dan penyetuju berbeda.</p>
  </section>
  <div class="p-grid">
    <section class="panel">
      <h2>Temuan pemeriksaan</h2>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Kode</th><th>Temuan</th><th>Materialitas</th><th>Tindak lanjut manajemen</th></tr></thead><tbody>
        ${za.map(r=>`<tr><td class="mono">${r.code}</td><td>${o(r.text)}</td><td>${r.mat==="Perlu dikoreksi"?h("warn",r.mat):o(r.mat)}</td><td>${h("ok","Selesai")}<small class="block">${o(r.follow)}</small></td></tr>`).join("")}
      </tbody></table></div>
    </section>
    <aside class="panel">
      <fieldset ${t?"disabled":""}><legend class="eyebrow">Jenis kesimpulan · sesuai ISSA 5000</legend>
        ${Object.entries(D).map(([r,l])=>`<label class="radio"><input type="radio" name="p-concl" value="${r}" data-change="concl" ${(t?t.type:u.concl)===r?"checked":""}><span><b>${l.label}</b><small>${l.plain}</small></span></label>`).join("")}
        ${(t?t.type:u.concl)==="pengecualian"?`<label class="check"><input type="checkbox" data-change="inti" ${(t?t.inti:u.inti)?"checked":""}> Pengecualian menyangkut metrik emisi inti</label>`:""}
        <label for="p-level" class="eyebrow">Tingkat keyakinan</label>
        <select id="p-level" data-change="level">${Object.entries(z).map(([r,l])=>`<option value="${r}" ${(t?t.level:u.level)===r?"selected":""}>${l}</option>`).join("")}</select>
      </fieldset>
      ${t?`<div class="msg" data-tone="ok">Kesimpulan tercatat di ledger sebagai catatan #${t.seq} (${o(t.at)}).</div><a class="btn wide" href="#pembiayaan">Lihat dari sisi lembaga pembiayaan</a>`:'<p class="fine">Semua temuan telah ditindaklanjuti. Kesimpulan akan dicatat permanen di ledger.</p><button class="btn btn-primary wide" data-act="publish">Terbitkan kesimpulan ke ledger</button>'}
    </aside>
  </div>`}function Te(a){const e=pa({reportSent:a.report.stage==="dikirim",conclusion:a.conclusion,phase:u.phase}),n=x[e.status],s=`<label class="persona" for="p-phase">Aturan prasyarat<select id="p-phase" data-change="phase">${Object.entries(N).map(([t,r])=>`<option value="${t}" ${u.phase===t?"selected":""}>${r.label}</option>`).join("")}</select></label>`;return`${A("Unit Pembiayaan Berkelanjutan · lembaga pembiayaan ilustratif","Verifikasi prasyarat pendanaan berlabel hijau",s)}
  ${Q()}
  <div class="p-grid">
    <section class="panel">
      <div class="searchrow"><label for="p-emiten" class="sr">Emiten pengaju</label><input id="p-emiten" value="${O}" readonly><button class="btn btn-primary" data-act="check">Periksa di ledger</button></div>
      ${!a.access&&u.requested?'<div class="approve"><p><b>Menunggu izin perusahaan.</b> Lembaga pembiayaan hanya dapat membaca ledger emiten atas persetujuan emiten.</p><button class="btn btn-sm" data-act="grant">Setujui permintaan (simulasi sisi PT Karsa)</button></div>':""}
      ${a.access&&u.checked?`
        <span class="eyebrow">Pengajuan obligasi hijau</span>
        <h2>Proyek pemanfaatan panas buang Kiln 1</h2>
        <div class="verdict" data-tone="${n.tone}"><b>${n.label}</b><p>${o(n.plain)}</p></div>
        <ul class="checks">${e.checks.map(t=>`<li data-ok="${t.ok}"><span class="ck">${t.ok?"✓":"×"}</span>${o(t.label)}${t.label.startsWith("Assurance")&&a.conclusion?"<small>KAP Pradana Wiratama dan Rekan</small>":""}${t.label.startsWith("Jenis")&&a.conclusion?`<small>${o(D[a.conclusion.type].label)}</small>`:""}</li>`).join("")}</ul>
        <p class="fine">Prasyarat ini membuka akses pengajuan. Kelayakan proyek dan persyaratan pembiayaan lain tetap dinilai terpisah. Akses diberikan ${o(a.access.at)}.</p>`:!u.requested||a.access?'<p class="muted pad">Tekan “Periksa di ledger” untuk menilai prasyarat emiten.</p>':""}
    </section>
    <aside class="panel">
      <span class="eyebrow">Kriteria terbuka</span>
      <h3>Aturan jenis kesimpulan</h3>
      <dl class="rules">
        <div data-tone="ok"><dt>Memenuhi</dt><dd>Kesimpulan tanpa modifikasi.</dd></div>
        <div data-tone="warn"><dt>Memenuhi bersyarat</dt><dd>Wajar dengan pengecualian, selama pengecualian tidak menyangkut metrik emisi inti dan ada rencana tindak lanjut sampai periode berikutnya.</dd></div>
        <div data-tone="bad"><dt>Tidak memenuhi</dt><dd>Tidak wajar, atau tidak menyatakan kesimpulan.</dd></div>
      </dl>
      <p class="fine">Tingkat keyakinan minimal: limited pada Fase 2, reasonable untuk metrik emisi inti pada Fase 3.</p>
    </aside>
  </div>
  <section class="panel">
    <h2>Pengajuan lain</h2>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Emiten</th><th>Sektor</th><th>Keyakinan</th><th>Kesimpulan</th><th>Status prasyarat</th></tr></thead><tbody>
      ${Wa.map(t=>`<tr><td>${t.name}</td><td>${t.sector}</td><td>${t.level}</td><td>${t.concl}</td><td>${h(x[t.status].tone,x[t.status].label)}</td></tr>`).join("")}
    </tbody></table></div>
  </section>`}function Me(){const a=I(v);return`${A("Otoritas Jasa Keuangan · pengelola ledger","Jejak ledger",`<span class="chainstate" data-ok="${a.ok}">${a.ok?`Rantai utuh · ${a.count} catatan`:`Terputus di catatan #${a.seq}`}</span>`)}
  <section class="panel">
    <div class="panel-h"><div><h2>Semua catatan, dari yang terbaru</h2><p class="fine">Catatan hanya bisa ditambah. Setiap catatan menyimpan sidiknya sendiri dan sidik catatan sebelumnya. <span class="tag-add">Tambahan</span></p></div>
      <div class="btn-row"><button class="btn btn-sm" data-act="verify">Periksa keutuhan</button>${u.backup?'<button class="btn btn-sm" data-act="restore">Pulihkan catatan</button>':'<button class="btn btn-sm btn-danger" data-act="tamper">Simulasi: ubah data lama diam-diam</button>'}</div></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>Jenis</th><th>Pelaku</th><th>Waktu</th><th>Isi</th><th>Sidik</th><th>Sidik sebelumnya</th></tr></thead><tbody>
      ${[...v].reverse().map(e=>{const n=e.payload,s=e.type==="data"?`${n.code}: ${b(n.value,1)} ${n.unit}`:e.type.startsWith("koreksi")?`${n.code}${n.to!=null?" → "+b(n.to,1):""}`:e.type==="laporan"?M[n.stage]:e.type==="kesimpulan"?`${D[n.type].label}, ${n.level}`:e.type==="akses"?`Akses untuk ${n.lembaga}`:n.code||"";return`<tr data-broken="${!a.ok&&e.seq>=a.seq}"><td class="num">${e.seq}</td><td>${wa[e.type]}</td><td>${o(p[e.actor].name)}</td><td>${o(e.at)}</td><td>${o(s)}</td><td class="mono">${na(e.hash)}</td><td class="mono muted">${na(e.prev)}</td></tr>`}).join("")}
    </tbody></table></div>
  </section>`}function Le(a){const e=_.reduce((t,r)=>t+L(r,a.entries),0),n=a.conclusion,s=I(v);return`${A("Ringkasan publik · terbuka untuk masyarakat",O,'<span class="tag-add">Tambahan prototipe</span>')}
  <section class="public">
    <div class="pub-main"><span class="eyebrow">Emisi Scope 1 · 2028</span><b class="pub-n">${b(e,0)}</b><span class="pub-u">ton CO₂ ekuivalen</span></div>
    <div class="pub-cards">
      <div><span class="eyebrow">Sudah diperiksa pihak independen?</span><b>${n?"Ya":"Belum"}</b><p>${n?`${D[n.type].label} · keyakinan ${n.level} · KAP Pradana Wiratama dan Rekan`:"Laporan masih dalam proses pemeriksaan."}</p></div>
      <div><span class="eyebrow">Dari mana angkanya?</span><b>97% dari sensor</b><p>Sensor CEMS di dua cerobong kiln, dilaporkan tiap jam ke KLH. Sisanya dari inventarisasi bahan bakar.</p></div>
      <div><span class="eyebrow">Ada koreksi?</span><b>Ya, tercatat terbuka</b><p>Setiap koreksi disertai alasan dan bukti, dan nilai lamanya tetap tersimpan.</p></div>
      <div><span class="eyebrow">Catatan utuh?</span><b>${s.ok?"Utuh":"Ada yang tidak cocok"}</b><p>${s.ok?"Tidak ada catatan lama yang berubah tanpa prosedur.":"Sistem mendeteksi perubahan di luar prosedur."}</p></div>
    </div>
    <p class="fine">Ringkasan ini disusun dari data ledger yang sudah diperiksa. Tujuannya agar warga sekitar industri bisa menilai kinerja lingkungan tanpa harus membaca laporan teknis.</p>
  </section>`}function De(a){Z=a||"ledger";const e=ua(v),n={ledger:Ke,laporan:we,assurance:Pe,pembiayaan:Te,jejak:Me,publik:Le}[Z](e);return`<div class="proto wrap">
    ${fe(e)}
    <div class="proto-main">
      <div class="proto-note">Prototipe interaktif · semua tombol berfungsi · data contoh tersimpan di browser ini</div>
      ${n}
    </div>
  </div>`}const C=Object.freeze(Object.defineProperty({__proto__:null,act:ve,bind:he,render:De},Symbol.toStringTag,{value:"Module"})),ra={beranda:{view:Fa,nav:"beranda"},demo:{view:ge,nav:"demo"},ledger:{view:C,page:"ledger",nav:"prototipe"},laporan:{view:C,page:"laporan",nav:"prototipe"},assurance:{view:C,page:"assurance",nav:"prototipe"},pembiayaan:{view:C,page:"pembiayaan",nav:"prototipe"},jejak:{view:C,page:"jejak",nav:"prototipe"},publik:{view:C,page:"publik",nav:"prototipe"}};let S=ra.beranda;const Ae=document.getElementById("view");function aa({keepScroll:a=!0}={}){var n,s;const e=window.scrollY;Ae.innerHTML=S.view.render(S.page),a&&window.scrollTo(0,e),document.querySelectorAll("[data-nav]").forEach(t=>{t.toggleAttribute("aria-current",t.dataset.nav===S.nav),t.dataset.nav===S.nav&&t.setAttribute("aria-current","page")}),(s=(n=S.view).after)==null||s.call(n)}function Ia(){const a=(location.hash||"#beranda").slice(1),e=ra[a]||ra.beranda,n=e!==S;S=e,aa({keepScroll:!n}),n&&window.scrollTo(0,0)}const T=document.getElementById("sheet");let R=null;function Ba(a,e){R=document.activeElement,T.querySelector(".sheet-body").innerHTML=a,T.setAttribute("aria-label",e),T.hidden=!1,T.querySelector(".sheet-close").focus()}function ba(){var a;T.hidden||(T.hidden=!0,(a=R==null?void 0:R.focus)==null||a.call(R))}function Ce(a){const e=la[a];e&&Ba(`<span class="eyebrow">Arti istilah</span><h3>${o(e.t)}</h3><p>${o(e.d)}</p>
    <button class="linkish" data-glossary="all">Lihat semua istilah</button>`,`Arti istilah ${e.t}`)}function Re(){const a=Object.entries(la).sort((e,n)=>e[1].t.localeCompare(n[1].t,"id"));Ba(`<span class="eyebrow">Kamus istilah</span><h3>Istilah yang dipakai di CLEAR</h3>
    <dl class="gloss">${a.map(([,e])=>`<div><dt>${o(e.t)}</dt><dd>${o(e.d)}</dd></div>`).join("")}</dl>`,"Kamus istilah")}document.addEventListener("click",a=>{const e=a.target.closest("[data-term]");if(e){a.preventDefault(),Ce(e.dataset.term);return}if(a.target.closest("[data-glossary]")){a.preventDefault(),Re();return}if(a.target.closest("[data-sheet-close]")||a.target===T){ba();return}const n=a.target.closest("[data-act]");!n||n.disabled||(a.preventDefault(),S.view.act(n.dataset.act,n,a)!==!1&&aa())});document.addEventListener("change",a=>{const e=a.target.closest("[data-change]");e&&S.view.act(e.dataset.change,e,a)!==!1&&aa()});document.addEventListener("input",a=>{var n,s;const e=a.target.closest("[data-bind]");e&&((s=(n=S.view).bind)==null||s.call(n,e.dataset.bind,e.type==="checkbox"?e.checked:e.value))});document.addEventListener("keydown",a=>{if(a.key==="Escape"){ba();return}if(a.key!=="Enter"&&a.key!==" ")return;const e=a.target.closest("tr[data-act]");e&&(a.preventDefault(),S.view.act(e.dataset.act,e,a)!==!1&&aa())});document.addEventListener("submit",a=>a.preventDefault());document.querySelectorAll("[data-icon]").forEach(a=>a.innerHTML=d(a.dataset.icon,16));window.addEventListener("hashchange",()=>{ba(),Ia()});Ia();
