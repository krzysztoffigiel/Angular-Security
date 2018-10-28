import { Sanitizer, ApplicationModule, NgModule } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { DomSanitizerImpl } from "@angular/platform-browser/src/security/dom_sanitization_service";
import { CommonModule } from "@angular/common";

export const SANITIZATION_PROVIDERS: Array<any> = [
  {
    provide: Sanitizer, 
    useExisting: DomSanitizer
  },
  {
    provide: DomSanitizer,
    useClass: DomSanitizerImpl
  }
];

@NgModule({
  providers: [
    SANITIZATION_PROVIDERS,
  ],
  exports: [CommonModule, ApplicationModule]
})

export class BrowserModule {
  
}