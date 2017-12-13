var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ComponentFactoryResolver, Directive, ViewContainerRef } from "@angular/core";
export var DialogAnchorDirective = (function () {
    function DialogAnchorDirective(viewContainer, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DialogAnchorDirective.prototype.createDialog = function (dialogComponent) {
        this.viewContainer.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        var dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
        return dialogComponentRef;
    };
    DialogAnchorDirective = __decorate([
        Directive({
            selector: '[dialogAnchor]'
        }), 
        __metadata('design:paramtypes', [ViewContainerRef, ComponentFactoryResolver])
    ], DialogAnchorDirective);
    return DialogAnchorDirective;
}());
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/reminder/dialoganchor.directive.js.map