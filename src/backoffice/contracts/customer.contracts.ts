import { Flunt } from "src/utils/flunt";
import { Contract } from "./contract";
import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "../dtos/create-customer-dto";

@Injectable()
export class CreateCustomerContract implements Contract {

  errors: any[];  

  validate(model: CreateCustomerDto): boolean {
    const flunt = new Flunt();

    flunt.hasMinLen(model.name, 5, 'Nome deve contar mais que 5 digitos!');
    flunt.isEmail(model.email, 'E-mail inválido!');
    flunt.isFixedLen(model.document, 11,'CPF inválido!');
    flunt.hasMinLen(model.password, 6, 'Senha inválida!');

    this.errors = flunt.errors;

    return flunt.isValid();
  }

}