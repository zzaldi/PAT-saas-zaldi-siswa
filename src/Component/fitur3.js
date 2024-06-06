import { Card, Button } from "flowbite-react";
import React, { Component } from "react";
import hero from "./assets/hero.jpg";
import gambar from "./assets/images.jpg";
import poster from "./assets/poster.jpg";
import './style.css';

class Fitur3 extends Component {
  render() {
    return (
      <div className="container">
        <div className="h1">
          Kegiatan sekolah
          <hr className="my-6 border lg:my-8" />
        </div>
        <div className=" card bg-dark shadow white:bg-gray-900 p-4">
          <div className="row">
            <div className="col order-5">
              <div className="row">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="mb-3 font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="mb-3 font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="mb-3 font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <br />
            </div>
            <div className="col order-5">
              <div className="row">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="mb-3 font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="mb-3 font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="mb-3 font-normal">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <br />
            </div>
            <div className="col order-5">
              <img className="h-auto w-100" src={poster} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fitur3;
