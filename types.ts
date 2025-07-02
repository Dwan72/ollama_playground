/*
important values
    "passPercent": 60
    "start": "2025-05-16T18:37:44.706Z",
    "end": "2025-05-16T18:39:16.757Z",
    "skipped": 1,
    "results": [

       {

          #only grab main uuid upon login 
          "uuid": "58b806cc-1184-4f9e-a254-1e746202b516",
          "fullFile": "src/integration/e2e-cypress/tests/calling/ds/users/fs-call-waiting_spec.ts",
          "suites": [
            "suites": [
                "title": "should select a user and open user profile page",
                "pass": true,
                "fail": false,
               
               # if pass is false, get more context
               "code": "_utils_test_utils__WEBPACK_IMPORTED_MODULE_10__[\"TestUtils\"].waitForSpinnerToFinish();\n_utils_test_utils__WEBPACK_IMPORTED_MODULE_10__[\"TestUtils\"].scrollIntoViewByElement(_pages_calling_call_settings_call_handling_page__WEBPACK_IMPORTED_MODULE_0__[\"callHandling\"].callWaiting.toggle);\n_utils_test_utils__WEBPACK_IMPORTED_MODULE_10__[\"TestUtils\"].expectElementIsUnchecked(_pages_calling_call_settings_call_handling_page__WEBPACK_IMPORTED_MODULE_0__[\"callHandling\"].callWaiting.toggleInput);\n_utils_test_utils__WEBPACK_IMPORTED_MODULE_10__[\"TestUtils\"].clickWhenVisible(_pages_calling_call_settings_call_handling_page__WEBPACK_IMPORTED_MODULE_0__[\"callHandling\"].callWaiting.toggle);\n_utils_advanced_features_call_handling_utils__WEBPACK_IMPORTED_MODULE_6__[\"CallHandlingUtils\"].verifySave();\n_utils_test_utils__WEBPACK_IMPORTED_MODULE_10__[\"TestUtils\"].expectElementIsChecked(_pages_calling_call_settings_call_handling_page__WEBPACK_IMPORTED_MODULE_0__[\"callHandling\"].callWaiting.toggleInput);",
               "err": {
                 "message": "AssertionError: Timed out retrying after 60000ms: Expected to find element: `.md-alert`, but never found it.",
                 "estack": "AssertionError: Timed out retrying after 60000ms: Expected to find element: `.md-alert`, but never found it.\n    at ./src/integration/e2e-cypress/utils/notifications.utils.ts.NotificationUtils.expandNotifications (webpack:///./src/integration/e2e-cypress/utils/notifications.utils.ts:132:0)\n    at assertToastSuccess (webpack:///./src/integration/e2e-cypress/utils/notifications.utils.ts:19:0)\n    at ./src/integration/e2e-cypress/utils/notifications.utils.ts.NotificationUtils.assertToastSuccess (webpack:///./src/integration/e2e-cypress/utils/notifications.utils.ts:63:0)\n    at TestUtils.clickAndVerifyToast (webpack:///./src/integration/e2e-cypress/utils/test.utils.ts:79:25)\n    at CallHandlingUtils.verifySave (webpack:///./src/integration/e2e-cypress/utils/advanced-features/call-handling.utils.ts:81:17)\n    at Context.eval (webpack:///./src/integration/e2e-cypress/tests/calling/ds/users/fs-call-waiting_spec.ts:73:29)",
                 "diff": null
               },

            ]

          ]
       } 
    ]
*/
export interface TestReport {
  stats: {
    start: string;
    end: string;
    passPercent: number | null;
    skipped: number;
  };
  results: TestResult[];
}

export interface TestResult {
  uuid: string;
  title: string;
  fullFile: string;
  tests: Test[];
  suites: TestSuite[];
}

export interface TestSuite extends TestResult {}

export interface Test {
  title: string;
  fullTitle: string;
  pass: boolean;
  fail: boolean;
  code: string;
  err: {
    message?: string;
    estack?: string;
    diff?: any;
  };
  skipped: boolean;
}
