"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const nativescript_module_1 = require("nativescript-angular/nativescript.module");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const home_component_1 = require("./home/home.component");
const sa_component_1 = require("./sa/sa.component");
const sps_component_1 = require("./sps/sps.component");
const about_component_1 = require("./about/about.component");
const contact_component_1 = require("./contact/contact.component");
const shared_1 = require("./shared");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_module_1.AppRoutingModule,
            shared_1.SharedModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            sa_component_1.SaComponent,
            sps_component_1.SpsComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBeUM7QUFFekMsa0ZBQThFO0FBRTlFLDZEQUF3RDtBQUN4RCxtREFBK0M7QUFDL0MsMERBQXNEO0FBQ3RELG9EQUFnRDtBQUNoRCx1REFBbUQ7QUFDbkQsNkRBQXlEO0FBQ3pELG1FQUErRDtBQUMvRCxxQ0FBd0M7QUFrQnhDLElBQWEsU0FBUyxHQUF0QjtDQUVDLENBQUE7QUFGWSxTQUFTO0lBaEJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIscUNBQWdCO1lBQ2hCLHFCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLDhCQUFhO1lBQ2IsMEJBQVc7WUFDWCw0QkFBWTtZQUNaLGdDQUFjO1lBQ2Qsb0NBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUVyQjtBQUZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FDb21wb25lbnQgfSBmcm9tICcuL3NhL3NhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNwc0NvbXBvbmVudCB9IGZyb20gJy4vc3BzL3Nwcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgIFNoYXJlZE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgU2FDb21wb25lbnQsXHJcbiAgICBTcHNDb21wb25lbnQsXHJcbiAgICBBYm91dENvbXBvbmVudCxcclxuICAgIENvbnRhY3RDb21wb25lbnRcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcbiJdfQ==