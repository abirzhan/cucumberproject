$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SkyBlueBackground.feature");
formatter.feature({
  "line": 2,
  "name": "Validate the background color will change to sky blue",
  "description": "",
  "id": "validate-the-background-color-will-change-to-sky-blue",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ChangeBackground"
    }
  ]
});
formatter.before({
  "duration": 3730016100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.Set_SkyBlue_Background_button_exist()"
});
formatter.result({
  "duration": 2946703400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Sky Blue Background",
  "description": "",
  "id": "validate-the-background-color-will-change-to-sky-blue;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click on \"Set SkyBlue Background\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 15
    }
  ],
  "location": "StepsDefinitions.user_click_on(String)"
});
formatter.result({
  "duration": 406049600,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.StepsDefinitions.user_click_on(StepsDefinitions.java:42)\r\n\tat ✽.When User click on \"Set SkyBlue Background\" button(features/SkyBlueBackground.feature:10)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "StepsDefinitions.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "status": "skipped"
});
});