import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Kita | Desain logo UMKM dalam 3 hari",
  description: "Revisi tanpa batas, hasil siap pakai untuk usaha kecilmu."
};

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/assets/style.css" precedence="default" />
      <meta name="theme-color" content="#0b0b0f" />
      <a className="skip" href="#main">Lewati ke konten</a>
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#">
            <i>S</i>
            <span>Studio Kita</span>
          </a>
          <nav className="links" aria-label="Menu utama">
            <a href="#fitur">Keunggulan</a>
            <a href="#layanan">Layanan</a>
            <a href="#kontak">Kontak</a>
          </nav>
          <a className="btn" href="mailto:hello@studiokita.id">Minta Penawaran</a>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <div className="hero h-editorial">
          <div className="glow"></div>
          <div className="wrap">
            <div className="hed">
              <div className="hed-top"><span className="slo">Logo cepat, brand kuat</span></div>
              <h1>Desain logo UMKM dalam 3 hari</h1>
              <div className="hed-bot">
                <p className="sub">Revisi tanpa batas, hasil siap pakai untuk usaha kecilmu.</p>
                <div className="row">
                  <a className="btn" href="mailto:hello@studiokita.id">Minta Penawaran</a>
                  <a className="btn ghost" href="#fitur">Lihat keunggulan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="fitur">
          <div className="wrap">
            <div className="flist">
              <div className="head">
                <h2>Keunggulan</h2>
                <p>Logo cepat, brand kuat</p>
              </div>
              <ol className="fedlist">
                <li className="fe">
                  <span className="fn">01</span>
                  <h3>3 hari kerja</h3>
                  <p>Konsep pertama dikirim pada hari ketiga setelah order.</p>
                </li>
                <li className="fe">
                  <span className="fn">02</span>
                  <h3>Revisi unlimited</h3>
                  <p>Perbaikan sampai kamu puas, tanpa tambahan biaya.</p>
                </li>
                <li className="fe">
                  <span className="fn">03</span>
                  <h3>Khusus UMKM</h3>
                  <p>Harga disesuaikan dengan modal usaha kecil.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section id="layanan">
          <div className="wrap">
            <h2>Layanan</h2>
            <div className="items">
              <article className="card prod large">
                <div className="pico">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                  </svg>
                </div>
                <div className="pbody">
                  <div className="ptags"><span className="ptag hot">Paling dicari</span></div>
                  <h3>Paket Logo Express</h3>
                  <p>3 konsep awal, revisi unlimited, file siap cetak.</p>
                </div>
              </article>
              <article className="card prod">
                <div className="pico">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m14.622 17.897-10.68-2.913"></path>
                    <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path>
                    <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path>
                  </svg>
                </div>
                <div className="pbody">
                  <h3>Paket Identitas Visual</h3>
                  <p>Logo, palet warna, tipografi, panduan penggunaan.</p>
                </div>
              </article>
              <article className="card prod">
                <div className="pico">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m7.5 4.27 9 5.15"></path>
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                <div className="pbody">
                  <h3>Desain Kemasan Produk</h3>
                  <p>Label dan kemasan sesuai ukuran produkmu.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="tentang">
          <div className="wrap">
            <div className="card info one">
              <div className="ci">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </i>
                <div>
                  <small>Alamat</small>
                  <span>Jl. Merdeka No.10, Jakarta</span>
                </div>
              </div>
              <div className="ci">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </i>
                <div>
                  <small>Email</small>
                  <span>hello@studiokita.id</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="kontak">
          <div className="wrap">
            <div className="band">
              <div><h2>Hubungi kami</h2></div>
              <div className="row">
                <a className="btn " href="mailto:hello@studiokita.id">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  Minta Penawaran
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap">
          <span>© Studio Kita · Logo cepat, brand kuat</span>
          <span>Dibuat dengan Depup AI Web Builder</span>
        </div>
      </footer>
    </>
  );
}
