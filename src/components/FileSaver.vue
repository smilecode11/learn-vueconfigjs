<template>
  <div class="file-saver-container">
    <button @click="handleFileSave('image')">下载图片</button>
    <button @click="handleFileSave('text')">下载text</button>
    <button @click="handleFileSave('canvas')">下载Canvas</button>
    <canvas id="my-canvas"></canvas>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import FileSaver from 'file-saver'
export default defineComponent({
  setup() {
    const handleFileSave = (type) => {
      switch (type) {
        case 'image':
          FileSaver.saveAs(
            'https://avatars.githubusercontent.com/u/70701174?s=40&v=4',
            'image.jpg'
          )
          break
        case 'text':
          var blob = new Blob(['Hello, world!'], {
            type: 'text/plain;charset=utf-8',
          })
          FileSaver.saveAs(blob, 'hello world.txt')
          break
        case 'canvas':
          var canvas = document.getElementById('my-canvas')
          canvas.toBlob(function (blob) {
            FileSaver.saveAs(blob, 'pretty image.png')
          })
          break

        default:
          console.warn('other')
      }
    }

    return {
      handleFileSave,
    }
  },
})
</script>