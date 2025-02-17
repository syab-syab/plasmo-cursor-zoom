import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

// マウスオーバーした要素内のテキストをズームしてページ内に浮かべたい

const body = document.querySelector("body")

// const zoomTag = document.createElement("h1")

document.addEventListener("mouseover", (event: any) => {
  console.log(event.toElement.innerText)
  // const stTag: string = event.toElement.innerText
  // console.log(event.fromElement)
  // const zoomFont = zoomTag.innerText(stTag)
  // const zoomTag = document.createElement("h1")
  // zoomTag.innerText = event.toElement.innerText
  // body.append(zoomTag)
})