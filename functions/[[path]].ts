import type { ServerBuild } from '@remix-run/cloudflare';
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

// @ts-ignore because the server build file is generated by `remix vite:build`
import * as serverBuild from '../build/server';

const handler = createPagesFunctionHandler({
  build: serverBuild as unknown as ServerBuild,
});

export default {
  fetch: handler,
};
