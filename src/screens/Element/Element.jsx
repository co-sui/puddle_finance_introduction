import React from "react";
import { Component } from "../../components/Component";
import { PropertyBtWrapper } from "../../components/PropertyBtWrapper";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="overlap-group-wrapper">
        <div className="frame-9">
          <div className="frame-10">
            <Component
              className="component-instance"
              frameEllipse="/img/ellipse-4.svg"
              frameSubtract="/img/subtract-2.svg"
              property1="component-21"
            />
            <div className="content">
              <div className="frame-11">
                <p className="a-water-droplet-come">
                  A water droplet, come together
                </p>
                <p className="puddle-finance-is-a">
                  Puddle Finance is a decentralized fund platform on SUI network, it lets traders, businesses, or senior investors create funds more easily.
                  Users can entrust their assets to their trusted funds for investment,  when a puddle generates profits, investors can share them.
                </p>
                <p className="puddle-finance-is-b">
                  Featuring an in-built market mechanism, the market operates using a kiosk system, allowing you to easily trade your held puddle shares on the market
                </p>
                <p className="puddle-finance-is-c">
                  Clear, Visualized dashboard for investors and puddle traders.
                </p>
                <div >
                  <a href="https://dapp-ts.vercel.app">
                    <PropertyBtWrapper className="component-instance" property1="main-bt" />
                  </a>
                  <a href="https://github.com/puddle-finance/puddle-move/blob/master/README.md">
                    <PropertyBtWrapper className="component-instance" property1="second-bt" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
