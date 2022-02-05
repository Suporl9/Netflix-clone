import React from "react";
import "./TabContent.css";
import { Link } from "react-router-dom";
import {check} from 'react-icons-kit/fa/check'
import {close} from 'react-icons-kit/fa/close'

import { Icon } from 'react-icons-kit'
function TabContentthree() {
  return (
    <div className="tab2-bgcont">
      <div className="tab3-container">
        <div className="tab2-container1">
          <p style={{ marginLeft: "-38rem", marginTop: "1rem" }}>
            Choose one plan and Watch everytthing on Netflix
          </p>
          <Link to="/" className="trybtn1" style={{ marginRight: "-35rem" }}>
            TRY IT NOW
          </Link>
        </div>
        <div className="tab3-container2">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Price</td>
                <td>$9.99</td>
                <td>$13</td>
                <td>$16</td>
              </tr>
              <tr>
                <td>HD Available</td>
                <td><Icon icon={close}></Icon></td>
                <td><Icon icon={check}></Icon></td>
                <td><Icon icon={check}></Icon></td>
              </tr>
              <tr>
                <td>Ultra Hd Available</td>
                <td><Icon icon={close}></Icon></td>
                <td><Icon icon={close}></Icon></td>
                <td><Icon icon={check}></Icon></td>
              </tr>
              <tr>
                <td>Screens you can watch on at the same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Watch on your laptop,TV,phone and Tablet</td>
                <td><Icon icon={check}></Icon></td>
                <td><Icon icon={check}></Icon></td>
                <td><Icon icon={check}></Icon></td>
              </tr>
              <tr>
                <td>Unlimited movies and Tv shows</td>
                <td><Icon icon={check}></Icon></td>
                <td><Icon icon={check}></Icon></td>
                <td><Icon icon={check}></Icon></td>
              </tr>
              <tr>
                <td>Cancel anytime</td>
                <td><Icon icon={check}></Icon></td>
                <td><Icon icon={check}></Icon></td>
                <td><Icon icon={check}></Icon></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TabContentthree;
