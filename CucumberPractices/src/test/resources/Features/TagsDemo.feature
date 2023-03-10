@All
Feature: Using of tags in cucumber

@SmokeTest
Scenario: Scenario1
Given This is scenario1

@SmokeTest @SanityTest
Scenario: Scenario2
Given This is scenario2

@SanityTest
Scenario: Scenario3
Given This is scenario3

Scenario: Scenario4
Given This is scenario4
