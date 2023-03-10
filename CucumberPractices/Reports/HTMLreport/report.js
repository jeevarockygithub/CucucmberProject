$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TagsDemo.feature");
formatter.feature({
  "name": "Using of tags in cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "name": "Scenario1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "This is scenario1",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario1()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "name": "This is scenario2",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario2()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    },
    {
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "name": "This is scenario3",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario3()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario4",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.step({
  "name": "This is scenario4",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario4()"
});
formatter.result({
  "status": "passed"
});
});