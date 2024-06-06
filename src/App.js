import "bootstrap/dist/css/bootstrap.css";
import "flowbite";
import React from "react";
import { Card } from "flowbite-react";
import "./App.css";
import Fitur1 from "./Component/fitur1";
import Myfooter from "./Component/footer";
import Myheader from "./Component/myheader";
import Fasilitas from "./Component/fitur2";
import Fitur3 from "./Component/fitur3";
import Fitur4 from "./Component/fitur4";

function App() {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto ">
        <Myheader />

        <div className="container mt-5 pr-5">
          <Card>
            <div className="mx-auto w-100 h-50 pt-5">
              <div className="pt-5">
                <Fitur1 />
              </div>
              <div className="pt-5">
                <Fasilitas />
              </div>
              <div className="pt-5">
                <div className="pt-5">
                  <Fitur3 />

                  <div className="pt-5">
                    <Fitur4 />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="pt-5">
        <Myfooter />
      </div>
    </div>
  );
}

export default App;
