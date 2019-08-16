// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  HOST: {
    COOKIE_LINK: 'http://localhost:3000',
    link: 'http://localhost:3000',
    HOST_LINK: 'http://localhost:3000',
  },
  // HOST: {
  //   COOKIE_LINK: 'https://developertoolapi.herokuapp.com',
  //   link: 'https://developertoolapi.herokuapp.com',
  //   HOST_LINK: 'https://developertoolapi.herokuapp.com',
  // },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
