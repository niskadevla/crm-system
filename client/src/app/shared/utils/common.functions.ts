export const findItemById = <T extends { _id?: string | number }>(list: T[], id: string | number): any =>
    list.find(p => p._id === id);

export const removeItemById = <T extends { _id?: string | number }>(list: T[], id: string | number): any =>
    list.filter(p => p._id !== id);
