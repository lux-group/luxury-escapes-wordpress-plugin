import { CheckboxControl, SelectControl } from "@wordpress/components";
import { truncateText } from "../utils";
import { LOCATIONS, CRUISE_CAMPAIGN_TAGS } from "../constants";

export default function Accommodations({
  className,
  attributes: { arrival, departure, campaigns },
  setAttributes
}) {
  return (
    <div className={className}>
      <>
        <SelectControl
          label="Departure"
          value={departure}
          options={[
            { label: "Select an arrival location", value: "" },
            ...LOCATIONS.map(location => ({
              label: location.primaryText,
              value: location.placeId
            }))
          ]}
          onChange={value => setAttributes({ departure: value })}
        />
      </>
      <>
        <SelectControl
          label="Arrival"
          value={arrival}
          options={[
            { label: "Select an arrival location", value: "" },
            ...LOCATIONS.map(location => ({
              label: location.primaryText,
              value: location.placeId
            }))
          ]}
          onChange={value => setAttributes({ arrival: value })}
        />
      </>
      <>
        <label>Campaigns</label>
        <hr className="divider" />
        <div className="checkbox-columns">
          {CRUISE_CAMPAIGN_TAGS.map(campaign => (
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
}
