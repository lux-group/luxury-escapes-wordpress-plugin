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
  },
  edit: ( props ) => {
    const {
      className,
      attributes: { placeId },
      setAttributes,
    } = props;

    return (
      <div className={ className }>
        <TextControl
          value={placeId}
          onChange={(value) => setAttributes({ placeId: value })}
        />
      </div>
    );
  },
  save ( props ) {
      return null // This block is rendered on PHP. Search renderBlock
  },
} );
