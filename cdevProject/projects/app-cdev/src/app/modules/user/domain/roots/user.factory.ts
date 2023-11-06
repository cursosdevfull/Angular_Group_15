import { EmailVO } from '../value-objects/email.vo';
import { FileVO } from '../value-objects/file.vo';
import { FullnameVO } from '../value-objects/fullname.vo';
import { PasswordVO } from '../value-objects/password.vo';
import { RolesVO } from '../value-objects/roles.vo';
import { User, UserProperties } from './user';

export class UserFactory {
  static create(properties: UserProperties) {
    PasswordVO.create(properties.password);
    FullnameVO.create(properties.fullname);
    EmailVO.create(properties.email);
    RolesVO.create(properties.roles);
    FileVO.create(properties.image, ['jpg', 'png', 'gif']);

    return new User(properties);
  }
}
