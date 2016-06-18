import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {HTTP_PROVIDERS} from "@angular/http";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {CrumpetPage} from "./ui/pages/crumpet-page";
import {AppStore,createAppStoreFactoryWithOptions} from "angular2-redux";
import {NavigationActions} from "./actions/navigation-actions";
import {CrumpetService} from "./services/crumpet-service";
import {provide} from '@angular/core';
import crumpet from "./reducers/crumpet-reducer";
import {crumpetErrorSelector} from "./reducers/crumpet-reducer";
import {AppError} from "./data/AppError";


const logger = store => next => action => {
    console.log('Dispatching action: ', JSON.stringify(action));
    var result = next(action);
    console.log('State: ', JSON.stringify(store.getState()));
    return result;
};
const appStoreFactory = createAppStoreFactoryWithOptions({reducers:{crumpet}, additionalMiddlewares: [logger], debug:false});

@Component({
    selector: "app",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS,HTTP_PROVIDERS,NavigationActions,CrumpetService,provide(AppStore, { useFactory: appStoreFactory })],
    template: "<page-router-outlet></page-router-outlet>"
})

@RouteConfig([
    {path: "/Crumpet", component: CrumpetPage, name: "Crumpet", useAsDefault: true}
])
export class AppComponent {
    constructor(appStore:AppStore, navigationActions:NavigationActions) {
        appStore.select(crumpetErrorSelector).subscribe(this.handleErrors);
        appStore.dispatch(navigationActions.init());
    }

    handleErrors = (error:AppError) => {
        if (error) {
            var responseAddition = '';
            if (error.response) {
                if (error.response.status==404) {
                    responseAddition = ' (404 - Not found)';
                }
            }
            alert(error.message + responseAddition);
        }
    }
}