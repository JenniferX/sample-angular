import { Component, OnInit, Inject, HostListener} from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  icon = 'done';
  @HostListener('window:keyup.esc') onkeyup() {
    this.snackBar.dismiss();
  }
  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: any, private snackBar: MatSnackBar) { 
    switch (data.option) {
       case 'snack-success':
       this.icon = 'done';
       break;
       case 'snack-error':
       this.icon = 'error';
       break;
    }
  }

  ngOnInit() {
  }

}
