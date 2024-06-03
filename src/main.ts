import { AddService } from "@services/add"
import { makeAddService } from "@services/factories/makeAddService";

(async ()=>{
  const addService = makeAddService();

  const result = await addService.execute(2, 3)
  console.log(result);
  
})()