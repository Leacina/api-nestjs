import { NestInterceptor, Injectable, ExecutionContext, CallHandler, HttpException, HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";
import { Contract } from "src/backoffice/contracts/contract";
import { Result } from "src/backoffice/models/result.model";

@Injectable()
export class ValidatorInterceptor implements NestInterceptor{
  
  constructor(public contract: Contract) {

  }

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const body = context.switchToHttp().getRequest().body;
    
    //Chama a abstração do nosso contrato
    const valid = this.contract.validate(body);
  
    if(!valid) {
      throw new HttpException(
        new Result(
          false, 
          'Ops, algo saiu errado', 
          null, 
          this.contract.errors), 
          HttpStatus.BAD_REQUEST
        );
    }

    //Retorna um Observable
    return next.handle();
  }

}