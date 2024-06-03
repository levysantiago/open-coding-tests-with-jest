import { Database } from "../database";

interface ICreateHistory{
  a: number;
  b: number;
  operation: string;
}

export class HistoryRepository{
  private db: Database;
  
  constructor(){
    this.db = new Database();
  }

  async create(params: ICreateHistory){
    this.db.insert("history", params);
  }
}