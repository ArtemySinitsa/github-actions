module.exports = class Welcome {
  constructor({ name = 'World' }) {
    this.name = name;
  }

  get message() {
    return `Hello ${this.name}`;
  }
};
