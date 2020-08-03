import React from "react";

import "./styles.css"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/28742636?s=460&u=b1aaae9a5ffcf747dde442bfb55fd1fd6a7ca86d&v=4"
          alt="Daniel Cunha"
        />
        <div>
          <strong>Daniel Cunha</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Sunt maxime cumque dolores expedita soluta minus delectus, aliquid non
        dolorem, ducimus nihil cupiditate deleniti? Cupiditate maiores hic
        voluptas!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
