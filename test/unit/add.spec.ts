import { HistoryRepository } from "@repositories/history.repository";
import { AddService } from "@services/add.service"
import {MockProxy, mock} from "jest-mock-extended"

describe("Add Service", ()=>{
  let historyRepository: MockProxy<HistoryRepository>;
  let addService: AddService;

  beforeAll(()=>{
    historyRepository = mock();
    historyRepository.create.mockResolvedValue(Promise.resolve())
  })

  beforeEach(async ()=>{
    addService = new AddService(historyRepository);
  })

  it("should sum two numbers", async ()=>{
    const result = await addService.execute(10, 20)
    expect(result).toEqual(30)
  })
})