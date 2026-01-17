export function filterRecon(payload) {
  return {
    status: payload.status,
    checkpoint: payload.checkpoint,
    ready: payload.data.ready,
    compression: payload.data.compression,
    domain: payload.data.domain
  };
}
