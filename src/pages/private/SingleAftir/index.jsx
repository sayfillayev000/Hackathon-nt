import React from "react";
import { useParams } from "react-router-dom";
import { Abdulla, book } from "../../../assets/images";
import "./singleAftir.scss";
import { BookCard } from "..";

const index = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <section className=" single__aftir__card">
        <img src={Abdulla} alt="" className="aftir__img" />
        <div className="single__aftir__info">
          <h1 className="single__aftir__title">O’tkir Hoshimov</h1>
          <p className="single__aftir__subTitle">
            Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
            Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov
            mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti
            (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika
            kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959
            yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”,
            “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih,
            tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy
            xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri
            (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida
            bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda
            “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005
            yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va
            axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“
            jurnalida bosh muharrir boʻlib ishladi.
          </p>
          <div className="aftir__tugilgan__info">
            <div className="aftir__create">
              <p>Tavallud sanasi</p>
              <h4>1941</h4>
              <p>Toshkent, Uzbekistan</p>
            </div>
            <span>-</span>
            <div className="aftir__delete">
              <p>Vafot etgan sana</p>
              <h4>1941</h4>
              <p>Toshkent, Uzbekistan</p>
            </div>
          </div>
        </div>
      </section>
      <div className="asarlar">
        <h2>Asarlari</h2>
        <h6>Barchasini ko’rish</h6>
      </div>
      <div className="single__aftir__books">
        <BookCard
          className="single__aftir__book"
          img={book}
          title="Dunyoning ishlariO'tkir Hoshimov"
          subTitle="O'tkir Hoshimov"
          id={`/book/1`}
        />
        <BookCard
          className="single__aftir__book"
          img={book}
          title="Dunyoning ishlariO'tkir Hoshimov"
          subTitle="O'tkir Hoshimov"
          id={`/book/1`}
        />
        <BookCard
          className="single__aftir__book"
          img={book}
          title="Dunyoning ishlariO'tkir Hoshimov"
          subTitle="O'tkir Hoshimov"
          id={`/book/1`}
        />
        <BookCard
          className="single__aftir__book"
          img={book}
          title="Dunyoning ishlariO'tkir Hoshimov"
          subTitle="O'tkir Hoshimov"
          id={`/book/1`}
        />
        <BookCard
          className="single__aftir__book"
          img={book}
          title="Dunyoning ishlariO'tkir Hoshimov"
          subTitle="O'tkir Hoshimov"
          id={`/book/1`}
        />
        <BookCard
          className="single__aftir__book"
          img={book}
          title="Dunyoning ishlariO'tkir Hoshimov"
          subTitle="O'tkir Hoshimov"
          id={`/book/1`}
        />
      </div>
    </div>
  );
};

export default index;
