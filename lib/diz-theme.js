export default class Theme {
  static nodeModulePath = null;
  static path= null;

  static init(props) {
    if (typeof window !== 'undefined') {
      window.__DIZ__.render = this.render(props);
    }
  }
  static isBrowser() {
    return typeof window !== 'undefined';
  }
}
