import {Component, Input} from '@angular/core';

@Component({
    selector: 'content-container',
    styleUrls:['content-container.component.css'],
    templateUrl: './content-container.component.html'
})

export class ContentContainer{
    @Input() header: string;
}