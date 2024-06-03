import { HistoryRepository } from "@repositories/history.repository"
import { MultiplyService } from "@services/multiply.service"
import { PowService } from "@services/pow.service"
import { MockProxy, mock } from "jest-mock-extended"

describe("Pow Multiply Integration Service", ()=>{
  let multiplyService:  MultiplyService
  let historyRepository: MockProxy<HistoryRepository>
  let powService: PowService

  beforeAll(()=>{
    historyRepository = mock();
    historyRepository.create.mockResolvedValue(Promise.resolve())
    multiplyService = new MultiplyService()
    powService = new PowService(multiplyService, historyRepository)
  })

  describe("execute", ()=>{
    it("should calculate pow of number", async ()=>{
      const result = await powService.execute(2, 5)
      expect(result).toEqual(32)
    })
  })
})