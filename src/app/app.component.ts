import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rockBandNamePicker';

    adjectives = [
        'Savage',
        'Exquisite',
        'Cackling',
        'Blood-red',
        'Raucous',
        'Trampled',
        'Yeeting',
        'Electric',
        'Die Hard',
        'Quantum',
        'Fluttering',
        'Screaming',
        'Fighting',
        'Dancing',
        'Delinquent',
        'Groovy',
        'Revolutionary',
        'Freedom-fighter',
        'Smooth',
        'Silent',
        'Wicked',
        'Heinous',
        'Bodacious',
        'Lone',
        'Coding',
        'Golden',
        'Fire-breathing',
        'Spunky',
        'Abominable',
        'Full Metal',
        'Dazzling'
    ];

    otherAdjectives = [
        'Coldest',
        'Strongest',
        'Sleeping',
        'Punching',
        'Loudest',
        'Haunting',
        'Fallen',
        'Chosen',
        'Fighting',
        'Crushing',
        'Smoothest',
        'Swiftest',
        'Calming',
        'Damaging', // 14
        'Lasting',
        'Amber',
        'Super',
        'Dapper',
        'Master',
        'Gossamer',
        'Alabaster',
        'Lackluster',
        'Airworthy',
        'Tributary', // 24
        'Everlasting',
        'Rascally',
        'Shimmering',
        'Jabbing',
        'Slumbering',
        'Runaway',
        'Ghostly'
    ];

    nouns = [
        'Soldier',
        'System',
        'Kite',
        'Mumbo-jumbo',
        'Dreamer',
        'Criminal',
        'Queen',
        'Fire',
        'Infiltration',
        'Death',
        'Developer',
        'Skull'
    ];

    pluralNouns = [
        'Soldiers',
        'System',
        'Kites',
        'Dreamers',
        'Criminals',
        'Queens',
        'Army',
        'Skeletons',
        'Tabloids',
        'Tigers',
        'Wanderers',
        'Dancers'
    ];
}
