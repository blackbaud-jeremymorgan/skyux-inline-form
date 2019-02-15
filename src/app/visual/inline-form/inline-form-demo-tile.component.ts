import {
  Component
} from '@angular/core';

import {
  skySlideDissolve
} from '../../public/modules/inline-form/animations';

@Component({
  // tslint:disable-next-line
  selector: 'div.tile1',
  templateUrl: './inline-form-demo-tile.component.html',
  animations: [ skySlideDissolve ]
})
export class SkyTileDemoTileComponent {
  public activeItemId: string;
  public tileData = [
    { id: '1', title: 'Octopus\'s Garden', note: 'Written by Ringo Starr' },
    { id: '2', title: 'With a Little Help from My Friends', note: 'Written by Paul McCartney and John Lennon' },
    { id: '3', title: 'While my Guitar Gently Weeps', note: 'Written by George Harrison' }
  ];

  public onInlineFormClose(event: any) {
    this.activeItemId = undefined;
  }
}