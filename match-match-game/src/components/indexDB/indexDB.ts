import { IRecord } from '../interfaces/IRecord';
import { ObjectStore } from './objectStore';

export class IndexDB {
  private db: IDBDatabase | undefined;

  keyUser = 0;

  createDB(dbName: string, version: number) {
    const request: IDBOpenDBRequest = indexedDB.open(dbName, version);

    request.onsuccess = (event) => {
      this.db = (<IDBOpenDBRequest>event.target).result;
    };

    request.onupgradeneeded = (event) => {
      const thisDB = (<IDBOpenDBRequest>event.target).result;
      const objectStores: ObjectStore = new ObjectStore('users');
      objectStores.createStores(thisDB, 'id');
    };
  }

  addRecord(storeName: string, record: IRecord) {
    if (!this.db) throw Error(`error - db = ${this.db}`);
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.add(record);
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
        cursoreResult.continue();
      }
    };
  }
}
