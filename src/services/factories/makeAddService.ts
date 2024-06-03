import { HistoryRepository } from "@repositories/history.repository";
import { AddService } from "@services/add.service";

export function makeAddService(){
  const historyRepository = new HistoryRepository();
  const addService = new AddService(historyRepository)
  return addService
}