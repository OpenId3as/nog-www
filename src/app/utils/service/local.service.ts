import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

import { Storage } from './interface/storage.interface';

@Injectable()
export class Local implements Storage {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  /// Save as JSON.stringify
  save(key: string, value: any): boolean {
    this.storage.set(key, JSON.stringify(value));
    return true;
  }

  /// Set simple key value
  set(key: string, value: any): boolean {
    this.storage.set(key, value);
    return true;
  }

  get(key: string): any {
    return this.storage.get(key);
  }

  remove(key: string): any {
    return this.storage.remove(key);
  }
}
