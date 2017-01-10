export default class Theme {
  static path = null;
  static Theme = null;
  static render = null;
  static init(props) {
    if (typeof window !== 'undefined') {
      window.__DIZ__.render = this.render(props);
    }
  }
  static isBrowser() {
    return typeof window !== 'undefined';
  }
}
