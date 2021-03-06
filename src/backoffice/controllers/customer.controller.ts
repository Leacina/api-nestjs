import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from "@nestjs/common";
import { Result } from "../models/result.model";
import { ValidatorInterceptor } from "src/interceptors/validator.interceptor";
import { CreateCustomerContract } from "../contracts/customer.contracts";
import { CreateCustomerDto } from "../dtos/create-customer-dto";

@Controller('v1/customers')
export class CustomerController {

  @Get()
  get(){
    return new Result(true, 'Cliente alterado com sucesso', [], null);
  }

  @Get(':document')
  getById(@Param('document') document){
    return new Result(true, 'Cliente alterado com sucesso', {document}, null);
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  post(@Body() body: CreateCustomerDto){
    return new Result(true, 'Cliente alterado com sucesso', body, null);
  }

  @Put(':document')
  put(@Param('document') document, @Body() body){
    return new Result(true, 'Cliente alterado com sucesso', body, null);
  }

  @Delete(':document')
  delete(@Param('document') document, @Body() body){
    return new Result(true, 'Cliente alterado com sucesso', body, null);
  }

}