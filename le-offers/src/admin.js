import { registerBlockType } from "@wordpress/blocks";
import { CheckboxControl, SelectControl } from "@wordpress/components";
import { truncateText } from "./utils";
import { LOCATIONS, HOLIDAY_TAGS, CAMPAIGN_TAGS } from "./constants";

registerBlockType("luxury-escapes-plugin/le-offers", {
  title: "LE Offers",
  icon: "index-card",
  category: "layout",
  attributes: {
    placeIds: {
      type: [],
      default: []
    },
    holidays: {
      type: [],
      default: []
    },
    departure: {
      type: [],
      default: []
    },
    arrival: {
      type: [],
      default: []
    },
    campaigns: {
      type: [],
      default: []
    },
    region: {
      type: "string"
    }
  },
  edit: props => {
    const {
      className,
      attributes: { arrival, departure, campaigns },
      setAttributes
    } = props;

    return (
      <div className={className}>
        <>
          <SelectControl
            label="Departure"
            value={departure}
            options={LOCATIONS.map(location => ({ label: location.primaryText, value: location.placeId }))}
            onChange={(value) => setAttributes({ departure: value })}
          />
        </>
        <>
          <SelectControl
            label="Arrival"
            value={arrival}
            options={LOCATIONS.map(location => ({ label: location.primaryText, value: location.placeId }))}
            onChange={(value) => setAttributes({ arrival: value })}
          />
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
  },
  save(props) {
    return null; // This block is rendered on PHP. Search renderBlock
  }
});
