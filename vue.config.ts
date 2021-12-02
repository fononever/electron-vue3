// 这里是electron-builder的配置
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: "generic",
            url: "https://cdn.ypzdw.com/mp/update", // 程序更新地址
          },
        ],
        productName: "electron-vue-example", // 程序名称
        appId: "ywkj-mp-manage", // 程序标识
        directories: {
          // 构建输出路径
          output: "build",
        },
        asar: true,
        compression: "maximum",
        files: ["dist_electron/**/*"],
        // mac dmg包配置
        dmg: {
          contents: [
            {
              x: 410,
              y: 150,
              type: "link",
              path: "/Applications",
            },
            {
              x: 130,
              y: 150,
              type: "file",
            },
          ],
        },
        // mac 图标
        mac: {
          icon: "build/icons/favicon.icns",
        },
        // windows 配置
        // win: {
        //   // windows图标路径
        //   icon: "build/icons/favicon.ico",
        //   target: [
        //     {
        //       // 使用nsis打包成exe
        //       target: "nsis",
        //       arch: [
        //         "ia32", // 使用32位打包；64位：x64
        //       ],
        //     },
        //   ],
        // },
        // linux 配置
        // linux: {
        //   icon: "build/icons",
        // },
        // nsis配置
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: "./build/icons/favicon.ico", // 安装图标
          uninstallerIcon: "./build/icons/favicon.ico", // 卸载图标
          installerHeaderIcon: "./build/icons/favicon.ico", // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面快捷方式
          createStartMenuShortcut: true, // 创建菜单快捷方式
          shortcutName: "electron-vue", // 简称
        },
      },
    },
  },
};
