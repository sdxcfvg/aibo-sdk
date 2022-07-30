import { defineUserConfig, defaultTheme } from 'vuepress'
import packageJson from '../../package.json'

export default defineUserConfig({
  port: 8080,
  open: true,

  title: packageJson.name,
  description: packageJson.description,

  // 将部署站点的基本 URL github上用的前缀  eg:'/project name/'
  base: `/tongban-monitor/${packageJson.name}/tree/gh-pages/`,

  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/'
      },

      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/tongban-monitor/aibo-sdk'
      }
    ],
    // 左上角logo
    logo: '/images/logo.svg'
  })
})
