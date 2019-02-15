import {
  Component
} from '@angular/core';

import {
  SkyInlineFormCloseArgs,
  SkyInlineFormConfig
} from '../types';

@Component({
  selector: 'sky-inline-form-fixture',
  templateUrl: './inline-form.fixture.html'
})
export class SkyInlineFormFixtureComponent {

  public config: SkyInlineFormConfig;

  public showFormWithAutocomplete = false;

  public showFormWithOutAutocomplete = false;

  public showFormWithHiddenElements = false;

  public showFormWithNoElements = false;

  public onClose(event: SkyInlineFormCloseArgs) {

  }
}
