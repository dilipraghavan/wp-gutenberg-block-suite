import { RichText, useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
  const { heading, body, buttonText, buttonUrl } = attributes;
  const blockProps = useBlockProps.save();
  return (
    <div {...blockProps}>
      <div className="wp-block-wpsuite-cta__inner">
        {heading && (
          <RichText.Content
            tagName="h2"
            value={heading}
            className="wp-block-wpsuite-cta__heading"
          />
        )}
        {body && (
          <RichText.Content
            tagName="p"
            value={body}
            className="wp-block-wpsuite-cta__body"
          />
        )}
        {(buttonUrl || buttonText) && (
          <a
            rel="noopener noreferrer"
            href={buttonUrl ?? "#"}
            className="wp-block-wpsuite-cta__button"
          >
            {buttonText ?? ""}
          </a>
        )}
      </div>
    </div>
  );
};

export default Save;
