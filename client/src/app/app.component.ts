import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthFacadeService } from './shared/services/facades/auth-facade.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private authFacadeService: AuthFacadeService) {
  }

  public ngOnInit(): void {
    this.authFacadeService.initToken();
  }
}
