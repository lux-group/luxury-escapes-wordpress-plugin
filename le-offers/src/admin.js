import { registerBlockType } from '@wordpress/blocks';
import { Button, TextControl } from '@wordpress/components';

registerBlockType( 'luxury-escapes-plugin/le-offers', {
  title: 'LE Offers',
  icon: 'index-card',
  category: 'layout',
  attributes: {
    placeId: {
      type: 'string',
    },
    region: {
      type: 'string',
    },
    brand: {
      type: 'string',
    },
  },
  edit: ( props ) => {
    const {
      className,
      attributes: { placeId, region, brand },
      setAttributes,
    } = props;

    // TODO: make those fields required
    return (
      <div className={ className }>
        <TextControl
          label="Place ID"
          value={placeId}
          onChange={(value) => setAttributes({ placeId: value })}
        />
        <TextControl
          label="Region"
          value={region}
          onChange={(value) => setAttributes({ region: value })}
        />
        <TextControl
          label="Brand"
          value={brand}
          onChange={(value) => setAttributes({ brand: value })}
        />
      </div>
    );
  },
  save ( props ) {
      return null // This block is rendered on PHP. Search renderBlock
  },
} );
