import { registerBlockType } from "@wordpress/blocks";
import { CheckboxControl } from "@wordpress/components";
import { truncateText } from "./utils";
import {
  OFFER_TYPES,
  LOCATIONS,
  HOLIDAY_TAGS,
  CAMPAIGN_TAGS
} from "./constants";

registerBlockType("luxury-escapes-plugin/le-offers", {
  title: "LE Offers",
  icon: "index-card",
  category: "layout",
  attributes: {
    offerTypes: {
      type: [],
      default: []
    },
    placeIds: {
      type: [],
      default: []
    },
    holidays: {
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
      attributes: { offerTypes, placeIds, holidays, campaigns },
      setAttributes
    } = props;

    // const [locations, setLocations] = useState([]);
    // const [holidayTypes, setHolidayTypes] = useState([]);

    // useEffect(() => {
    //   fetch('https://api.luxuryescapes.com/api/search/hotel/v1/places/trending?region=AU&brand=luxuryescapes')
    //     .then(response => response.json())
    //     .then(data => setLocations(data.result));
    // }, []);
    //
    // useEffect(() => {
    //   fetch('https://api.luxuryescapes.com/api/search/hotel/v1/popular/holiday-types?region=AU&brand=luxuryescapes&limit=100')
    //     .then(response => response.json())
    //     .then(data => setHolidayTypes(data.result));
    // }, []);

    return (
      <div className={className}>
        <>
          <label>Offer Type</label>
          <hr className="divider" />
          <div className="checkbox-columns">
            {OFFER_TYPES.map(offerType => (
              <CheckboxControl
                label={offerType}
                checked={offerTypes.includes(offerType)}
                onChange={isChecked => {
                  if (isChecked) {
                    setAttributes({
                      offerTypes: [...offerTypes, offerType]
                    });
                  } else {
                    setAttributes({
                      offerTypes: offerTypes.filter(h => h !== offerType)
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
  },
  save(props) {
    return null; // This block is rendered on PHP. Search renderBlock
  }
});
