import { arrayToRecords } from "$lib/util";
import type { PageData } from "../../$types";
import type { PageDataResponse, KidTally } from "./type";



export async function load({ fetch }): Promise<PageData> {
    try {
        const url = new URL('https://advent.sveltesociety.dev/data/2023/day-one.json');
        const response = await fetch(url);

        if (!response.ok) {
            return {
                fetchState: 'error',
                kidTallies: arrayToRecords([])
            } as PageDataResponse
        }

        const responseJsonData: KidTally[] = await response.json();

        return {
            fetchState: 'ok',
            kidTallies: arrayToRecords(responseJsonData)
        } as PageDataResponse
    } catch (error) {
        const e = error as Error;
        console.error(e);

        return {
            fetchState: 'error',
            kidTallies: arrayToRecords([])
        } as PageDataResponse
    }
}