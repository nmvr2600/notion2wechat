chrome.runtime.onInstalled.addListener(() => {
  console.log('Notion2WeChat extension installed')
})
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.action === 'convertContent') {
    handleContentConversion(request.data).then(sendResponse)
    return true
  }
})
async function handleContentConversion(data: unknown) {
  try {
    const response = await fetch('https://api.example.com/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    console.error('Conversion failed:', error)
    return { error: 'Conversion failed' }
  }
}
