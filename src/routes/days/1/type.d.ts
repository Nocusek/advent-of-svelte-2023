export interface KidTally {
    name: string
    tally: number
}

export interface PageDataResponse {
    fetchState: string
    kidTallies: { [id: string]: KidTally}
}


export type KidData = Record<string, KidTally>;