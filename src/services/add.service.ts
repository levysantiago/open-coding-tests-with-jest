import { HistoryRepository } from "@repositories/history.repository";

export class AddService {
  private historyRepository: HistoryRepository
  
  constructor(_historyRepository: HistoryRepository){
    this.historyRepository = _historyRepository;
  }

  async execute(a: number, b: number): Promise<number>{
    await this.historyRepository.create({a,b, operation: "add"})
    
    return a + b;
  }
}