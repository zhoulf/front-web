// const path = require("path");
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
    ]
  },
  devServer: {
    open: true,
    // 解析body，对接真实服务端环境需要注释掉
    before: function(app) {
      // var bodyParser = require("body-parser");
      // app.use(bodyParser.json());
    //   if (process.env.MOCK == "true") {
    //     app.use(createMockMiddleware());
    //   }
    },
    proxy: {
      "/api": {
        target: "http://localhost:6000",
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else if (process.env.MOCK == "true") {
            console.log(req.path);
            const name = req.path
              .split("/api/")[1]
              .split("/")
              .join("_");
            const mock = require(`./mock/${name}`);
            // const result = mock(req);
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(mock);
          }
          return false;
        }
      }
    }
  },
  pages: {
    home: {
      // page 的入口
      entry: 'src/modules/home/main.js',
      // 模板来源
      // template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'home.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'home Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  }
};
