class RandomizedSet {
  constructor() {
    this._value2Index = {};
    this._values = [];
    this._empty = [];
  }

  insert(val) {
    if (this._value2Index[val] !== undefined)  {
      return false;
    } else {
      if (this._empty.length > 0) {
        const index = this._empty.pop();
        this._values[index] = val;
        this._value2Index[val] = index;
      } else {
        this._values.push(val);
        this._value2Index[val] = this._values.length - 1;
      }
      return true;
    }
  }

  remove(val) {
    if (this._value2Index[val] === undefined) {
      return false;
    } else {
      const index = this._value2Index[val];
      this._values[index] = undefined;
      this._empty.push(index);
      this._value2Index[val] = undefined;
      return true;
    }
  }

  getRandom() {
    const randomI = Math.trunc(Math.random() * this._values.length);
    const value = this._values[randomI];
    return value === undefined? this.getRandom(): value;
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */