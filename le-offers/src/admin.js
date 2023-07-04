import { CheckboxControl } from '@wordpress/components';
import { registerBlockType } from "@wordpress/blocks";
import { truncateText } from "./utils";
import { LOCATIONS, HOLIDAY_TAGS, CAMPAIGN_TAGS } from "./constants";

registerBlockType( 'luxury-escapes-plugin/le-offers', 
{
  title: 'LE Offers',
  icon: 'index-card',
  category: 'layout',
  attributes: {
    placeIds: {
      type: [],
    },
    holidays: {
      type: [],
    },
    holidays2: {
      type: [],
    },
    holidays3: {
      type: [],
      default: [],
    },
    region: {
      type: 'string',
    },
  },
  edit: ( props ) => {
    const {
      className,
      attributes: { placeIds, holidays, holidays2, holidays3, region },
      setAttributes,
    } = props;

    return (
      <div className={className}>
        <>
          <label>Location</label>
          <hr className="divider" />
          <div className="checkbox-columns">
            {LOCATIONS.map(location => (
              <CheckboxControl
                label={truncateText(location.primaryText)}
                checked={placeIds.includes(location.placeId)}
                onChange={isChecked => {
                  if (isChecked) {
                    // If the checkbox was checked, add the holiday to the selected list
                    setAttributes({
                      placeIds: [...placeIds, location.placeId]
                    });
                  } else {
                    // If the checkbox was unchecked, remove the holiday from the selected list
                    setAttributes({
                      placeIds: placeIds.filter(h => h !== location.placeId)
                    });
                  }
                }}
              />
            ))}
          </div>
          <hr className="divider" />
        </>

        <>
          <label>Holiday</label>
          <hr className="divider" />
          <div className="checkbox-columns">
            {HOLIDAY_TAGS.map(holiday => (
              <CheckboxControl
                label={truncateText(holiday.name)}
                checked={holidays.includes(holiday.name)}
                onChange={isChecked => {
                  if (isChecked) {
                    // If the checkbox was checked, add the holiday to the selected list
                    setAttributes({ holidays: [...holidays, holiday.name] });
                  } else {
                    // If the checkbox was unchecked, remove the holiday from the selected list
                    setAttributes({
                      holidays: holidays.filter(h => h !== holiday.name)
                    });
                  }
                }}
              />
            ))}
          </div>
          <hr className="divider" />
        </>

        <>
          <label>Campaigns</label>
          <hr className="divider" />
          <div className="checkbox-columns">
            {CAMPAIGN_TAGS.map(campaign => (
              <CheckboxControl
                label={truncateText(campaign.name)}
                checked={campaigns.includes(campaign.name)}
                onChange={isChecked => {
                  if (isChecked) {
                    // If the checkbox was checked, add the holiday to the selected list
                    setAttributes({ campaigns: [...campaigns, campaign.name] });
                  } else {
                    // If the checkbox was unchecked, remove the holiday from the selected list
                    setAttributes({
                      campaigns: campaigns.filter(h => h !== campaign.name)
                    });
                  }
                }}
              />
            ))}
          </div>
          <hr className="divider" />
        </>

      </div>
    );
  },  save ( props ) {
      return null // This block is rendered on PHP. Search renderBlock
  }})