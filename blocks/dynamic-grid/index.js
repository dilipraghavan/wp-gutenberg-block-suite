import metadata from "./block.json";
import edit from "./edit";
import save from "./save";
import "./editor.scss";
import "./style.scss";

import { registerBlockType } from "@wordpress/blocks";

registerBlocktype(metadata.name, {
  ...metadata,
  edit,
  save,
});
