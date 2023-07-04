const fs = require("fs");

const languages = {
  "ar-SA": "العربية",
  "bg-BG": "Български",
  "bn-BD": "Bengali",
  "ca-ES": "Català",
  "cs-CZ": "Česky",
  "da-DK": "Dansk",
  "de-DE": "Deutsch",
  "el-GR": "Ελληνικά",
  "es-ES": "Español",
  "eu-ES": "Euskara",
  "fa-IR": "فارسی",
  "fi-FI": "Suomi",
  "fr-FR": "Français",
  "gl-ES": "Galego",
  "he-IL": "עברית",
  "hi-IN": "हिन्दी",
  "hu-HU": "Magyar",
  "id-ID": "Bahasa Indonesia",
  "it-IT": "Italiano",
  "ja-JP": "日本語",
  "kab-KAB": "Taqbaylit",
  "kk-KZ": "Қазақ тілі",
  "ko-KR": "한국어",
  "ku-TR": "Kurdî",
  "lt-LT": "Lietuvių",
  "lv-LV": "Latviešu",
  "my-MM": "Burmese",
  "nb-NO": "Norsk bokmål",
  "nl-NL": "Nederlands",
  "nn-NO": "Norsk nynorsk",
  "oc-FR": "Occitan",
  "pa-IN": "ਪੰਜਾਬੀ",
  "pl-PL": "Polski",
  "pt-BR": "Português Brasileiro",
  "pt-PT": "Português",
  "ro-RO": "Română",
  "ru-RU": "Русский",
  "si-LK": "සිංහල",
  "sk-SK": "Slovenčina",
  "sl-SI": "Slovenščina",
  "sv-SE": "Svenska",
  "ta-IN": "Tamil",
  "tr-TR": "Türkçe",
  "uk-UA": "Українська",
  "zh-CN": "简体中文",
  "zh-HK": "繁體中文 (香港)",
  "zh-TW": "繁體中文",
  "vi-VN": "Tiếng Việt",
  "mr-IN": "मराठी",
  en: "en",
};

const fileList = Object.keys(languages);
let templateJsonData;
const templateJsonDataKeys = {};

function deepTraverse(jsonObject, parentKey) {
  for (const key in jsonObject) {
    if (typeof jsonObject[key] === "object" && jsonObject[key] !== null) {
      parentKey
        ? deepTraverse(jsonObject[key], `${parentKey}$${key}`)
        : deepTraverse(jsonObject[key], `${key}`);
    } else if (parentKey) {
      templateJsonDataKeys[`${parentKey}$${key}`] = jsonObject[key];
    }
  }
}

function equalTraverse(jsonKeys, jsonValue) {
  if (!jsonKeys) {
    return;
  }
  let key = undefined;
  if (Array.isArray(jsonKeys)) {
    if (jsonKeys.length > 0) {
      key = jsonKeys[0];
    }
  } else {
    key = jsonKeys;
  }
  if (!key) {
    return;
  }
  if (jsonValue[key] !== undefined) {
    equalTraverse(jsonKeys.slice(1, jsonKeys.length), jsonValue[key]);
  } else {
    jsonValue[key] = "{defaultValue}";
    console.log("ERROR key: ", key);
  }
}

fs.readFile("locales-template.json", "utf8", (error, templateJson) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  templateJsonData = JSON.parse(templateJson);
  deepTraverse(templateJsonData);

  for (const key of fileList) {
    let jsonData = fs.readFileSync(
      `${__dirname}/../src/locales/${key}.json`,
      "utf8",
    );
    jsonData = JSON.parse(jsonData);
    console.log("jsonData: ", `${__dirname}/../src/locales/${key}.json`);
    for (const jsonKey in templateJsonDataKeys) {
      const keyList = jsonKey.split("$");
      equalTraverse(keyList, jsonData);
    }
    fs.writeFileSync(
      `${__dirname}/../src/locales/${key}.json`,
      JSON.stringify(jsonData, null, 2),
    );
  }
});
