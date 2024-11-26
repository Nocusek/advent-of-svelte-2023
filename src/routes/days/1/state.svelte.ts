import type { KidData  } from "./type";

interface KidRecord {
    name: string;
    tally: number;
    id: string;
}


export class NiceOrNaughtyKids {
    kids: KidData = $state<KidData>({});
    #page: number = $state(0);
    #pageSize: number = $state(10);
    #currentPageSize: number = $derived(this.#page * this.#pageSize);
    #kidsArray: KidRecord[] = $derived(Object.entries(this.kids).map(([k,v]) => ({id: k, ...v})));
    #totalKids: number = $derived(this.#kidsArray.length)
    #pageKids: KidRecord[] = $derived(this.#kidsArray.slice(this.#currentPageSize, this.#currentPageSize + this.#pageSize));


    constructor(kids: KidData) {
        this.kids = kids;
    }

    get totalKids(): number {
        return this.#totalKids;
    }

    get pageKids(): KidRecord[] {
        return this.#pageKids
    }

}