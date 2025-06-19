export const event = (event: string, metadata: any) => {
    console.log(event, metadata);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (window.sa_event) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        sa_event(event, metadata)
    }
}