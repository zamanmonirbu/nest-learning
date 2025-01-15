import { Injectable} from '@nestjs/common';
import { User } from './interface/User';

@Injectable()
export class UserService {
    public users:User[];
    getUsers():User[]{
        return this.users;
    }

    getUser(email:string):User{
        return this.users.filter(u=>u.email===email);
    }

    addUser(user:User):User{
        this.users.push(user)
        return user;
    }

    deleteUser(email:string):User[]{
        const restUser=this.users.filter(u=>u.email!==email);
        this.users=restUser;
        return this.users;
    }
}
