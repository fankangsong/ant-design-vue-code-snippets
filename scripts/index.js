import { fetchChatCompletion } from "./fetch.js";
import { antd2CodeSnippetsPrompts } from "./prompts.js";
import { ANT_COMPONENTS } from "./antd.js";
import fs from "fs-extra";
import ora from "ora";
import { DIST_FILE } from "./config.js";

const codeSnippetsObject = {};
const errorLog = [];

async function getJsonData(compName) {
  try {
    const message = antd2CodeSnippetsPrompts(compName);
    const data = await fetchChatCompletion(message);
    const [, jsonString] = data.match(/```json([\s\S]*?)```/);

    if (jsonString) {
      return JSON.parse(jsonString);
    }

    return Promise.reject(null);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function run() {
  const spinner = ora("正在生成").start();
  const len = ANT_COMPONENTS.length;
  let couter = 0;
  for (const compName of ANT_COMPONENTS) {
    try {
      spinner.text = `正在生成(${couter}/${len})：<${compName} />`;

      const data = await getJsonData(compName);
      if (data) {
        const [keyName] = Object.keys(data);
        codeSnippetsObject[compName] = data[keyName];

        fs.writeFileSync(
          DIST_FILE,
          JSON.stringify(codeSnippetsObject, null, 2, 2)
        );
      }
      couter++;
    } catch (error) {
      console.log(error);
      errorLog.push(compName);
    }
  }
  fs.writeFileSync("./build-error.log", JSON.stringify(errorLog, null, 2, 2));
  if (errorLog.length > 0) {
    console.log("查看错误日志：", "build-error.log");
  }

  spinner.succeed(`完成`);
}

run();
