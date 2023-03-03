import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthFacade } from './shared/services/facades/auth-facade.service';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public spinner$: Observable<number> = this.loadService.spinner$;

  constructor(private readonly authFacade: AuthFacade, private readonly loadService: LoaderService) {}

  public ngOnInit(): void {
    this.authFacade.initToken();
  }
}
