import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { InputFieldComponent } from "./components/input-field/input-field.component";

const compDec = [
    InputFieldComponent,
]

const modDec = [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule,
]

@NgModule({
    imports: modDec,
    declarations: compDec,
    exports: [
        ...compDec, 
        ...modDec,
    ],
})

export class SharedModule {

}