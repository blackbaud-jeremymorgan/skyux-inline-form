import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  SkyInlineFormConfig,
  SkyInlineFormType
} from '../../public/modules/inline-form/types';

import {
  SkyTileDemoTileComponent
} from './inline-form-demo-tile.component';

@Component({
  selector: 'sky-inline-form-demo',
  templateUrl: './inline-form-demo.component.html',
  styleUrls: ['./inline-form-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyInlineFormDemoComponent {
  public showInlineForm1 = false;
  public showInlineForm2 = false;
  public editConfig: SkyInlineFormConfig = {
    type: SkyInlineFormType.SaveDeleteCancel
  };
  public customConfig: SkyInlineFormConfig = {
    type: SkyInlineFormType.Custom,
    buttons: [
      { action: 'save', text: 'Do it!', styleType: 'primary' },
      { action: 'done', text: 'Don\'t let your dreams be dreams.', styleType: 'default' },
      { action: 'cancel', text: 'Yesterday, you said tomorrow.', styleType: 'link' },
      { action: 'save', text: 'Just do it! ', styleType: 'primary' }
    ]
  };

  public dashboardConfig = {
    tiles: [
      {
        id: 'tile1',
        componentType: SkyTileDemoTileComponent
      }
    ],
    layout: {
      singleColumn: {
        tiles: [
          {
            id: 'tile1',
            isCollapsed: false
          }
        ]
      },
      multiColumn: [
        {
          tiles: [
            {
              id: 'tile1',
              isCollapsed: false
            }
          ]
        }
      ]
    }
  };

  public closed(event: any) {
    console.log(event);
  }

}
