import React from "react";
import Card from "./Card";
import ListingApi from "../api/ListingApi";
import Accordian  from "./Accordian";
import { Link } from "react-router-dom";

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
                    <Link to="">S</Link>
                  </li>
                  <li>
                    <Link to="">M</Link>
                  </li>
                  <li>
                    <Link to="">L</Link>
                  </li>
                  <li>
                    <Link to="">XL</Link>
                  </li>
                  <li>
                    <Link to="">2XL</Link>
                  </li>
                  <li>
                    <Link to="">3XL</Link>
                  </li>
                  <li>
                    <Link to="">4XL</Link>
                  </li>
                  <li>
                    <Link to="">5XL</Link>
                  </li>
                  <li>
                    <Link to="">6XL</Link>
                  </li>
                  <li>
                    <Link to="">38</Link>
                  </li>
                  <li>
                    <Link to="">40</Link>
                  </li>
                  <li>
                    <Link to="">42</Link>
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
                <Link to="">sort by popular</Link>
              </div>
            </div>

            <section class="container-fluid cards-section">
              <div class="row d-flex gap-4 align-item-center justify-content-center">
                {ListingApi.map(function ncard(val) {
                  return (
                    <Card
                      key={val.id}
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
