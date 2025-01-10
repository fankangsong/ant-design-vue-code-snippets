import path from "path";

const ENV = process.env.NODE_ENV || "development";

const CONFIG = {
  development: {
    apiEndpoint: "http://10.0.101.250:7996/v1/chat/completions",
    defaultModel: "Qwen2-coder-32B-feisuan", //gpt-3.5-turbo
    temperature: 0.7,
  },
  production: {
    apiEndpoint: process.env.OPENAI_API_ENDPOINT, // ${host}/v1/chat/completions
    defaultModel: process.env.OPENAI_MODEL, // gpt-3.5-turbo
    temperature: 0.5,
  },
};

export const OPENAI_CONFIG = {
  ...CONFIG[ENV],
  apiKey: process.env.OPENAI_API_KEY || "",
};

// 生成的目标文件
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DIST_FILE = path.resolve(
  __dirname,
  "..",
  "dist",
  "antd-vue.code-snippets"
);
