import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-band-name-picker',
    templateUrl: './band-name-picker.component.html',
    styleUrls: ['./band-name-picker.component.css']
})
export class BandNamePickerComponent implements OnInit {
    // 31 adj
    @Input() adjectives: string[];
    // 31 adj ending in -est -ing -y
    @Input() otherAdjectives: string[];
    // 12 nouns
    @Input() nouns: string[];
    // 12 plural nouns
    @Input() pluralNouns: string[];

    bandNames: string[];
    nameForm: FormGroup;
    formReady = false;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this.nameForm = this.fb.group({
            name: [ null, Validators.required ],
            month: [ null, Validators.required ],
            day: [ null, Validators.required ]
        });

        this.formReady = true;
    }

    submitForm(form: FormGroup): void {
        const { name } = form.value;
        let { month, day } = form.value;

        month = +month === 0 ? 1 : +month;
        day = +day === 0 ? 1 : +day;
        const inverseMonth = this.nouns.length - month;
        const inverseDay = this.adjectives.length - day;

        const name1 = `${ name } and the ${ this.adjectives[day] } ` +
                      `${ this.pluralNouns[month] }`;

        const name2 = `${ this.adjectives[inverseDay] } ` +
                      `${ this.nouns[inverseMonth]}`;

        const name3 = `${ this.otherAdjectives[day] } ` +
                      `${ this.nouns[month] }`;

        const name4 = `${ this.otherAdjectives[inverseDay] } ` +
                      `${ this.pluralNouns[inverseMonth] }`;

        this.bandNames = [ name1, name2, name3, name4 ];
        console.log(this.bandNames);
    }
}
