import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { CanDeactivate } from "@angular/router";

import { MessagesComponent } from './messages/messages.component';
import { FormComponent } from "./form-component";



@Injectable()
export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {

    canDeactivate(component : FormComponent){
        if(component.hasUnsavedChanges())
            return confirm('Are you sure?');
        
        return true;

    }

}