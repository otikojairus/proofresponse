const PROOF_TOKEN = "tdzywlkjavfgs6hdq0960td1yeygrubb";

export function GET() {
  return new Response(PROOF_TOKEN, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
