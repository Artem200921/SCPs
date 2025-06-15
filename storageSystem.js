export class SCPObject {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
export class StorageSystem {
  constructor() {
    this.storage = [];
  }
  add(object) {
    this.storage.push(object);
  }
  remove(id) {
    const index = this.storage.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      this.storage.splice(index, 1);
      return true;
    }
    return false;
  }
  get(id) {
    return this.storage.find((obj) => obj.id === id);
  }
  list() {
    return [...this.storage];
  }
}
