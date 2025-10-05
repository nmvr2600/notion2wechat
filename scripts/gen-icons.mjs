import { readFile } from 'node:fs/promises'
import { mkdir, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const svgPath = new URL('../icon.svg', import.meta.url)
const outDir = new URL('../public/icons/', import.meta.url)

await mkdir(outDir, { recursive: true })
const svg = await readFile(svgPath)
const sizes = [16, 32, 48, 128]
for (const size of sizes) {
  const png = await sharp(svg).resize(size, size).png().toBuffer()
  await writeFile(new URL(`icon-${size}.png`, outDir), png)
}
console.log('Generated icons:', sizes.map(s => `icon-${s}.png`).join(', '))
