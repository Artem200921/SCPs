interface StorageData {
  [key: string]: any;
}

declare function load(key: string): StorageData | undefined;

declare function save(key: string, value: StorageData): void;

export { load, save };