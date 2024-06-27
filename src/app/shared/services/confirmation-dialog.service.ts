import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../features/delete/delete.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  dialog = inject(MatDialog);

  openDeleteDialog(): Observable<Boolean> {
    return this.dialog.open(DeleteComponent).afterClosed();
  }
}
