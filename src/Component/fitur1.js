
import React, { Component } from "react";

class Fitur1 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col">
          <div className="h1 text-green-800 hover:text-green-500">
           Islamic Boarding School<br/>SMK TI Bazma
          </div>
            <div className="mb-3 p h3 pt-5">
              Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
              merupakan sekolah unggulan berasrama yang diperuntukkan bagi
              anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun
              operasional didanai dari hasil pengelolaan wakaf dan sumber dana
              sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
              <br></br>
              SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
              selama 4 tahun dengan siswa-siswa yang berasal dari berbagai
              daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan
              pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan &
              Aplikasi) dengan kombinasi kurikulum berbasis asrama.
            </div>
            <button className="btn btn-dark">Selengkapanya</button>
          </div>
          <div className="col order-5 text-center">
            <iframe
              className="w-100 h-75"
              src="https://www.youtube.com/embed/Nulb66XCXJ0?si=WanfLZHnX-bhofLi"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Fitur1;
