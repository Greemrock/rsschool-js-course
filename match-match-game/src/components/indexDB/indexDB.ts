import { IRecord } from '../interfaces/IRecord';
import { ObjectStore } from './objectStore';

export class IndexDB {
  private db: IDBDatabase | undefined;

  keyUser = 0;

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

  lastUser(storeName: string) {
    if (!this.db) throw Error(`error - db = ${this.db}`);
    const tx = this.db.transaction([storeName]);
    const store = tx.objectStore(storeName);
    store.openCursor().onsuccess = (event) => {
      const cursor = event.target as IDBRequest;
      const cursoreResult: IDBCursorWithValue = cursor.result;
      if (cursoreResult) {
        this.keyUser = cursoreResult.key as number;
        console.log('cursor', cursoreResult);
        console.log('cursoreResult.key:', this.keyUser);
        cursoreResult.continue();
      } else {
        console.log('lastUser >>>> ', this.keyUser);
      }
    };
  }

  putRecord(storeName: string) {
    if (!this.db) throw Error(`error - db = ${this.db}`);
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const val = {
      firstName: 'Андрей',
      lastName: 'Посохов',
      email: 'Greemrock911@gmail.com',
      score: 3000,
      created: 1622584500006,
      id: 15,
    };
    const request: IDBRequest = store.put(val, [15]);
    request.onsuccess = () => {
      console.log(request);
    };
    request.onerror = () => {
      console.log('IndexedDB service: error getRecord');
    };
  }
}
