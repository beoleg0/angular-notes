import {Component, OnInit} from '@angular/core';
import {StorageContextService} from '../../services/storage-context/storage-context.service';
import {LocalStorageEnum} from '../../shared/enums/local-storage.enum';
import {localStorageGet} from '../../shared/utils/local-storage.utils';

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
    this.strategy = localStorageGet(LocalStorageEnum.storageStrategy);
  }

  changeStorageStrategy(e) {
    if (e.checked) {
      this.storageContextService.setStrategy('FIREBASE');
    } else {
      this.storageContextService.setStrategy('LOCALSTORAGE');
    }
  }

}
