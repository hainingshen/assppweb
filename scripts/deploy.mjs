import { spawnSync } from 'node:child_process';

const hasApiToken = Boolean(process.env.CLOUDFLARE_API_TOKEN?.trim());

const args = hasApiToken ? ['deploy'] : ['deploy', '--dry-run'];

if (!hasApiToken) {
  console.log('CLOUDFLARE_API_TOKEN is not set; running `wrangler deploy --dry-run` instead of a live deploy.');
}

const result = spawnSync('wrangler', args, { stdio: 'inherit', shell: process.platform === 'win32' });

if (typeof result.status === 'number') {
  process.exit(result.status);
}

process.exit(1);
