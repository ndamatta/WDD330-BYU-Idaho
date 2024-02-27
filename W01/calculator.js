let calculator = {
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
    divide() {
        return this.a / this.b;
      },
    substract() {
    return this.a - this.b;
    },

    read() {
      this.a = +prompt('Insert number A:', 0);
      this.b = +prompt('Insert number B:', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum());
  alert( calculator.mul());
  alert( calculator.divide());
  alert( calculator.substract());