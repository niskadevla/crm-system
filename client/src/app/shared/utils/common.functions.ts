export const findItemById = <T extends { _id?: string | number }>(list: T[], id: string | number): T | undefined =>
    list.find((p: T) => p._id === id);

export const removeItemById = <T extends { _id?: string | number }>(list: T[], id: string | number): T[] =>
    list.filter((p: T) => p._id !== id);

export const removeFalsyFromObj = (obj: object) => Object.fromEntries(
    Object.entries(obj).filter(([_, value]: [string, any]) => Boolean(value))
);
