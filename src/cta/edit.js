import {
  useBlockProps,
  InspectorControls,
  URLInput,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const Edit = ({ attributes, setAttributes }) => {
  const { heading, body, buttonText, buttonUrl } = attributes;
  const blockProps = useBlockProps({ className: "wp-block-wpsuite-cta" });

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Button Settings", "wp-gutenberg-block-suite")}>
          <TextControl
            label={__("Button text", "wp-gutenberg-block-suite")}
            value={buttonText}
            onChange={(val) => setAttributes({ buttonText: val })}
          />
          <URLInput
            value={buttonUrl}
            onChange={(val) => setAttributes({ buttonUrl: val })}
            placeholder={__("Button CTA link", "wp-gutenberg-block-suite")}
          />
        </PanelBody>
      </InspectorControls>
      <RichText
        className="wp-block-wpsuite-cta__heading"
        tagName="h2"
        placeholder={__("CTA Heading...", "wp-gutenberg-block-suite")}
        value={heading}
        onChange={(val) => setAttributes({ heading: val })}
      />
      <RichText
        className="wp-block-wpsuite-cta__body"
        tagName="p"
        placeholder={__("CTA Message...", "wp-gutenberg-block-suite")}
        value={body}
        onChange={(val) => setAttributes({ body: val })}
      />
      {buttonUrl ? (
        <a href={buttonUrl} className="wp-block-wpsuite-cta__button">
          {buttonText}
        </a>
      ) : (
        <span aria-disabled="true"></span>
      )}
    </div>
  );
};

export default Edit;
