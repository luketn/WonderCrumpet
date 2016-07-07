import {Component,Input,Output,EventEmitter} from "@angular/core";
import {Crumpet} from "../../data/Crumpet";

@Component({
    selector: "crumpet-list-view",
    template: `<GridLayout class="crumpet-grid" rows="auto, *">
                    <ListView [items]="list" row="1" class="crumpet-list-view">
                        <template let-item="item">
                            <GridLayout columns="50, auto" (tap)="clicked.emit(item)" class="crumpet-row">
                                <Image col="0" [src]="item.imageUrl" class="crumpet-icon"></Image>
                                <Label col="1" [text]="item.name" class="crumpet-name"></Label>
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