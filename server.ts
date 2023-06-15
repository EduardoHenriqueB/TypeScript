class MinhaContaBancaria {
  private sld: number;

  constructor(sldInicial: number) {
    this.sld = sldInicial;
  }

  public deposito(valor: number): void {
    this.sld += valor;
  }

  public saque(valor: number): void {
    if (valor > this.sld) {
      throw new Error('sld insuficiente');
    }
    this.sld -= valor;
  }

  public getsld(): number {
    return this.sld;
  }
}

(function() {
  const conta = new MinhaContaBancaria(1000);
  console.log(conta.getsld());

  conta.deposito(500);
  console.log(conta.getsld());

  conta.saque(200);
  console.log(conta.getsld());

  try {
    conta.saque(2000);
  } catch (error) {
    console.log(error.message);
  }
})();
