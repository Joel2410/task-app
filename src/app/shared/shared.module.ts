import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DragDropModule } from 'primeng/dragdrop';
import { FieldsetModule } from 'primeng/fieldset';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const modulesToExport = [
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
    DragDropModule,
    FieldsetModule,
    InputTextareaModule
];

@NgModule({
    imports: [
        CommonModule,
        ...modulesToExport
    ],
    exports: [...modulesToExport]
})
export class SharedModule { }
