import "@testing-library/jest-dom";

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

const intersectionObserverMock = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
Object.defineProperty(globalThis, 'IntersectionObserver', {
  value: intersectionObserverMock,
  writable: true,
});

const resizeObserverMock = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
Object.defineProperty(globalThis, 'ResizeObserver', {
  value: resizeObserverMock,
  writable: true,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
