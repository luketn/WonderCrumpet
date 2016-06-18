import {Injectable} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Actions, AppStore} from "angular2-redux";

type Types = "pageChanged";
export const NavigationActionTypes = {
    pageChanged: "pageChanged" as Types
};

type PageNames = "Crumpet";
export const NavigationPages = {
    Crumpet: "Crumpet" as PageNames
};

const pageChanged = (page) => ({type: NavigationActionTypes.pageChanged, page: page});

@Injectable()
export class NavigationActions extends Actions {
    constructor(private router: Router, appStore:AppStore) {super(appStore);}

    init() {
        return this.changePage(NavigationPages.Crumpet);
    }

    changePage(page:PageNames) {
        return dispatch => {
            this.router.navigate([page]);
            dispatch(pageChanged(page));
        };
    }
}