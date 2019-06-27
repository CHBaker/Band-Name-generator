import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-band-name-picker',
    templateUrl: './band-name-picker.component.html',
    styleUrls: ['./band-name-picker.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class BandNameGeneratorComponent implements OnInit {
    // 31 adj
    @Input() adjectives: string[] | string;
    // 31 adj ending in -est -ing -y
    @Input() otherAdjectives: string[]| string;
    // 12 nouns
    @Input() nouns: string[]| string;
    // 12 plural nouns
    @Input() pluralNouns: string[]| string;

    bandNames: string[];
    nameForm: FormGroup;
    formReady = false;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.checkString();
        this.initForm();
    }

    checkString(): void {
        if (typeof this.adjectives === 'string') {
            this.adjectives = JSON.parse(this.adjectives as string);
            this.otherAdjectives = JSON.parse(this.otherAdjectives as string);
            this.nouns = JSON.parse(this.nouns as string);
            this.pluralNouns = JSON.parse(this.pluralNouns as string);
        }
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
