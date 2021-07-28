# Luxury Escapes Wordpress Plugin

This plugin allows us to:
1. Add a new "LE Offers" content block to a post
2. Enter a Google placeId in that block (eg. `ChIJoQ8Q6NNB0S0RkOYkS7EPkSQ` is the ID for Bali)
3. Display a list of LE offers in that Place ID in the user-facing site

## Installation

Gutenberg Examples are distributed as WordPress plugin.

1. [Download a pre-built zip archive of the latest release](https://github.com/WordPress/gutenberg-examples/releases).
   > Do not download from the "Clone or download" GitHub button, as this includes the source material only. Read the [Development](#development) instructions below if you’re interested in building your own copy of the plugin.
2. Navigate to the __Plugins > Add new__ screen in your WordPress administrative dashboard.
3. Click __Add New__ at the top of the page.
3. Click __Upload Plugin__ at the top of the page.
4. Click __Choose File__, then find and __Upload__ the downloaded zip file.
5. After the plugin finishes installing, click __Activate__.
6. You’re done!

## Development

You can run a Wordpress instance using Docker Compose:

```
docker-compose up -d
```

Visit http://localhost:9999

To stop:

```
docker-compose stop
```

Visit http://localhost:9999/wp-admin/plugins.php and activate `luxury-escapes-plugin`. The docker-compose.yml file has mapped this folder to the docker container, so as you change files in this folder, they'll be reflected live in your site.

To install the node packages
```
yarn install
```

To build the production version of the plugin
```
yarn build
```

To build a development version, change to the local directory of the block you are working on, and run `yarn start` to watch for changes and automatically rebuild as you develop.

```
cd le-offers/
npm start
```

To install the plugin, or upload a new version:
1. Ensure you've built your latest scripts first with yarn build!
2. Ensure you've git-committed your latest changes (only committed changes are included in the zip)
2. run `yarn zip` to create a zip file of this plugin
3. visit the wordpress plugins page, click "upload plugin", and upload the zip file.
4. If it complains about the plugin not having a valid header, just visit https://dream.luxuryescapes.com/wp-admin/plugins.php and activate it from there.
