// .cpanel-ci.js

import { deploy, excludeDefaults } from "@samkirkland/ftp-deploy";

async function deployToCPanel() {
  console.log("🚚 Deploy started");
  await deploy({
    server: process.env.FTP_SERVER,
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    protocol: "ftp",
    port: 21,
    "log-level": "verbose",
    "local-dir": "_site/",
    "server-dir": "public_html/",
    exclude: [...excludeDefaults, ".env", ".git/**", "node_modules/**", "vendor/**"],
  });
  console.log("🚀 Deploy done!");
}

deployToCPanel();