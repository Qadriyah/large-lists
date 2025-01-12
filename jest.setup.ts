import "@testing-library/jest-dom";

export const useMockRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
});

jest.mock("next/navigation", () => {
  const originalModule = jest.requireActual("next/navigation");

  return {
    __esModule: true,
    ...originalModule,
    useRouter: useMockRouter,
    usePathname: jest.fn().mockImplementation((pathArg) => {
      return pathArg;
    }),
    useSearchParams: jest.fn().mockReturnValue(new Map()),
  };
});
