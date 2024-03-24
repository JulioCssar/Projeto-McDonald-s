import React from "react";

import app1 from "../../assets/app1.svg";
import app from "../../assets/app.svg";
import bigmac from "../../assets/bigmac.svg";
import logo from "../../assets/logo.svg";
import bigmac2 from "../../assets/bigmac2.png";
import batata from "../../assets/batata.svg";
import sorvete from "../../assets/sorvete.svg";
import * as S from "./header_style";

export default function Header() {
  return (
    <S.Header>
      <section>
        <div>
          <img src={logo} alt="" />
        </div>

        <section>
          <div>
            <img src={app} alt="" />
            <h3>Baixe o App</h3>
          </div>

          <div>
            <h3>Peça seu méqui</h3>
            <img src={app1} alt="" />
          </div>
        </section>
      </section>
      <S.wrapper>
        <S.Container>
          <div>
            <img src={bigmac} alt="" />
          </div>

          <S.block>
            <div>
            <h2>BATEU AQUELA </h2>

            <h2>
              <span>#FOME</span> DE <span>MÉQUI</span>?
            </h2>

            </div>
          </S.block>
        </S.Container>

        <section>
          <div>
            <img src={bigmac2} alt="" />
          </div>
          <div>
            <img src={batata} alt="" />
          </div>
          <div>
            <img src={sorvete} alt="" />
          </div>
        </section>
      </S.wrapper>
    </S.Header>
  );
}
