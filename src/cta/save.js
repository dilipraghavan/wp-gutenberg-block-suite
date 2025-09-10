import { RichText, useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
  const { heading, body, buttonText, buttonUrl } = attributes;
  const blockProps = useBlockProps.save();
  return (
    <div {...blockProps}>
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
          target="_blank"
          rel="noopener noreferrer"
          href={buttonUrl ?? "#"}
          className="wp-block-wpsuite-cta__button"
        >
          {buttonText ?? ""}
        </a>
      )}
    </div>
  );
};

export default Save;
