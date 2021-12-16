export interface Thing {
    id: number,
    name: string,
    public_url: string,
    thumbnail: string,
    preview_image: string,
    creator: Creator
}

export interface Creator {
    name: string,
    public_url: string
}
