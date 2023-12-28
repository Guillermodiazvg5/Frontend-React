import React from "react";

import FrutosSecos from '../assets/FrutosSecos.jpg'



export default function SloganImage() {
  return (
    <div>
      <div class="row mb-1 mt-1 second-row  ">
        <div class="col-6   ">
          <h1 class="h1-p-preline text-dark">
            Eat clean, feel
            <span class="span-color">great</span>
          </h1>

          <p class="h1-p-preline text-dark">
            {" "}
            Your body is a temple, and it deserves to be treated with respect.
            Nourish it with wholesome foods that will keep you feeling great.{" "}
          </p>

          <div class=" col text-start">
            <button
              type="button"
              class=" text-warning btn btn-outline-secondary font-weight-bold  "
            >
              Discover Now
            </button>
          </div>
        </div>

        <div class="col-6  text-dark d-flex align-items-center justify-content-center text-center second-column ">
          <img src={FrutosSecos} class="img-fluid rounded " alt="Img Err" />
        </div>
      </div>
    </div>
  );
}
