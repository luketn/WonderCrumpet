import {Component,Input,Output,EventEmitter} from "@angular/core";
import {Crumpet} from "../../data/Crumpet";

@Component({
    selector: "crumpet-list-view",
    template: `<GridLayout rows="auto, *">
                    <ListView [items]="list" row="1" class="small-spacing">
                        <template let-item="item">
                            <GridLayout columns="*, auto" (tap)="clicked.emit(item)">
                                <Label col="0" [text]="item.name" class="medium-spacing"></Label>
                            </GridLayout>
                        </template>
                    </ListView>
               </GridLayout>
               `,
    styles: [``]
})

export class CrumpetListView {
    @Input() list:Crumpet[];
    @Output() clicked = new EventEmitter<Crumpet>();
}