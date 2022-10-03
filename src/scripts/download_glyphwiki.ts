import download from "download";

const DOWNLOAD_OPTIONS = {
  extract: true,
};

const GLYPHWIKI_DUMP_URL = "http://glyphwiki.org/dump.tar.gz";
const DOWNLOAD_GLYPHWIKI_DUMP_TO = "data/glyphwiki";

download(GLYPHWIKI_DUMP_URL, DOWNLOAD_GLYPHWIKI_DUMP_TO, DOWNLOAD_OPTIONS);
