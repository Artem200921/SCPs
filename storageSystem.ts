export class SCPObject {
    id: string;
    name: string;
    description: string;

    constructor(id: string, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

export class StorageSystem {
    private storage: SCPObject[] = [];

    add(object: SCPObject): void {
        this.storage.push(object);
    }

    remove(id: string): boolean {
        const index = this.storage.findIndex(obj => obj.id === id);
        if (index !== -1) {
            this.storage.splice(index, 1);
            return true;
        }
        return false;
    }

    get(id: string): SCPObject | undefined {
        return this.storage.find(obj => obj.id === id);
    }

    list(): SCPObject[] {
        return [...this.storage];
    }
}
