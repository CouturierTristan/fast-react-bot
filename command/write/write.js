"use strict";

const unicodeAlphabet = require("./unicode-alphabet");

const info = {
  name: "Write",
  command: "write",
  args: "word *",
  description: "Write a word using reactions on current channel last message",
};

const action = async (message, args) => {
  const messages = await message.channel.messages.fetch({ limit: 2 });
  message.delete();
  const lastMessage = messages.last();
  const mot = args[0];
  for (const c of mot) {
    lastMessage.react(unicodeAlphabet[c]);
  }
};

module.exports = {
  info,
  action,
};