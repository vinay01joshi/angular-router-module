
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
    template: `<h1>Photo Details {{ id }}</h1>
    `
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
    id ;
    subscription ;
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
       this.subscription = this._route.params.subscribe(parms => {
            this.id = +parms["id"]
        });
    }
    constructor(private _route: ActivatedRoute) {

    }
}