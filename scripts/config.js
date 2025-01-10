import path from "path";
import dotenv from "dotenv";

// 加载.env文件
dotenv.config();

const ENV = process.env.NODE_ENV || "development";

const CONFIG = {
  development: {
    apiEndpoint: process.env.DEV_API_ENDPOINT,
    defaultModel: process.env.DEV_MODEL,
    temperature: 0.7,
  },
  production: {
    apiEndpoint: process.env.OPENAI_API_ENDPOINT,
    defaultModel: process.env.OPENAI_MODEL,
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
