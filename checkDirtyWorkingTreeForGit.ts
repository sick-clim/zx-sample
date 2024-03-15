#!/usr/bin/env -S npx tsx
import { $ } from "zx";

const status = await $`git status --porcelain`

console.log("Start")
if (status.stdout.length > 0) {
    throw new Error("Git working tree is dirty.")
}
console.log("End")
