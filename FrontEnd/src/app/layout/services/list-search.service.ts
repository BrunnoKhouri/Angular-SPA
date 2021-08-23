import { Injectable, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Injectable({ providedIn: 'root' })
export class ListSearchService
{
    private mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    public isMobileSearchActive: boolean = false;

    constructor(media: MediaMatcher)
    {
        this.mobileQuery = media.matchMedia('(max-width: 959px)');
        this._mobileQueryListener = () => {
            this.isMobileSearchActive = (!this.mobileQuery.matches) ? this.mobileQuery.matches : this.isMobileSearchActive;
        };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

}
