import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/User';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService)

    @Post()
    addUser(@Body() user:User):User{
        return this.userService.addUser(user);
    }

    @Get()
    getUsers():User[]{
        return this.userService.getUsers();
    }

    @Get()
    getUser():User{
        return this.userService.getUser("kluh");
    }

    @Delete(":email")
    deleteUser(@Param("email") email:string):User[]{
        return this.userService.deleteUser("kluh");
    }

    
}
