// utils.ts
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: number | null = null;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      if (timeout !== null) {
          clearTimeout(timeout);
      }
      timeout = window.setTimeout(() => {
          func.apply(this, args);
      }, wait);
  } as unknown as (...args: Parameters<T>) => void;
}
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number) {
    let inThrottle: number | null = null;
    return function (this: unknown, ...args: Parameters<T>) {
      const context = this;
      if (inThrottle === null) {
        func.apply(context, args);
        inThrottle = window.setTimeout(() => {
          inThrottle = null;
        }, limit);
      }
    } as T;
}