import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, SelectControl, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Grid Settings", "wp-gutenberg-block-suite")}>
          <SelectControl
            label={__("Post Type", "wp-gutenberg-block-suite")}
            value={attributes.postType}
            options={[
              { label: "Posts", value: "post" },
              { label: "Pages", value: "page" },
            ]}
            onChange={(newVal) => setAttributes({ postType: newVal })}
          />
          <RangeControl
            label={__("Number of Items", "wp-gutenberg-block-suite")}
            value={attributes.count}
            onChange={(newVal) => setAttributes({ count: newVal })}
            min={1}
            max={12}
          />
          <RangeControl
            label={__("Number of Columns", "wp-gutenberg-block-suite")}
            value={attributes.columns}
            onChange={(newVal) => setAttributes({ columns: newVal })}
            min={1}
            max={4}
          />
        </PanelBody>
      </InspectorControls>
      <div>Grid preview placeholder.</div>
    </div>
  );
};

export default Edit;
