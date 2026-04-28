const apiKey = import.meta.env.VITE_AMPLITUDE_API_KEY as string;

if (!apiKey) {
  console.warn(
    'Amplitude not configured (VITE_AMPLITUDE_API_KEY not set). App will work but analytics will not be tracked.',
  );
} else if (typeof window !== 'undefined') {
  void import('@amplitude/unified')
    .then((amplitude) =>
      amplitude.initAll(apiKey, {
        analytics: {
          serverUrl: import.meta.env.VITE_AMPLITUDE_SERVER_URL as string,
        },
        sessionReplay: {
          sampleRate: 1,
        },
        engagement: {},
      }),
    )
    .catch((error) => {
      console.warn('Amplitude failed to initialize:', error);
    });
}

export {};
