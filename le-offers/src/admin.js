import { registerBlockType } from "@wordpress/blocks";
import { RadioControl } from "@wordpress/components";
// import { useState } from "@wordpress/element";
import Accommodations from "./components/Accommodations";
import Cruises from "./components/Cruises";
import {
  OFFER_VARIANTS,
  LOCATIONS,
  ACCOMMODATION_OFFER_TYPE,
  CRUISE_OFFER_TYPE
} from "./constants";

registerBlockType("luxury-escapes-plugin/le-offers", {
  title: "LE Offers",
  icon: "index-card",
  category: "layout",
  attributes: {
    offerVariant: {
      type: "string"
    },
    offerTypes: {
      type: "array",
      default: []
    },
    placeIds: {
      type: "array",
      default: []
    },
    holidays: {
      type: "array",
      default: []
    },
    campaigns: {
      type: "array",
      default: []
    },
    departure: {
      type: "string"
    },
    arrival: {
      type: "string"
    }
  },
  edit: props => {
    const {
      className,
      attributes: { offerVariant },
      setAttributes
    } = props;

    // TODO: use this logic for fetching tags once we get rid of CORS errors
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
        <label>Offer Variant</label>
        <hr className="divider" />
        <div className="le-admin-offer-type-wrapper">
          <RadioControl
            selected={offerVariant}
            options={OFFER_VARIANTS}
            onChange={option => setAttributes({ offerVariant: option })}
          />
        </div>
        <hr className="divider" />

        {offerVariant === ACCOMMODATION_OFFER_TYPE && (
          <Accommodations {...props} />
        )}
        {offerVariant === CRUISE_OFFER_TYPE && <Cruises {...props} />}
      </div>
    );
  },
  save(props) {
    return null; // This block is rendered on PHP. Search renderBlock
  }
});
