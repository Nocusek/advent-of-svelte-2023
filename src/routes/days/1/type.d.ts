export interface KidTally {
    name: string
    tally: number
}

export interface PageDataResponse {
    fetchState: string
    kidTallies: { [id: string]: KidTally}
}


export type KidRecord = Record<string, KidTally>;