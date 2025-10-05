export async function uploadToFreeImageHost(imageUrl: string): Promise<string> {
  try {
    // 下载图片
    const response = await fetch(imageUrl)
    if (!response.ok) throw new Error('Failed to download image')

    const blob = await response.blob()

    // 上传到免费图床 (使用postimages.org)
    const formData = new FormData()
    formData.append('upload', blob, 'image.png')
    formData.append('expire', '0') // 永不过期

    const uploadResponse = await fetch('https://postimages.org/api/upload', {
      method: 'POST',
      body: formData,
    })

    if (!uploadResponse.ok) throw new Error('Failed to upload image')

    const result = await uploadResponse.json()
    return result.url
  } catch (error) {
    console.warn('Image upload failed, using original URL:', error)
    return imageUrl
  }
}

export async function processImagesInMarkdown(markdown: string): Promise<string> {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  const promises: Promise<string>[] = []

  markdown.replace(imageRegex, (match, alt, url) => {
    if (url.includes('notion.so') || url.includes('file.notion.so')) {
      promises.push(uploadToFreeImageHost(url).then((newUrl) => `![${alt}](${newUrl})`))
    } else {
      promises.push(Promise.resolve(match))
    }
    return match
  })

  const results = await Promise.all(promises)
  let index = 0
  return markdown.replace(imageRegex, () => results[index++])
}
