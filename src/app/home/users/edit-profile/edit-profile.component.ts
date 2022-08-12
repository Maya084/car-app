import { Component, OnInit } from '@angular/core';
import { includes } from 'lodash';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  uploadFile(target: any): void {
    try {
      const file = target.files[0] as File;
      const isValidType = includes(file.name, '.png') || includes(file.name, '.jpg');

      if (!isValidType) {
        throw new Error();
      }

      this.userService.uploadImage(file);

    } catch (e) {
    }

    // Upload with the same name
    target!.value = null;
  }

}
