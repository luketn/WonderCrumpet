/**
 * Created by lthompson on 28/05/2016.
 */
import {Component} from "@angular/core";
import {AppStore} from "angular2-redux";
import {Crumpet} from "../../data/Crumpet";
import {Observable} from "rxjs/Rx";
import {CrumpetListView} from "../views/crumpet-list-view";
import {CrumpetActions} from "../../actions/crumpet-actions";
import {crumpetListSelector} from "../../reducers/crumpet-reducer";

@Component({
    selector: "crumpet-page",
    directives: [CrumpetListView],
    providers: [CrumpetActions],
    template: `<TabView #tabView selectedIndex="0">
                 <StackLayout *tabItem="{title: 'Crumpets'}">
                    <crumpet-list-view [list]="(crumpetList$ | async)" (clicked)="clicked($event)"></crumpet-list-view>
                 </StackLayout>
                 <StackLayout *tabItem="{title: 'About'}">
                    <Label text="About"></Label>
                  </StackLayout>
               </TabView>
               `,
    styles: [``]
})

export class CrumpetPage {
    crumpetList$:Observable<Crumpet[]>;

    constructor(private crumpetActions:CrumpetActions, private appStore:AppStore) {
        this.crumpetList$ = appStore.select(crumpetListSelector);
        appStore.dispatch(crumpetActions.loadCrumpets());
    }

    clicked(crumpet:Crumpet) {
        alert('Clicked on ' + crumpet.name);
    }
}