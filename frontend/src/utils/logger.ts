function write(type: 'log' | 'error' | 'info', ...args: any[]) {
  console[type](...args);
}

export function log(...args: any[]) {
  write('log', ...args);
}

export function error(...args: any[]) {
  write('error', ...args);
}
