/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";

@Injectable()
export class OrdersService {
    create(_createOrderDto: CreateOrderDto) {
        return "This action adds a new order";
    }

    //findAll() {
    //    return `This action returns all orders`;
    //}

    findOne(_paginationDto: PaginationDto) {
        console.log(typeof(_paginationDto.date_time))
        return _paginationDto;
    }

    update(id: number, _updateOrderDto: UpdateOrderDto) {
        return `This action updates a #${id} order`;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
