const MOCK_REPLIES = [
  'Try the signature cappuccino and pair it with carrot cake.',
  'For events, booking early gives better table selection.',
  'Our coffee beans are sourced for balanced and bold flavor notes.',
]

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function sendChatMessage(message) {
  await delay(350)
  const hash = message.length % MOCK_REPLIES.length
  return { response: MOCK_REPLIES[hash] }
}

export async function submitContactForm(data) {
  await delay(250)
  return { ok: true, received: data }
}

export async function submitBookingRequest(data) {
  await delay(250)
  return { ok: true, received: data }
}
