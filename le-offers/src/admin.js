import { FormTokenField, SelectControl, CheckboxControl, TextControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

const mockLocationData = {
  "status": 200,
  "result": [
    {
      "placeId": "le_64930b7151b6bc3e289f37d5da62ac9f",
      "primaryText": "Bali",
      "abbreviation": "Bali",
      "saveUpTo": 67
    },
    {
      "placeId": "le_72b32a1f754ba1c09b3695e0cb6cde7f",
      "primaryText": "Fiji",
      "abbreviation": "Fiji",
      "saveUpTo": 43
    },
    {
      "placeId": "le_d3d9446802a44259755d38e6d163e820",
      "primaryText": "Australia",
      "abbreviation": "Australia",
      "saveUpTo": 74
    },
    {
      "placeId": "le_8f85517967795eeef66c225f7883bdcb",
      "primaryText": "Thailand",
      "abbreviation": "Thailand",
      "saveUpTo": 68
    },
    {
      "placeId": "le_d41d8cd98f00b204e9800998ecf8427e",
      "primaryText": "Anywhere",
      "abbreviation": "Anywhere",
      "saveUpTo": 85
    },
    {
      "placeId": "le_15fa44474c92da27cf2125373356db4c",
      "primaryText": "Melbourne",
      "abbreviation": "Melbourne",
      "saveUpTo": 62
    },
    {
      "placeId": "le_678c61ac5b4f91ca86e112fc50e63766",
      "primaryText": "Sydney",
      "abbreviation": "Sydney",
      "saveUpTo": 57
    },
    {
      "placeId": "le_bd4c9ab730f5513206b999ec0d90d1fb",
      "primaryText": "Singapore",
      "abbreviation": "Singapore",
      "saveUpTo": 0
    },
    {
      "placeId": "le_2723d092b63885e0d7c260cc007e8b9d",
      "primaryText": "Maldives",
      "abbreviation": "Maldives",
      "saveUpTo": 60
    },
    {
      "placeId": "le_bac732346917b0a1231354ef55faf00a",
      "primaryText": "Gold Coast",
      "abbreviation": "Gold Coast",
      "saveUpTo": 39
    },
    {
      "placeId": "le_d47bb339212ddfab0fadd99d492a5fc3",
      "primaryText": "Phuket",
      "abbreviation": "Phuket",
      "saveUpTo": 68
    },
    {
      "placeId": "le_3d3621cee6f49e93a34f3f0f654ab41a",
      "primaryText": "Queensland",
      "abbreviation": "Queensland",
      "saveUpTo": 49
    },
    {
      "placeId": "le_dc2afc2240bd3cd5067a740a2cb17399",
      "primaryText": "Port Douglas",
      "abbreviation": "Port Douglas",
      "saveUpTo": 0
    },
    {
      "placeId": "le_790d9f1f52e10ef90ede8efcf7f3c078",
      "primaryText": "Seminyak",
      "abbreviation": "Seminyak",
      "saveUpTo": 65
    },
    {
      "placeId": "le_a597e50502f5ff68e3e25b9114205d4a",
      "primaryText": "Vietnam",
      "abbreviation": "Vietnam",
      "saveUpTo": 71
    },
    {
      "placeId": "le_7647966b7343c29048673252e490f736",
      "primaryText": "Japan",
      "abbreviation": "Japan",
      "saveUpTo": 64
    },
    {
      "placeId": "le_b7218568a1335addb2966d47e1fe939c",
      "primaryText": "Cairns",
      "abbreviation": "Cairns",
      "saveUpTo": 0
    },
    {
      "placeId": "le_979d472a84804b9f647bc185a877a8b5",
      "primaryText": "Hawaii",
      "abbreviation": "Hawaii",
      "saveUpTo": 52
    },
    {
      "placeId": "le_8337a7365ec44f3d65434a5ea4d73d17",
      "primaryText": "New South Wales",
      "abbreviation": "New South Wales",
      "saveUpTo": 57
    },
    {
      "placeId": "le_b96d145f6c31e35755f4a6841574ba37",
      "primaryText": "Brisbane",
      "abbreviation": "Brisbane",
      "saveUpTo": 49
    },
    {
      "placeId": "le_28dd2c7955ce926456240b2ff0100bde",
      "primaryText": "Hong Kong SAR",
      "abbreviation": "Hong Kong SAR",
      "saveUpTo": 85
    },
    {
      "placeId": "le_a55472983efa2e239b315de91576d1d3",
      "primaryText": "Nusa Dua",
      "abbreviation": "Nusa Dua",
      "saveUpTo": 67
    },
    {
      "placeId": "le_864d8b8a2daebb7269e0882b0bfb6232",
      "primaryText": "Hunter Valley",
      "abbreviation": "Hunter Valley",
      "saveUpTo": 0
    },
    {
      "placeId": "le_7c27cf9f8fe09724bb754e474610eb0e",
      "primaryText": "Perth",
      "abbreviation": "Perth",
      "saveUpTo": 0
    },
    {
      "placeId": "le_5781a2637b476d781eb3134581b32044",
      "primaryText": "Victoria",
      "abbreviation": "Victoria",
      "saveUpTo": 62
    },
    {
      "placeId": "le_3fb451ca2e89b3a13095b059d8705b15",
      "primaryText": "Hamilton Island",
      "abbreviation": "Hamilton Island",
      "saveUpTo": 0
    },
    {
      "placeId": "le_58a2fc6ed39fd083f55d4182bf88826d",
      "primaryText": "Vanuatu",
      "abbreviation": "Vanuatu",
      "saveUpTo": 0
    },
    {
      "placeId": "le_43baa6762fa81bb43b39c62553b2970d",
      "primaryText": "Dubai",
      "abbreviation": "Dubai",
      "saveUpTo": 71
    },
    {
      "placeId": "le_ff7aa1f9b4062bfee0f99a0453506f1b",
      "primaryText": "Bangkok",
      "abbreviation": "Bangkok",
      "saveUpTo": 0
    },
    {
      "placeId": "le_f4c2c73d7fe5eb38fd83d32a61604247",
      "primaryText": "Adelaide",
      "abbreviation": "Adelaide",
      "saveUpTo": 40
    },
    {
      "placeId": "le_7af6d6117d13124fd3e00f5cb5f04400",
      "primaryText": "Koh Samui",
      "abbreviation": "Koh Samui",
      "saveUpTo": 62
    },
    {
      "placeId": "le_3416a75f4cea9109507cacd8e2f2aefc",
      "primaryText": "Cook Islands",
      "abbreviation": "Cook Islands",
      "saveUpTo": 0
    },
    {
      "placeId": "le_66ff0e7c30438d414ff0a941b759f114",
      "primaryText": "London",
      "abbreviation": "London",
      "saveUpTo": 44
    },
    {
      "placeId": "le_7f7ed8ecfca9e17696ff654508efd86a",
      "primaryText": "Ubud",
      "abbreviation": "Ubud",
      "saveUpTo": 60
    },
    {
      "placeId": "le_9fc3d7152ba9336a670e36d0ed79bc43",
      "primaryText": "New Zealand",
      "abbreviation": "New Zealand",
      "saveUpTo": 68
    },
    {
      "placeId": "le_1608659ea7ec15440fa87763b3f5d700",
      "primaryText": "Tokyo",
      "abbreviation": "Tokyo",
      "saveUpTo": 48
    },
    {
      "placeId": "le_21bf8d519b1e67cd0b9d4b50b55fccdd",
      "primaryText": "Waikiki",
      "abbreviation": "Waikiki",
      "saveUpTo": 52
    },
    {
      "placeId": "le_a22d33b4a00c165507a61f3bed4b5149",
      "primaryText": "Koh Samui Islands",
      "abbreviation": "Koh Samui Islands",
      "saveUpTo": 62
    },
    {
      "placeId": "le_edd47ba7fa1bbff38973841c9cd0733c",
      "primaryText": "Tasmania",
      "abbreviation": "Tasmania",
      "saveUpTo": 48
    },
    {
      "placeId": "le_b1046173ab29afd97535264003faaf7f",
      "primaryText": "Sunshine Coast Region",
      "abbreviation": "Sunshine Coast Region",
      "saveUpTo": 49
    },
    {
      "placeId": "le_5a4773830c5a9191a6bd6c301d060ad2",
      "primaryText": "Queenstown",
      "abbreviation": "Queenstown",
      "saveUpTo": 0
    },
    {
      "placeId": "le_fc3cf953b111aab37fc37c64502b346a",
      "primaryText": "Palm Cove",
      "abbreviation": "Palm Cove",
      "saveUpTo": 0
    },
    {
      "placeId": "le_e14e1364b73cc4878fe29890a4c29b7e",
      "primaryText": "Noosa",
      "abbreviation": "Noosa",
      "saveUpTo": 24
    },
    {
      "placeId": "le_02785edd54b40735ce22cea83094508a",
      "primaryText": "Whitsundays",
      "abbreviation": "Whitsundays",
      "saveUpTo": 39
    },
    {
      "placeId": "le_9eaae23a6eaea01a1d6111023c69f199",
      "primaryText": "Ho Chi Minh City",
      "abbreviation": "Ho Chi Minh City",
      "saveUpTo": 71
    },
    {
      "placeId": "le_4371d2566cbf4eb16e1cda1ce268c63c",
      "primaryText": "Blue Mountains",
      "abbreviation": "Blue Mountains",
      "saveUpTo": 0
    },
    {
      "placeId": "le_b573c52d599a979ba8c16e9789bb8014",
      "primaryText": "Hobart",
      "abbreviation": "Hobart",
      "saveUpTo": 48
    },
    {
      "placeId": "le_a3c65c2974270fd093ee8a9bf8ae7d0b",
      "primaryText": "Malaysia",
      "abbreviation": "Malaysia",
      "saveUpTo": 60
    },
    {
      "placeId": "le_425f0cea87a40c5a8860e3db7c918c4e",
      "primaryText": "Canggu",
      "abbreviation": "Canggu",
      "saveUpTo": 0
    },
    {
      "placeId": "le_da399f1206873fd1a00cc9d010d54b86",
      "primaryText": "Central Singapore",
      "abbreviation": "Central Singapore",
      "saveUpTo": 0
    },
    {
      "placeId": "le_cb3f7087c987ceff5b306d4ff89f5db6",
      "primaryText": "Paris",
      "abbreviation": "Paris",
      "saveUpTo": 0
    },
    {
      "placeId": "le_5f169380fd43eadac8a9f1423aaa9ac8",
      "primaryText": "Canberra",
      "abbreviation": "Canberra",
      "saveUpTo": 0
    },
    {
      "placeId": "le_e049cdf2bfe4dd1d825ada227d1479f2",
      "primaryText": "Sentosa Island",
      "abbreviation": "Sentosa Island",
      "saveUpTo": 0
    },
    {
      "placeId": "le_3b8592097e6f88f678a8983da586251d",
      "primaryText": "Byron Bay",
      "abbreviation": "Byron Bay",
      "saveUpTo": 0
    },
    {
      "placeId": "le_f3ad1c493ba61ad63bb43d6947f42d95",
      "primaryText": "Khao Lak",
      "abbreviation": "Khao Lak",
      "saveUpTo": 59
    },
    {
      "placeId": "le_3f08f0e6992e8d712984a799e6681209",
      "primaryText": "Darwin",
      "abbreviation": "Darwin",
      "saveUpTo": 0
    },
    {
      "placeId": "le_f6c8eb0a04b4edf33a261d7e3a984bcc",
      "primaryText": "Hoi An",
      "abbreviation": "Hoi An",
      "saveUpTo": 0
    },
    {
      "placeId": "le_2b24d495052a8ce66358eb576b8912c8",
      "primaryText": "Philippines",
      "abbreviation": "Philippines",
      "saveUpTo": 0
    },
    {
      "placeId": "le_1ada7faf229425b786d87f7d9d5d43f2",
      "primaryText": "New York",
      "abbreviation": "New York",
      "saveUpTo": 54
    },
    {
      "placeId": "le_e66c5f547fc000b0e4894e2b7833df92",
      "primaryText": "Noosa Heads",
      "abbreviation": "Noosa Heads",
      "saveUpTo": 0
    },
    {
      "placeId": "le_7bad3bd3f0f97b500e337b6dd91746ca",
      "primaryText": "Surfers Paradise",
      "abbreviation": "Surfers Paradise",
      "saveUpTo": 0
    },
    {
      "placeId": "le_287643040f414c7ab7860c1b3f841149",
      "primaryText": "Rarotonga",
      "abbreviation": "Rarotonga",
      "saveUpTo": 0
    },
    {
      "placeId": "le_9061fde6d599f5ffe8612f853db8d1e3",
      "primaryText": "Sanur",
      "abbreviation": "Sanur",
      "saveUpTo": 0
    },
    {
      "placeId": "le_93db85ed909c13838ff95ccfa94cebd9",
      "primaryText": "Italy",
      "abbreviation": "Italy",
      "saveUpTo": 0
    },
    {
      "placeId": "le_a9c53c0f1fe23357e3ba6a078ddb0990",
      "primaryText": "Uluwatu",
      "abbreviation": "Uluwatu",
      "saveUpTo": 49
    },
    {
      "placeId": "le_1afa34a7f984eeabdbb0a7d494132ee5",
      "primaryText": "New Caledonia",
      "abbreviation": "New Caledonia",
      "saveUpTo": 0
    },
    {
      "placeId": "le_0f34314d2dd0c1b9311cb8f40eb4f255",
      "primaryText": "Lombok",
      "abbreviation": "Lombok",
      "saveUpTo": 0
    },
    {
      "placeId": "le_838ebb25ec2c4b61547262c446da2b6a",
      "primaryText": "Santorini",
      "abbreviation": "Santorini",
      "saveUpTo": 71
    },
    {
      "placeId": "le_f5b2c7d542d5cc6eecba73128445ef53",
      "primaryText": "Hong Kong",
      "abbreviation": "Hong Kong",
      "saveUpTo": 85
    },
    {
      "placeId": "le_735b90b4568125ed6c3f678819b6e058",
      "primaryText": "Greece",
      "abbreviation": "Greece",
      "saveUpTo": 71
    },
    {
      "placeId": "le_5878a7ab84fb43402106c575658472fa",
      "primaryText": "Sri Lanka",
      "abbreviation": "Sri Lanka",
      "saveUpTo": 0
    },
    {
      "placeId": "le_4311359ed4969e8401880e3c1836fbe1",
      "primaryText": "Da Nang",
      "abbreviation": "Da Nang",
      "saveUpTo": 0
    },
    {
      "placeId": "le_a8697c7e6e7988b29a9de094b8d554cc",
      "primaryText": "South Pacific",
      "abbreviation": "South Pacific",
      "saveUpTo": 43
    },
    {
      "placeId": "le_f243f5a39d3b7ef531788ff07ea1ca58",
      "primaryText": "Kuala Lumpur",
      "abbreviation": "Kuala Lumpur",
      "saveUpTo": 60
    },
    {
      "placeId": "le_7499b49343dc7f06c446c9fadbce53b0",
      "primaryText": "Denarau Island",
      "abbreviation": "Denarau Island",
      "saveUpTo": 43
    },
    {
      "placeId": "le_82680bfec0fa08346c1b10d30a3e3d4a",
      "primaryText": "Western Australia",
      "abbreviation": "Western Australia",
      "saveUpTo": 74
    },
    {
      "placeId": "le_0663a4ddceacb40b095eda264a85f15c",
      "primaryText": "Hanoi",
      "abbreviation": "Hanoi",
      "saveUpTo": 0
    },
    {
      "placeId": "le_e5d100c6a4cfabdcbc5d6b9841de87d9",
      "primaryText": "Airlie Beach",
      "abbreviation": "Airlie Beach",
      "saveUpTo": 0
    },
    {
      "placeId": "le_0c1b1762276617d247b7d468efd1a6da",
      "primaryText": "Broadbeach",
      "abbreviation": "Broadbeach",
      "saveUpTo": 39
    },
    {
      "placeId": "le_12767faf1bf8cafc7594430586c558c2",
      "primaryText": "Europe",
      "abbreviation": "Europe",
      "saveUpTo": 58
    },
    {
      "placeId": "le_7ce1c7820dab2548c92188d58ddc4d0a",
      "primaryText": "Cairns and Barrier Reef",
      "abbreviation": "Cairns and Barrier Reef",
      "saveUpTo": 0
    },
    {
      "placeId": "le_01bdad659f914e3f71ddd761821bd6a9",
      "primaryText": "Legian",
      "abbreviation": "Legian",
      "saveUpTo": 0
    },
    {
      "placeId": "le_2d405b367158e3f12d7c1e31a96b3af3",
      "primaryText": "Langkawi",
      "abbreviation": "Langkawi",
      "saveUpTo": 52
    },
    {
      "placeId": "le_83fba92646fd4b0c7d8995bf405214c8",
      "primaryText": "Broome",
      "abbreviation": "Broome",
      "saveUpTo": 0
    },
    {
      "placeId": "le_079230e29195cac1ce62e737740797a0",
      "primaryText": "Los Angeles",
      "abbreviation": "Los Angeles",
      "saveUpTo": 0
    },
    {
      "placeId": "le_0647bee49f75f9d4fd2e210cc44352eb",
      "primaryText": "Patong",
      "abbreviation": "Patong",
      "saveUpTo": 0
    },
    {
      "placeId": "le_edab64948fd0fb98f4662e74826352c2",
      "primaryText": "Mooloolaba",
      "abbreviation": "Mooloolaba",
      "saveUpTo": 0
    },
    {
      "placeId": "le_832d851fd4d8851affa0b77077f5b4d6",
      "primaryText": "Rome",
      "abbreviation": "Rome",
      "saveUpTo": 0
    },
    {
      "placeId": "le_66339aeaeac3d911af379044c9624005",
      "primaryText": "Lembongan Island",
      "abbreviation": "Lembongan Island",
      "saveUpTo": 0
    },
    {
      "placeId": "le_464adf7b911508701f4c4e70eab19a6e",
      "primaryText": "Auckland",
      "abbreviation": "Auckland",
      "saveUpTo": 63
    },
    {
      "placeId": "le_9dbe4863a67a09ce5f63136c2773b7a8",
      "primaryText": "Phuket Island",
      "abbreviation": "Phuket Island",
      "saveUpTo": 68
    },
    {
      "placeId": "le_32530ba0f5faff63a2f1ccb9c1bc90fc",
      "primaryText": "Melbourne Central Business District",
      "abbreviation": "Melbourne CBD",
      "saveUpTo": 62
    },
    {
      "placeId": "le_8a146f1a3da4700cbf03cdc55e2daae6",
      "primaryText": "Honolulu",
      "abbreviation": "Honolulu",
      "saveUpTo": 52
    },
    {
      "placeId": "le_77a4a0e5a3bdfee80c9eff1420165977",
      "primaryText": "Mornington Peninsula",
      "abbreviation": "Mornington Peninsula",
      "saveUpTo": 53
    },
    {
      "placeId": "le_11e381f4d4acad450d06e096f3b99703",
      "primaryText": "Brisbane City",
      "abbreviation": "Brisbane City",
      "saveUpTo": 49
    },
    {
      "placeId": "le_2a79ea27c279e471f4d180b08d62b00a",
      "primaryText": "Samoa",
      "abbreviation": "Samoa",
      "saveUpTo": 0
    },
    {
      "placeId": "le_324d1d5faac07d0c5ae13c2213b84ea9",
      "primaryText": "Las Vegas",
      "abbreviation": "Las Vegas",
      "saveUpTo": 0
    },
    {
      "placeId": "le_73e3d45279e760d4f0f1642801549015",
      "primaryText": "Margaret River Wine Region",
      "abbreviation": "Margaret River Wine Region",
      "saveUpTo": 74
    },
    {
      "placeId": "le_af15ce7cbd279b1a769d85d1540a5073",
      "primaryText": "Barcelona",
      "abbreviation": "Barcelona",
      "saveUpTo": 0
    },
    {
      "placeId": "le_5186b5eb83798a2a7a0bec02e7e95c5d",
      "primaryText": "Port Stephens",
      "abbreviation": "Port Stephens",
      "saveUpTo": 0
    }
  ]
}

const mockHolidayData = {
  "status": 200,
  "result": [
    {
      "name": "Sun & Beach"
    },
    {
      "name": "Family Friendly"
    },
    {
      "name": "Romantic"
    },
    {
      "name": "City Break"
    },
    {
      "name": "Islands"
    },
    {
      "name": "Honeymoon"
    },
    {
      "name": "Boutique"
    },
    {
      "name": "Food & Wine"
    },
    {
      "name": "Outdoor & Adventure"
    },
    {
      "name": "Group"
    },
    {
      "name": "Bucket List"
    },
    {
      "name": "Spa Break"
    },
    {
      "name": "All-inclusive"
    },
    {
      "name": "LE Faves"
    },
    {
      "name": "Homes & Villas"
    },
    {
      "name": "Dive"
    },
    {
      "name": "Adults-only"
    },
    {
      "name": "Golf"
    },
    {
      "name": "Ultra Lux"
    },
    {
      "name": "Glamping"
    },
    {
      "name": "Cruises"
    },
    {
      "name": "Ski & Snow"
    },
    {
      "name": "Experiences"
    }
  ]
}

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
      <div className={ className }>
        <TextControl
          label="Region"
          value={region}
          onChange={(value) => setAttributes({ region: value })}
        />
        <FormTokenField
          label="Location"
          value={placeIds}
          suggestions={mockLocationData.result.map(location => location.primaryText)}
          onChange={(value) => setAttributes({ placeIds: value })}
        />
        <FormTokenField
          label="Holiday"
          value={holidays}
          suggestions={mockHolidayData.result.map(holiday => holiday.name)}
          onChange={(value) => setAttributes({ holidays: value })}
        />

        <SelectControl
          multiple
          label="Holiday 2"
          value={holidays2}
          options={mockHolidayData.result.map(holiday => ({ label: holiday.name, value: holiday.name }))}
          onChange={(value) => setAttributes({ holidays2: value })}
        />

        <div>
          <label>Holiday</label>
          {mockHolidayData.result.map(holiday => (
            <CheckboxControl
              label={holiday.name}
              checked={holidays3.includes(holiday.name)}
              onChange={(isChecked) => {
                if (isChecked) {
                  // If the checkbox was checked, add the holiday to the selected list
                  setAttributes({ holidays3: [...holidays3, holiday.name] });
                } else {
                  // If the checkbox was unchecked, remove the holiday from the selected list
                  setAttributes({ holidays3: holidays3.filter(h => h !== holiday.name) });
                }
              }}
            />
          ))}
        </div>

      </div>
    );
  },  save ( props ) {
      return null // This block is rendered on PHP. Search renderBlock
  }})