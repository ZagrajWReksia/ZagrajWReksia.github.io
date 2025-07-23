export const event = (event: string, metadata?: any) => {
    console.log(event, metadata);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (window.umami) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        window.umami.track(event, metadata)
    }
}

export const trackUrl = (url: string, metadata?: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (window.umami) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        window.umami.track({
            "name": "Download",
            "data": metadata,
            "website": "884a9f2d-33cc-4afc-89aa-2996306a2248",
            "title": "Download",
            "hostname": new URL(url).hostname,
            "url": url
        })
    }
}
