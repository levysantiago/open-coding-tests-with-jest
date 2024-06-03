import { HistoryRepository } from "@repositories/history.repository";
import { MultiplyService } from "@services/multiply.service";
import { PowService } from "@services/pow.service";

export function makePowService(){
  const multiplyService = new MultiplyService()
  const historyRepository = new HistoryRepository()
  const powService = new PowService(multiplyService, historyRepository)
  return powService
}