"use strict"
const readline = require("readline_sync");
const word1 = "abc";
const word2 = "def";

let merge = function (word1, word2) {
    let wordfinal = "";
    let length = 0;
    if (word1.length >= word2.length) {
        length = word1.length;
    } else {
        length = word2.length;
    }
    for (let i = 0; i < length; i++) {
        if (word1.length = word2.length) {
            wordfinal += word1[i] + word2[i];
        }
        if (word1.length > word2.length) {
            if (word2 != "") {
                wordfinal += word1[i] + word2[i]
            } else {
                wordfinal += word1[i];
            }
        }
        if (word1.length < word2.length) {
            if (word1 != "") {
                wordfinal += word1[i] + word2[i]
            } else {
                wordfinal += word1[i];
            }

        }
    }
}