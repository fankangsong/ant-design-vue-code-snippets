import axios from "axios";
import { OPENAI_CONFIG } from "./config.js";

// 常规 ChatGPT API 请求
async function fetchChatCompletion(messages, apiKey = OPENAI_CONFIG.apiKey) {
  try {
    const response = await axios.post(
      OPENAI_CONFIG.apiEndpoint,
      {
        model: OPENAI_CONFIG.defaultModel,
        messages: messages,
        temperature: OPENAI_CONFIG.temperature,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("API 请求错误:", error);
    throw error;
  }
}

// 处理流式数据的请求
async function fetchStreamCompletion(
  messages,
  apiKey = OPENAI_CONFIG.apiKey,
  onDataChunk
) {
  try {
    const response = await axios.post(
      OPENAI_CONFIG.apiEndpoint,
      {
        model: OPENAI_CONFIG.defaultModel,
        messages: messages,
        temperature: OPENAI_CONFIG.temperature,
        stream: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        responseType: "stream",
      }
    );

    const reader = response.data;

    reader.on("data", (chunk) => {
      const lines = chunk.toString().split("\n");

      lines.forEach((line) => {
        if (line.trim() === "") return;
        if (line.trim() === "data: [DONE]") return;

        if (line.startsWith("data: ")) {
          try {
            const jsonData = JSON.parse(line.slice(6));
            const content = jsonData.choices[0].delta.content;
            if (content) {
              onDataChunk(content);
            }
          } catch (error) {
            console.error("解析流数据错误:", error);
          }
        }
      });
    });

    return new Promise((resolve, reject) => {
      reader.on("end", () => resolve());
      reader.on("error", (error) => reject(error));
    });
  } catch (error) {
    console.error("流式 API 请求错误:", error);
    throw error;
  }
}

export { fetchChatCompletion, fetchStreamCompletion };
