const config = {
  name: "demo-app",
  pushTargets: {
    gtm: "return dataLayer.push({event: eventName, ...data});"
  },
  eventLabel: "event",
  auth: {},
  infos: {
    region: "cn",
    appName: "demo-app",
    appVersion: "1.0.0",
    env: "dev",
  },
  pages: [
    {
      tag: {
        pageName: "home-page"
      },
      name: "home-page",
      id: "/",
      event: "page__view",
      type: "page",
      rules: {
        page: {
          pageName: "{appName}@{appVersion}:{region}-{pageName}[{env}]",
          destination: "return window.location.href;",
        },
        user: {
          userName: "{userName}",
        }
      }
    },
    {
      tag: {
        pageName: "about-page"
      },
      name: "about-page",
      id: "/about",
      event: "page__view",
      type: "page",
      rules: {
        page: {
          pageName: "{appName}@{appVersion}:{region}-{pageName}[{env}]",
          destination: "return window.location.href;",
        },
        user: {
          userName: "{userName}",
        }
      },
      actions: {
        clicks: [
          {
            tag: {
              buttonName: "hello-about"
            },
            type: "click",
            event: "button__click",
            rules: {
              button: {
                message: "{buttonName}-clicked in {pageName}",
              }
            },
            id: "hello-about"
          }
        ]
      }
    },
    {
      tag: {
        pageName: "profile-page"
      },
      name: "profile-page",
      id: "/profile",
      event: "page__view",
      type: "page",
      rules: {
        page: {
          pageName: "{appName}@{appVersion}:{region}-{pageName}[{env}]",
          destination: "return window.location.href;",
        },
        user: {
          userName: "{userName}",
        }
      },
      actions: {
        clicks: [
          {
            tag: {
              buttonName: "login-button"
            },
            type: "click",
            event: "button__click",
            rules: {
              button: {
                message: "{buttonName}-clicked in {pageName}",
              }
            },
            id: "login"
          },
          {
            tag: {
              buttonName: "field-button"
            },
            type: "click",
            event: "button__click",
            dynamicKeys: ['fieldname'],
            rules: {
              button: {
                message: "{buttonName}-{fieldname}-clicked in {pageName}",
              }
            },
            class: "field-button",
          }
        ]
      }
    }
  ]
};


export default config;