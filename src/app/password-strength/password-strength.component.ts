import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})

export class PasswordStrengthComponent {
  @Input() password: string | undefined;

  private noPassword = ["grey", "grey", "grey"]
  private invalidPassword = ["red", "red", "red"]
  private easyPassword = ["red", "red", "red"]
  private mediumPassword = ["yellow", "yellow", "grey"]
  private strongPassword = ["green", "green", "green"]

  private regexEasyPassword = /^[a-zA-Z]+$|^[\d]+$|^[\W_]+$/i
  private regexStrongPassword = /(?=.*[a-zA-Z])(?=.*[\W._])(?=.*[\d])/i

  onChangePasswordStrength() {
    if (!this.password) {
      return this.noPassword
    } else if (this.password?.length < 8) {
      return this.invalidPassword
    } else if (this.regexEasyPassword.test(this.password)) {
      return this.easyPassword
    } else if (this.regexStrongPassword.test(this.password)) {
      return this.strongPassword
    }

    return this.mediumPassword
  }
}
