export interface VideoIds {
    etag: string,
    items: IdObject[],
    kind: string,
    regionCode: string
}

export interface IdObject {
    id: {
        kind: string,
        videoId: string
    }
}

export interface VideoInfo {
    kind: string,
    etag: string,
    items: VideoDetails []
}

export interface VideoDetails {
    kind: string,
    id: string,
    snippet: SpecificDetails
}

export interface SpecificDetails {
    channelId: string,
    title: string,
    description: string,
    thumbnails: { standard: {
            url: string,
            width: number,
            height: number
        }
    }
}

export interface DisplayDetails {
    id: string,
    title: string,
    description: string,
    thumbnail: string
}
