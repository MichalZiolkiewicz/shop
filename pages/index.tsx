import type { NextPage } from "next";
import Image from "next/image";
//@ts-ignore
import styled from "styled-components";
import Navbar from "../src/components/Navbar";
import React, { useState } from "react";
import { RowSB, Row } from "../styles/styled";

import logo from "../public/images/logo.svg";
import cart from "../public/images/icon-cart.svg";
import avatar from "../public/images/image-avatar.png";

const Wrapper = styled("div")`
  max-width: 1440px;
  background-color: #fffgit;
  margin: 0 auto;
  height: 100vh;
`;

const Dot = styled("p")`
  background-color: hsl(26, 100%, 55%);
  display: inline-block;
  border-radius: 20px;
  font-size: 12px;
  width: 20px;
  text-align: center;
  position: absolute;
  top: -11px;
  right: 0;
`;

const Products = styled("div")`
  margin-top: 50px;
  background-color: purple;
`;

const Home: NextPage = () => {
  const [amount, setAmount] = useState(0);

  return (
    <Wrapper>
      <RowSB>
        <Row>
          <Image src={logo} />
          <Navbar />
        </Row>
        <Row>
          <div style={{ marginRight: "20px", position: "relative" }}>
            <Image src={cart} height="32px" width="32px" />
            {amount > 0 && <Dot>{amount}</Dot>}
          </div>
          <div style={{ marginRight: "20px" }}>
            <Image src={avatar} height="48px" width="48px" />
          </div>
        </Row>
      </RowSB>
      <Products>
        <p>Product page</p>
        <button onClick={() => setAmount((prevState) => prevState + 1)}>
          klik +1
        </button>
        <button onClick={() => setAmount((prevState) => prevState - 1)}>
          klik -1
        </button>
      </Products>
    </Wrapper>
  );
};

export default Home;
