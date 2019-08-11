import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './../../services/app.service';
import { LoaderState } from './loading-spinner.interface';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  show = true;
  subscription: Subscription;
  constructor(
    public loadingSpinner: AppService
  ) {
    this.subscription = this.loadingSpinner.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnInit() {
  }
  ngOnDestory() {
    this.subscription.unsubscribe();
  }

}
