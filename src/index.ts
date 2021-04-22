import { LoadContext, Plugin } from '@docusaurus/types';
import logger from 'js-logger';
import { Sync } from 'snipsync/src/Sync';

export default function pluginSnipsync(_ctx: LoadContext, opts: any): Plugin<void> {
  return {
    name: 'docusaurus-plugin-snipsync',
    async loadContent() {
      const synctron = new Sync(opts, logger);
      await synctron.run();
    },
  };
}
