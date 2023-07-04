// 
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this._cache = new Map;
  }

  get(key) {
    if (!this._cache.has(key)) return -1;

    const value = this._cache.get(key);
    this._cache.delete(key);
    this._cache.set(key, value);
    
    return value;
  }

  put(key, value) {
    if (this._cache.has(key)) {
      this._cache.delete(key);
      this._cache.set(key, value);
    } else {
      if (this._cache.size >= this.capacity) {
        const firstKey = this._cache.keys().next().value;
        this._cache.delete(firstKey);
      }
      this._cache.set(key, value);
    }
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */