export function arrayToRecords<T>(array: T[]): {[id: string]: T} {
    return array.reduce(
        (acc, value, index) => {
            acc[`${index}`] = value;
            return acc;
        },
        {} as {[id: string]: T}
    )
}