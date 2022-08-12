import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { InputFieldComponent } from "./components/input-field/input-field.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

const compDec = [
    InputFieldComponent,
    SidenavComponent,
    NavbarComponent,
    LoaderComponent
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