import React, { Component } from "react";
import { Card } from "flowbite-react";
import hero from "./assets/profil.jpg";
import "./style.css";

class Fitur3 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pt-36">
                <img
                  className="w-30 h-30 mb-3 rounded-full shadow-lg"
                  src={hero}
                  alt=""
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Pak Bayu
                </h5>
                <div className="mt-4 row text-center">
                  <p className="h3 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Saya merupakan guru pengajar teknologi pada SMK TI
                    Bazma,dengan mengajarkan silabus html,css, js, figma,
                    wordpress dasar dan tingkat lanjut, php, laravel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <section>
              <div className="shadow">
                <div className="row">
                  <Card>
                    <div className="col-lg-12 mx-auto d-flex justify-content-center flex-column">
                      <h3 className="text-center h1">Contact us</h3>
                      <form
                        role="form"
                        id="contact-form"
                        method="post"
                        autoComplete="off"
                      >
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                          <div>
                            <label
                              htmlFor="first_name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              id="first_name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="John"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="last_name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id="last_name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Doe"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Phone number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="123-45-678"
                              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="website"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Website URL
                            </label>
                            <input
                              type="url"
                              id="website"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="flowbite.com"
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@company.com"
                            required
                          />
                        </div>
                        <div className="input-group mb-4 input-group-static">
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your message
                          </label>
                          <textarea
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-check form-switch mb-4 d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked=""
                              />
                              <label
                                className="form-check-label ms-3 mb-0"
                                htmlFor="flexSwitchCheckDefault"
                              >
                                I agree to the{" "}
                                <a href="javascript:;" className="text-dark">
                                  <u>Terms and Conditions</u>
                                </a>
                                .
                              </label>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="btn bg-gradient-dark w-100"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Fitur3;
