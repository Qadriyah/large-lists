export const mockFetch = <T>(data: T, headers?: Record<string, string>) => {
  if (!headers) {
    headers = { "Content-Type": "application/json" };
  }
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
      headers: new Headers(headers),
    })
  );
};
