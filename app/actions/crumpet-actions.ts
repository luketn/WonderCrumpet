import {CrumpetService} from "../services/crumpet-service";
import {Injectable} from "@angular/core";
import {Actions, AppStore} from "angular2-redux";
import {Crumpet} from "../data/Crumpet";

type Types = "loadedCrumpets" | "loadCrumpetsError";
export const CrumpetActionTypes = {
    loadedCrumpets: "loadedCrumpets" as Types,
    loadCrumpetsError: "loadCrumpetsError" as Types
};

const loadedCrumpets = (crumpets:Crumpet[]) => ({type: CrumpetActionTypes.loadedCrumpets, crumpets});
const loadCrumpetsError = (error) => ({type: CrumpetActionTypes.loadCrumpetsError, error});

@Injectable()
export class CrumpetActions extends Actions {
    constructor(private crumpetService:CrumpetService, appStore:AppStore) {
        super(appStore);
    }

    loadCrumpets = () => {
        return dispatch => {
            this.crumpetService.listCrumpets()
                .subscribe(
                    crumpets=>dispatch(loadedCrumpets(crumpets)),
                    error=>dispatch(loadCrumpetsError(error))
                );
        };
    };
}
