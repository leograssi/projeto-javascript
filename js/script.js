const listaAnimais = [
  {
    id: 1,
    titulo: "CÃO BRAVO",
    descricao: "Apelido: Tarek fortinho",
    imgURL: "./img/dog1.jpg",
  },
  {
    id: 2,
    titulo: "CÃO DE MADAME",
    descricao: "Apelido: Isa fortinha",
    imgURL: "./img/dog2.avif",
  },
  {
    id: 3,
    titulo: "CÃO BRINCALHÃO",
    descricao: "Apelido: Kauã fortinho",
    imgURL: "./img/dog3.webp",
  },
  {
    id: 4,
    titulo: "CÃO CALMO",
    descricao: "Apelido: Leo",
    imgURL: "./img/dog4.avif",
  },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
  listaAnimais.forEach((post) => {
    let card = `   
              <div class="card">
                  <img class="card-img" src=${post.imgURL} /> 
                  <h2 class="card-titulo"> ${post.titulo} </h2>
                  <p class="card-descricao"> ${post.descricao} </p>
                  <a class="card-botao" idAnimal="${post.id}"> Enviar </a>
              </div>
          `;
    container.innerHTML += card;
  });
};

window.onload = () => {
  criacaoPosts();

  let botaoTema = document.querySelector("#botaoTema");
  console.log(botaoTema);
  
  botaoTema.addEventListener("click", () => {
    let body = document.querySelector("body");
  
    if (botaoTema.checked) {
      body.classList.add("body-dark");
    } else {
      body.classList.remove("body-dark");
    }
  
  });
  





  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    console.log(card);
    card.addEventListener("mousemove", () => {
      card.style.backgroundColor = "yellow";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "transparent";
    });

    card.lastElementChild.addEventListener("click", (event) => {
      console.log("entrou");
      event.preventDefault();
      sessionStorage.setItem(
        "idAnimal",
        card.lastElementChild.getAttribute("idAnimal")
      );
      window.location.href = "./adotar.html";
    });
  });
};
