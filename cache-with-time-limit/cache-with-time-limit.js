class TimeLimitedCache {
  constructor() {
    this.map = new Map;
  }

  set(key, value, duration) {
    const res = this.map.has(key);

    if (res) {
      this._updateValue(key, value, duration);      
    } else {
      this._addValue(key, value, duration);
    }

    return res;
  }

  get(key) {
    return this.map.has(key)? this.map.get(key).value: -1;
  }

  count() {
    return this.map.size;
  }

  _addValue(key, value, duration) {
    const id = setTimeout(() => this.map.delete(key), duration);
    this.map.set(key, {value, id});
  }

  _updateValue(key, value, duration) {
    const { id } = this.map.get(key);
    clearTimeout(id);
    this._addValue(key, value, duration);
  }
}