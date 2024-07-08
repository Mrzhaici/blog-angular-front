import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IconsProviderModule } from './icons.provider.module';
import { HeaderComponent } from './routes/header/header.component';
import { FooterComponent } from './routes/footer/footer.component';
import { NzSharedModule } from './nz.shared.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { en_US, zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IconsProviderModule,
    HeaderComponent,
    FooterComponent,
    NzSharedModule,
    TranslateModule,
    NzLayoutModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {

  // TODO: 暂时只支持中文
  private LANGS: { [key: string]: any } = {
    zh_CN: {
      i18n: zh_CN,
      regLocal: zh
    },
    en_UA: {
      i18n: en_US,
      regLocal: en

    },
  };

  constructor(public translate: TranslateService) {
    translate.addLangs(['zh_CN']);
    translate.setDefaultLang('zh_CN');
    translate.use('zh_CN');
  }

}

