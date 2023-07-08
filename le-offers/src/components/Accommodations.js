import { CheckboxControl } from "@wordpress/components";
import { truncateText } from "../utils";
import {
  HOTEL_OFFER_TYPES,
  LOCATIONS,
  HOLIDAY_TAGS,
  CAMPAIGN_TAGS
} from "../constants";

export default function Accommodations({
  className,
  attributes: { offerTypes, placeIds, holidays, campaigns },
  setAttributes
}) {
  return (
    <div className={className}>
      <>
        <label>Offer Type</label>
        <hr className="divider" />
        <div className="checkbox-columns">
          {HOTEL_OFFER_TYPES.map(offerType => (
            <CheckboxControl
              label={offerType.label}
              checked={offerTypes.includes(offerType.value)}
              onChange={isChecked => {
                if (isChecked) {
                  setAttributes({
                    offerTypes: [...offerTypes, offerType.value]
                  });
                } else {
                  setAttributes({
                    offerTypes: offerTypes.filter(h => h !== offerType.value)
                  });
                }
              }}
            />
          ))}
        </div>
        <hr className="divider" />
      </>

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
                  setAttributes({
                    placeIds: [...placeIds, location.placeId]
                  });
                } else {
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
                  setAttributes({ holidays: [...holidays, holiday.name] });
                } else {
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
                  setAttributes({ campaigns: [...campaigns, campaign.name] });
                } else {
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
