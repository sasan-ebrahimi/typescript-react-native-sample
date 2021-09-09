function serialize(item): string {
    return JSON.stringify(item)
}

function deserialize<T>(str: string): T {
    return JSON.parse(str)
}

export {serialize, deserialize}
