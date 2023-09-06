// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "atacou";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
  const heroi2 = new Heroi("Gandalf", 1500, "mago");
  const heroi3 = new Heroi("Godofredo", 55, "monge");
  const heroi4 = new Heroi("Naruto", 1500, "ninja");
  
  heroi1.atacar(); // Saída: O guerreiro atacou usando espada
  heroi2.atacar(); // Saída: O mago atacou usando magia
  heroi3.atacar(); // Saída: O monge atacou usando artes marciais
  heroi4.atacar(); // Saída: O ninja atacou usando shuriken