import { IRecord } from '../interfaces/IRecord';
import { ObjectStore } from './objectStore';

export class IndexDB {
  private db: IDBDatabase | undefined;

  createDB(dbName: string, version: number) {
    const request: IDBOpenDBRequest = indexedDB.open(dbName, version);

    request.onsuccess = (event) => {
      this.db = (<IDBOpenDBRequest>event.target).result;
      console.log('db successfull');
    };

    request.onerror = (e) => {
      console.log('onerror!');
      console.dir(e);
    };

    request.onupgradeneeded = (event) => {
      const thisDB = (<IDBOpenDBRequest>event.target).result;
      const objectStores: ObjectStore = new ObjectStore('users');
      objectStores.createStores(thisDB, 'id');
      console.log(`IndexedDB service: creating ${dbName} completed.`);
    };
  }

  addRecord(storeName: string, record: IRecord) {
    if (!this.db) throw Error(`error - db = ${this.db}`);
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request: IDBRequest = store.add(record);
    request.onsuccess = () => {
      console.log('IndexedDB service: add object in store');
    };
    request.onerror = () => {
      console.log('IndexedDB service: error addRecordAsync');
    };
  }

  getAllRecords(storeName: string) {
    if (!this.db) throw Error(`error - db = ${this.db}`);
    const tx = this.db.transaction([storeName], 'readonly');
    const store = tx.objectStore(storeName);
    const request: IDBRequest = store.getAll();
    request.onsuccess = () => {
      console.log('IndexedDB service: add object in store');
    };
    request.onerror = () => {
      console.log('IndexedDB service: error addRecordAsync');
    };
    return request;
  }
}
