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