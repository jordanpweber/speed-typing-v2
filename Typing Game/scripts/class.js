'use strict';

class Score {
    #date;
    #hits;
    #percentage;

    constructor(date, hits, percentage) {
        this.#date = date;
        this.#hits = hits;
        this.#percentage = percentage
    }

    getDate() {
        return this._date;
    }

    getHits() {
        return this._hits;
    }

    getPercentage() {
        return this._percentage;
    }
}