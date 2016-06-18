/**
 * Created by lthompson on 18/06/2016.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Crumpet} from "../data/Crumpet";

@Injectable()
export class CrumpetService {

    constructor(private http:Http) {}

    listCrumpets():Observable<Crumpet[]> {
        var url = 'http://wondercrumpet.com/services/crumpet/list.json';
        return this
            .http
            .get(url)
            .map(result => this.cleanData(result.json()))
            .catch(this.handleErrors);
    }

    cleanData(json):Crumpet[] {
        return json.crumpets as Crumpet[];
    }

    handleErrors(error: Response) {
        console.log('Error calling crumpet service: ', JSON.stringify(error));
        return Observable.throw(error);
    }
}
