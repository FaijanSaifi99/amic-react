import React from "react";
import Card from "./Card";
import ListingApi from "../api/ListingApi";
import Accordian  from "./Accordian";

const ListingSec = () => {
  return (
    <>
      <section class="filter-section container-fluid pt-5">
        <div class="row d-flex">
          <div class="" id="filter-s">
            <h3>
              <strong>Filter's</strong>{" "}
            </h3>
            <div id="sizes">
              <div class="sizes-con">
                <div id="sizes-plus" class="d-flex justify-content-between">
                  <div>Size</div>
                  <div>+</div>
                </div>
              </div>
              <div id="sizes-category">
                <ul>
                  <li>
                    <a href="">S</a>
                  </li>
                  <li>
                    <a href="">M</a>
                  </li>
                  <li>
                    <a href="">L</a>
                  </li>
                  <li>
                    <a href="">XL</a>
                  </li>
                  <li>
                    <a href="">2XL</a>
                  </li>
                  <li>
                    <a href="">3XL</a>
                  </li>
                  <li>
                    <a href="">4XL</a>
                  </li>
                  <li>
                    <a href="">5XL</a>
                  </li>
                  <li>
                    <a href="">6XL</a>
                  </li>
                  <li>
                    <a href="">38</a>
                  </li>
                  <li>
                    <a href="">40</a>
                  </li>
                  <li>
                    <a href="">42</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="cat-fil">
              <ul class="d-flex ">
                <Accordian/>
                <Accordian/>
                <Accordian/>
                <Accordian/>
                <Accordian/>
                <Accordian/>
              </ul>
            </div>
          </div>
          <div class="" id="Men-s-Plain">
            <div id="Men-s-Plain-head" class="d-flex justify-content-between">
              <h3>
                <strong> Men's Plain T-Shirts</strong> (100)
              </h3>
              <div>
                <a href="">sort by popular</a>
              </div>
            </div>

            <section class="container-fluid cards-section">
              <div class="row d-flex gap-4 align-item-center justify-content-center">
                {ListingApi.map(function ncard(val) {
                  return (
                    <Card
                      cardimg={val.cardimg}
                      cardCon={val.cardCon}
                      curprice={val.curprice}
                      realprice={val.realprice}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingSec;
