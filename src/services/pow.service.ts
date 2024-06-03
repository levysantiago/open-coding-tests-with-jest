import { HistoryRepository } from "@repositories/history.repository";
import { MultiplyService } from "./multiply.service";

export class PowService{
  private multiplyService: MultiplyService;
  private historyRepository: HistoryRepository;
  
  constructor(_multiplyService: MultiplyService, _historyRepository: HistoryRepository){
    this.multiplyService = _multiplyService;
    this.historyRepository = _historyRepository;
  }
  
  async execute(a:number, exp: number){
    await this.historyRepository.create({a, b: exp, operation: "pow"})

    let result = a
    for(let i=1;i<exp;i++){
      result = this.multiplyService.execute(a, result)
    }
    return result;
  }
}