export default function action(type: string, payload = {}) {
  return { type, ...payload }
}
