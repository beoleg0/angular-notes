import {Component, OnInit} from '@angular/core';
import {StorageContextService} from '../../services/storage-context/storage-context.service';
import {LocalstorageStrategy} from '../../shared/strategies/localstorage-strategy';
import {FirebaseStrategy} from '../../shared/strategies/firebase-strategy';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  strategy: string;

  constructor(
    private storageContextService: StorageContextService
  ) {
  }

  ngOnInit() {
    this.strategy = JSON.parse(localStorage.getItem('storage-strategy'));
  }

  changeStorageStrategy(e) {
    if (e.checked) {
      this.storageContextService.setStrategy(new FirebaseStrategy());
    } else {
      this.storageContextService.setStrategy(new LocalstorageStrategy());
    }
  }

}
