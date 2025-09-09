import { useSelect } from "@wordpress/data";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  RangeControl,
  Spinner,
  Placeholder,
} from "@wordpress/components";
import { RawHTML } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

const Edit = ({ attributes, setAttributes }) => {
  const { postType, count, columns } = attributes;
  const blockProps = useBlockProps({
    className: `wpsuite-grid columns-${columns}`,
  });

  const posts = useSelect(
    (select) =>
      select("core").getEntityRecords("postType", postType, {
        per_page: count,
        _fields: ["id", "title", "excerpt", "link", "featured_media"],
      }),
    [postType, count]
  );

  let content;
  if (!posts) {
    content = <Spinner />;
  } else if (posts.length === 0) {
    content = (
      <Placeholder>
        {__("No items found for this post type.", "wp-gutenberg-block-suite")}
      </Placeholder>
    );
  } else {
    content = (
      <div role="list" aria-live="polite">
        {posts.map((post) => (
          <article key={post.id} className="card" role="listitem">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <RawHTML>{post.title?.rendered || ""}</RawHTML>
            </a>
            <RawHTML>{post.excerpt?.rendered || ""}</RawHTML>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Grid Settings", "wp-gutenberg-block-suite")}>
          <SelectControl
            label={__("Post Type", "wp-gutenberg-block-suite")}
            value={postType}
            options={[
              { label: "Posts", value: "post" },
              { label: "Pages", value: "page" },
            ]}
            onChange={(newVal) => setAttributes({ postType: newVal })}
          />
          <RangeControl
            label={__("Number of Items", "wp-gutenberg-block-suite")}
            value={count}
            onChange={(newVal) =>
              newVal == null
                ? null
                : setAttributes({
                    count: Math.min(Math.max(newVal, 1), 12),
                  })
            }
            min={1}
            max={12}
          />
          <RangeControl
            label={__("Number of Columns", "wp-gutenberg-block-suite")}
            value={columns}
            onChange={(newVal) =>
              newVal == null
                ? null
                : setAttributes({
                    columns: Math.min(Math.max(newVal, 1), 4),
                  })
            }
            min={1}
            max={4}
          />
        </PanelBody>
      </InspectorControls>
      {content}
    </div>
  );
};

export default Edit;
