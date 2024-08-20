const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'C:/project/book-example/src/main/resources/static' // vue-cli 웹팩의 빌드경로 설정
})
