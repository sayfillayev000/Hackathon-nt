import React from "react";
import { useParams } from "react-router-dom";
import { book, qurqma } from "../../../assets/images";
import "./singleBook.scss";
import { BookCard } from "..";

const index = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <section className=" single__aftir__card">
        <img src={qurqma} alt="" className="aftir__img" />
        <div className="single__aftir__info">
          <h1 className="single__aftir__title">Qo’rqma</h1>
          <div className="book__info">
            <h4>Sahifalar soni:</h4>
            <h5> 376 ta</h5>
          </div>
          <div className="book__info">
            <h4>Chop etilgan:</h4>
            <h5> 2021-yil</h5>
          </div>
          <div className="book__info">
            <h4>Kitob narxi:</h4>
            <h5> 45 000 so’m</h5>
          </div>
          <div className="tuliq__malumot__line"><h4>To’liq ma’lumot</h4> <span></span></div>
          <p className="single__aftir__subTitle">
            Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва
            собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат
            йигит-қизларининг хотирасига бағишланади. Роман воқеаларини қисқача
            сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар тиғизки, шошириб
            қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис
            қиласиз. Миллият, соф муҳаббат, кўринмас ва ошкор фожиалар, тарих,
            бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик
            даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва
            келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ
            кулдиради. Ўтган аср бошида Германияда ўқиган талабалар, улар
            маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига
            тортилади.
          </p>
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
