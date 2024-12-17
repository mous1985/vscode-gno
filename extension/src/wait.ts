import * as readline from 'readline';

export function waitForKeyPress(): Promise<void> {
  return new Promise((resolve) => {
    process.stdout.write('\n⚡ Done. Press any key to close...\n');

    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();

    process.stdin.on('keypress', () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      resolve();
    });
  });
}

if (require.main === module) {
  waitForKeyPress().then(() => process.exit(0));
}
