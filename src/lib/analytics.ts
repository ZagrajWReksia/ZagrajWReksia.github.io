export const event = (event: string, metadata?: Record<string, unknown>) => {
  console.log(event, metadata);
  if (typeof window !== 'undefined' && (window as Window & { umami?: { track: (event: string, metadata?: Record<string, unknown>) => void } }).umami) {
    (window as Window & { umami?: { track: (event: string, metadata?: Record<string, unknown>) => void } }).umami!.track(event, metadata);
  }
};

export const trackUrl = (action: string, url: string, metadata?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as Window & { umami?: { track: (data: object) => void } }).umami) {
    (window as Window & { umami?: { track: (data: object) => void } }).umami!.track({
      name: action,
      data: metadata,
      website: '884a9f2d-33cc-4afc-89aa-2996306a2248',
      title: 'Download',
      hostname: new URL(url).hostname,
      url: url,
    });
  }
};
