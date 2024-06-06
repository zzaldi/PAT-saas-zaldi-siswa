import { Card, Button } from "flowbite-react";
import React, { Component } from "react";
import hero from "./assets/profil.jpg";
import "./style.css";

class Fitur3 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-col items-center pt-36">
                <img
                  class="w-30 h-30 mb-3 rounded-full shadow-lg"
                  src={hero}
                  alt=""
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Pak Bayu
                </h5>
                <div class="mt-4 row text-center">
                  <p class="h3 mb-3 font-normal text-gray-700 dark:text-gray-400">
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
              <div class="shadow">
                <div class="row">
                  <Card>
                    <form>
                      <div class=" col-lg-12 mx-auto d-flex justify-content-center flex-column">
                        <h3 class="text-center h1">Contact us</h3>
                        <form
                          role="form"
                          id="contact-form"
                          method="post"
                          autocomplete="off"
                        >
                          <div>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                              <div>
                                <label
                                  for="first_name"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  First name
                                </label>
                                <input
                                  type="text"
                                  id="first_name"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="John"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  for="last_name"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  id="last_name"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Doe"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  for="phone"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Phone number
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="123-45-678"
                                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  for="website"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Website URL
                                </label>
                                <input
                                  type="url"
                                  id="website"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="flowbite.com"
                                  required
                                />
                              </div>
                            </div>
                            <div class="mb-4">
                              <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Email address
                              </label>
                              <input
                                type="email"
                                id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="john.doe@company.com"
                                required
                              />
                            </div>
                            <div class="input-group mb-4 input-group-static">
                              <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your message
                              </label>
                              <textarea
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your thoughts here..."
                              ></textarea>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                <div class="form-check form-switch mb-4 d-flex align-items-center">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckDefault"
                                    checked=""
                                  />
                                  <label
                                    class="form-check-label ms-3 mb-0"
                                    for="flexSwitchCheckDefault"
                                  >
                                    I agree to the{" "}
                                    <a href="javascript:;" class="text-dark">
                                      <u>Terms and Conditions</u>
                                    </a>
                                    .
                                  </label>
                                </div>
                              </div>
                              <div class="col-md-12">
                                <button
                                  type="submit"
                                  class="btn bg-gradient-dark w-100"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </form>
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
