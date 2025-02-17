import type { PlasmoCSConfig } from "plasmo"
import { useState, useEffect } from "~node_modules/@types/react"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

// マウスオーバーした要素内のテキストをズームしてページ内に浮かべたい

// const body = document.querySelector("body")

// const zoomTag = document.createElement("h1")

// document.addEventListener("mouseover", (event: any) => {
//   console.log(event.toElement.innerText)
// })

// ↑のカーソルで要素を取得するのを↓のコンポーネント内でやりたいけど
// そうすると適用されるのがページ全体ではなく
// コンポーネントで描画した範囲だけになるっぽい
// と思ったけど上手く行った
// ただし、取得したテキストを描画しようとするとエラー発生

const cursorTag = () => {
  // const [innerWord, setInnerWord] = useState<string>("")
  // const [onCursor, setOnCursor] = useState<boolean>(false)
  // const [displayWord, setDisplayWord] = useState<string>("")

  // document.addEventListener("mouseover", (event: any) => {
  //   setOnCursor(true)
  //   setInnerWord(event.toElement.innerText)
  // })

  // document.addEventListener("mouseout", () => {
  //   setOnCursor(false)
  //   setInnerWord("")
  // })

  // useEffect(() => {
  //   if (onCursor) {
  //     setDisplayWord(innerWord)
  //   }
  // }, [onCursor])


  return (
    <div>
      {/* <h1>テスト</h1> */}
      {/* <h1>{displayWord}</h1>       */}
    </div>
  )
}

export default cursorTag