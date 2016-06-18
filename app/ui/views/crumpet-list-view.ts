import {Component,Input,Output,EventEmitter} from "@angular/core";
import {Crumpet} from "../../data/Crumpet";

@Component({
    selector: "crumpet-list-view",
    template: `<GridLayout class="crumpet-grid" rows="auto, *">
                    <ListView [items]="list" row="1" class="crumpet-list-view">
                        <template let-item="item">
                            <GridLayout columns="*, auto" (tap)="clicked.emit(item)">
                                <Label col="0" [text]="item.name" class="crumpet-item-name"></Label>
                            </GridLayout>
                        </template>
                    </ListView>
               </GridLayout>
               `,
    styleUrls: ['./ui/views/crumpet-list-view.css']
})

export class CrumpetListView {
    @Input() list:Crumpet[];
    @Output() clicked = new EventEmitter<Crumpet>();
}