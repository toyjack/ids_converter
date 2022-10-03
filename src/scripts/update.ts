import { readFileSync, writeFileSync } from "fs";

interface GlyphWikiRecord {
  name: string;
  related: string;
  data: string;
}

const DOWNLOAD_GLYPHWIKI_DUMP_TO = "data/glyphwiki";
const glyphwiki_all: GlyphWikiRecord[] = [];

console.log("Making GlyphWiki database...");

const content = readFileSync(
  DOWNLOAD_GLYPHWIKI_DUMP_TO + "/dump_newest_only.txt",
  "utf8"
);

const lines = content.split("\n");

for (const line of lines) {
  // make glyphwiki all data json
  const cells = line.split("|").map((e) => e.trim());

  if (cells.length === 3) {
    glyphwiki_all.push({
      name: cells[0],
      related: cells[1],
      data: cells[2],
    });
  }
}

const jsonData = JSON.stringify(glyphwiki_all);

writeFileSync("data/glyphwiki.json", jsonData, "utf8");

console.log("Done!");
