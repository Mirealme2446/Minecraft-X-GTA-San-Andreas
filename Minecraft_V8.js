
const MinecraftV8 = {
  nome: "Minecraft X GTA San Andreas V8",
  versaoGTA: "2.11.245",

  blocos: [],
  proximoId: 1,

  colocarBloco(x, y, z, explosivo = false) {
    const bloco = {
      id: this.proximoId++,
      tipo: "grass_block",
      x, y, z,
      explosivo
    };

    this.blocos.push(bloco);
    return bloco;
  },

  quebrarBloco(id) {
    const indice = this.blocos.findIndex(
      bloco => bloco.id === id
    );

    if (indice === -1) return false;

    this.blocos.splice(indice, 1);
    return true;
  },

  verificarColisao(veiculo, bloco) {
    if (!bloco.explosivo) return false;

    const dx = veiculo.x - bloco.x;
    const dy = veiculo.y - bloco.y;
    const dz = veiculo.z - bloco.z;

    const distancia = Math.sqrt(
      dx * dx + dy * dy + dz * dz
    );

    return distancia < 2;
  },

  criarPonte(x, y, z, comprimento) {
    const ponte = [];

    for (let i = 0; i < comprimento; i++) {
      ponte.push(
        this.colocarBloco(x + i, y, z)
      );
    }

    return ponte;
  }
};

// Exemplo: criar ponte flutuante
MinecraftV8.criarPonte(10, 20, 50, 12);

// Exemplo: colocar bloco explosivo
MinecraftV8.colocarBloco(15, 20, 50, true);
