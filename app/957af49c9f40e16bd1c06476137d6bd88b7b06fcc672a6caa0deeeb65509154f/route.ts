const PROOF_TOKEN =
  "957af49c9f40e16bd1c06476137d6bd88b7b06fcc672a6caa0deeeb65509154f";

export function GET() {
  return new Response(PROOF_TOKEN, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
