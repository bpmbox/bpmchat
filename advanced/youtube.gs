/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// [START apps_script_youtube_search]
/**
 * Searches for videos about dogs, then logs the video IDs and title.
 * Note that this sample limits the results to 25. To return more
 * results, pass additional parameters as shown in the YouTube Data API docs.
 * @see https://developers.google.com/youtube/v3/docs/search/list
 */
function searchByKeyword() {
  var results = YouTube.Search.list('id,snippet', {
    q: 'dogs',
    maxResults: 25
  });

  results.items.forEach(function(item) {
    Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
  });
}
// [END apps_script_youtube_search]

// [START apps_script_youtube_uploads]
/**
 * This function retrieves the user's uploaded videos by:
 * 1. Fetching the user's channel's.
 * 2. Fetching the user's "uploads" playlist.
 * 3. Iterating through this playlist and logs the video IDs and titles.
 * 4. If there is a next page of resuts, fetching it and returns to step 3.
 */
function retrieveMyUploads() {
  var results = YouTube.Channels.list('contentDetails', {
    mine: true
  });

  for (var i = 0; i < results.items.length; i++) {
    var item = results.items[i];
    // Get the channel ID - it's nested in contentDetails, as described in the
    // Channel resource: https://developers.google.com/youtube/v3/docs/channels
    var playlistId = item.contentDetails.relatedPlaylists.uploads;
    var nextPageToken;
    while (nextPageToken !== null) {
      var playlistResponse = YouTube.PlaylistItems.list('snippet', {
        playlistId: playlistId,
        maxResults: 25,
        pageToken: nextPageToken
      });

      for (var j = 0; j < playlistResponse.items.length; j++) {
        var playlistItem = playlistResponse.items[j];
        Logger.log('[%s] Title: %s',
            playlistItem.snippet.resourceId.videoId,
            playlistItem.snippet.title);
      }
      nextPageToken = playlistResponse.nextPageToken;
    }
  }
}
// [END apps_script_youtube_uploads]

// [START apps_script_youtube_subscription]
/**
 * This sample subscribes the user to the Google Developers channel on YouTube.
 */
function addSubscription() {
  // Replace this channel ID with the channel ID you want to subscribe to
  var channelId = 'UC9gFih9rw0zNCK3ZtoKQQyA';
  var resource = {
    snippet: {
      resourceId: {
        kind: 'youtube#channel',
        channelId: channelId
      }
    }
  };

  try {
    var response = YouTube.Subscriptions.insert(resource, 'snippet');
    Logger.log(response);
  } catch (e) {
    if (e.message.match('subscriptionDuplicate')) {
      Logger.log('Cannot subscribe; already subscribed to channel: ' +
          channelId);
    } else {
      Logger.log('Error adding subscription: ' + e.message);
    }
  }
}
// [END apps_script_youtube_subscription]

// [START apps_script_youtube_slides]
/**
 * Creates a slide presentation with 10 videos from the YouTube search `YOUTUBE_QUERY`.
 * The YouTube Advanced Service must be enabled before using this sample.
 */
var PRESENTATION_TITLE = 'San Francisco, CA';
var YOUTUBE_QUERY = 'San Francisco, CA';

/**
 * Gets a list of YouTube videos.
 * @param {String} query - The query term to search for.
 * @return {object[]} A list of objects with YouTube video data.
 * @ref https://developers.google.com/youtube/v3/docs/search/list
 */
function getYouTubeVideosJSON(query) {
  var youTubeResults = YouTube.Search.list('id,snippet', {
    q: query,
    type: 'video',
    maxResults: 10
  });

  return youTubeResults.items.map(function(item) {
    return {
      url: 'https://youtu.be/' + item.id.videoId,
      title: item.snippet.title,
      thumbnailUrl: item.snippet.thumbnails.high.url
    };
  });
}

/**
 * Creates a presentation where each slide features a YouTube video.
 * Logs out the URL of the presentation.
 */
function createSlides() {
  var youTubeVideos = getYouTubeVideosJSON(YOUTUBE_QUERY);
  var presentation = SlidesApp.create(PRESENTATION_TITLE);
  presentation.getSlides()[0].getPageElements()[0].asShape()
      .getText().setText(PRESENTATION_TITLE);

  // Add slides with videos and log the presentation URL to the user.
  youTubeVideos.forEach(function(video) {
    var slide = presentation.appendSlide();
    slide.insertVideo(video.url,
        0, 0, presentation.getPageWidth(), presentation.getPageHeight());
  });
  Logger.log(presentation.getUrl());
}
// [END apps_script_youtube_slides]
