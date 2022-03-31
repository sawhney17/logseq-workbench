import '@logseq/libs';
import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin';
  
let settings: SettingSchemaDesc[] = [
  {
    key: "nameForPage1",
    type: "string",
    title: "Enter first page name",
    description: "Enter the name of the first page",
    default: ""
  },
  {
    key: "keyForPage1",
    type: "string",
    title: "Shortcut for Page 1",
    description: "Enter desired shortcut for page 1",
    default: ""
  },
  {
    key: "nameForPage2",
    type: "string",
    title: "Enter second page name",
    description: "Enter the name of the second page",
    default: ""
  },
  {
    key: "keyForPage2",
    type: "string",
    title: "Shortcut for Page 2",
    description: "Enter desired shortcut for page 2",
    default: ""
  },
  { key: "nameForPage3",
    type: "string",
    title: "Enter third page name",
    description: "Enter the name of the third page",
    default: ""
  },
  {
    key: "keyForPage3",
    type: "string",
    title: "Shortcut for Page 3",
    description: "Enter desired shortcut for page 3",
    default: ""
  }, 
  ]
  logseq.useSettingsSchema(settings)
const main = async () => {
  console.log('plugin loaded');
  
//if logseq settings for page 1 name and key are both not empty
  if (logseq.settings.nameForPage1 != "" && logseq.settings.keyForPage1 != "") {
    logseq.App.registerCommandPalette({
      key: `goTo${logseq.settings.nameForPage1}`,
      label: `Go to ${logseq.settings.nameForPage1}`,
      keybinding: {
        binding: "logseq.settings.keyForPage1",
      }
    }, () => {
      logseq.App.pushState("page", logseq.settings.nameForPage1);
    });
  }
//if logseq settings for page 2 name and key are both not empty
  if (logseq.settings.nameForPage2 != "" && logseq.settings.keyForPage2 != "") {
    logseq.App.registerCommandPalette({
      key: `goTo${logseq.settings.nameForPage2}`,
      label: `Go to ${logseq.settings.nameForPage2}`,
      keybinding: {
        binding: "logseq.settings.keyForPage2",
      }
    }, () => {
      logseq.App.pushState("page", logseq.settings.nameForPage2);
    });
  }
//if logseq settings for page 3 name and key are both not empty
  if (logseq.settings.nameForPage3 != "" && logseq.settings.keyForPage3 != "") {
    logseq.App.registerCommandPalette({
      key: `goTo${logseq.settings.nameForPage3}`,
      label: `Go to ${logseq.settings.nameForPage3}`,
      keybinding: {
        binding: "logseq.settings.keyForPage3",
      }
    }, () => {
      logseq.App.pushState("page", logseq.settings.nameForPage3);
    });
  }
}
logseq.ready(main).catch(console.error);
