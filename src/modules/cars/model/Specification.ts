import { v4 as uuidv4 } from 'uuid';

class Specification {
  constructor(public name: string, public description: string, public created_at: Date, public id?: string) {
    if (!id) {
      this.id = uuidv4();
    }
  }
}

export { Specification };
