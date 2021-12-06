// 这里是electron-builder的配置
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  },
};
