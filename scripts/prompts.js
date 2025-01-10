// 系统角色的基础设置
export const SYSTEM_ROLES = {
  DEFAULT: '你是一个有帮助的AI助手。',
  TRANSLATOR: '你是一个专业的翻译专家，精通中英文互译。',
  PROGRAMMER: '你是一个专业的程序员，擅长编写和解释代码。',
  TEACHER: '你是一个耐心的教师，善于解释复杂的概念。',
  CODER: '你是一个前端开发工程师，擅长 Typescript, Vue, uni-app, 小程序等开发。'
};

// 常用的提示词模板
export const PROMPT_TEMPLATES = {
  // 翻译相关
  TRANSLATE: {
    system: SYSTEM_ROLES.TRANSLATOR,
    user: '请将以下文本翻译成{targetLang}：\n{text}'
  },
  
  // 代码相关
  CODE_REVIEW: {
    system: SYSTEM_ROLES.PROGRAMMER,
    user: '请帮我检查以下代码，指出潜在的问题和改进建议：\n```{lang}\n{code}\n```'
  },
  
  // 解释说明
  EXPLAIN: {
    system: SYSTEM_ROLES.TEACHER,
    user: '请用通俗易懂的方式解释：{concept}'
  },

  CODE_DEV: {
    system: SYSTEM_ROLES.CODER,
    user: '{content}'
  }
};

// 创建消息数组的辅助函数
export function createMessages(template, variables = {}) {
  const messages = [];
  
  // 添加系统角色设置
  if (template.system) {
    messages.push({
      role: 'system',
      content: template.system
    });
  }
  
  // 添加用户消息，替换变量
  let userContent = template.user;
  Object.entries(variables).forEach(([key, value]) => {
    userContent = userContent.replace(`{${key}}`, value);
  });
  
  messages.push({
    role: 'user',
    content: userContent
  });
  
  return messages;
}

// 使用示例：
/*
import { PROMPT_TEMPLATES, createMessages } from './prompts.js';

// 翻译示例
const translationMessages = createMessages(PROMPT_TEMPLATES.TRANSLATE, {
  targetLang: '英文',
  text: '你好，世界'
});

// 代码审查示例
const codeReviewMessages = createMessages(PROMPT_TEMPLATES.CODE_REVIEW, {
  lang: 'javascript',
  code: 'function example() { ... }'
});

// 概念解释示例
const explainMessages = createMessages(PROMPT_TEMPLATES.EXPLAIN, {
  concept: '量子计算'
});
*/ 

export function antd2CodeSnippetsPrompts(compName) {
    const content = `基于 vue3 版本的 antd vue 组件库，按照示例，生成 ${compName} 组件的 vscode snippets 代码片段

- 只回复标准的 JSON 代码，不回复解释文字
- 属性值符合JSON规范，用双引号包裹，例如：bordered=\"$\{1:|true,false|\}\"
- 属性如果是数据来源，用数据绑定的的方式，例如 :data-source=\"getDataSource\"


示例：
\`\`\`json
{
  "a-list": {
    "prefix": "a-list",
    "description": "antd <a-list> 组件",
    "body": [
      "<a-list",
      "  bordered=\"$\{1|false,true|\}\"",
      "  item-layout=\"$\{2|horizontal,vertical|\}\"",
      "  size=\"$\{3|default,small|\}\"",
      "  :data-source=\"$\{4:getDataSource\}\"",
      "  :pagination=\"$\{5:pagination\}\"",
      "  :loading=\"$\{6|false,true|\}\"",
      ">",
      "  <template #renderItem=\"{ item }\">",
      "    <a-list-item>",
      "      <a-card title=\"$\{7:item.title\}>\"",
      "        $\{8:item.description\}",
      "      </a-card>",
      "    </a-list-item>",
      "  </template>",
      "</a-list>"
    ]
  }
}
\`\`\`
`
    return createMessages(PROMPT_TEMPLATES.CODE_DEV, { content })
}