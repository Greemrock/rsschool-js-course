export class ObjectStore {
  nameObjectStore: string;

  constructor(nameObjectStore: string) {
    this.nameObjectStore = nameObjectStore;
  }

  createStores(db: IDBDatabase, key?: string) {
    db.createObjectStore(this.nameObjectStore, { keyPath: key, autoIncrement: true });
  }
}
