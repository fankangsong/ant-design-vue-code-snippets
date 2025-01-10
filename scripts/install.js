import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

function main() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFile = path.resolve(
      __dirname,
      "../dist/antd-vue.code-snippets"
    );
    const targetDir = path.resolve(process.cwd(), ".vscode");

    fs.ensureDirSync(targetDir);
    fs.copySync(sourceFile, path.join(targetDir, "antd-vue.code-snippets"));

    console.log("antd-vue.code-snippets has been copied to .vscode directory.");
  } catch (error) {
    console.log("error", error);
  }
}

main();
