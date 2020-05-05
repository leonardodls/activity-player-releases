var consumerConfig = {
  "renderers": {
    "overrides": [
      {
        "type": "activity",
        "model": "bank",
        "override": "test-player"
      },
      {
        "type": "item",
        "model": "spreadsheet-question",
        "override": "spreadsheet-question-player"
      },
      {
        "type": "item",
        "model": "spreadsheet-presentation",
        "override": "spreadsheet-presentation-player"
      }
    ],
    "modules": {
      "test-player": {
        "baseURL": "https://leonardodls.github.io/activity-player-releases/multi-item-activity-player/",
        "version": "0.0.28",
        "js": "multiItemActivityPlayer",
        "css": "multiItemActivityPlayer"
      },
      "spreadsheet-question-player": {
        "baseURL": "https://leonardodls.github.io/activity-player-releases/leonardo-item-player/",
        "version": "0.7.6",
        "js": "libs-spr-question-item-player.min",
        "css": "libs-spr-question-item-player.min",
        "dependencies": ["jquery"]
      },
      "spreadsheet-presentation-player": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/spreadsheet-presentation-player/releases/",
        "version": "0.7.5",
        "js": "0.7.5/libs-spr-presentation-item-player.min",
        "css": "0.7.5/libs-spr-presentation-item-player.min"
      },
      "jquery": {
        "js": "https://sdk-qa.s3.us-east-2.amazonaws.com/modules/jquery/releases/3.1.1/jquery-3.1.1"
      }
    }
  }
}
