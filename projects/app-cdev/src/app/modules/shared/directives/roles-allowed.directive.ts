import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

import { StorageApplication } from '../../core/storage/application/storage.application';

@Directive({
  selector: '[rolesAllowed]',
})
export class RolesAllowedDirective {
  @Input() rolesAllowed: string[] = [];

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly storage: StorageApplication
  ) {}

  ngOnInit() {
    const accessToken = this.storage.get('accessToken') ?? '';
    const payload: { [k: string]: number | string | Array<any> } =
      jwtDecode(accessToken);
    const rolesUser = (payload['roles'] as any[]).map(
      (role: any) => role['name']
    );
    this.execute(rolesUser);
  }

  execute(rolesUser: string[]) {
    const isUserAuthorized = rolesUser.some((role) =>
      this.rolesAllowed.includes(role)
    );

    if (isUserAuthorized) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
