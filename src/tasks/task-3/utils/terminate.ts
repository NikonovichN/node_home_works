export function terminate(err) {
  if (err && err instanceof Error) {
    console.log(err.message, err.stack);
  }

  process.exit(1);
}
