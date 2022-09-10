// Declare your remote Modules here
// Example declare module 'about/Module';

declare module 'client-one/Module' {
    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    export = import('../../client-one/src/remote-entry')
}