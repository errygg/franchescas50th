# Franchesca's Cincuentañera — franchescas50th.com

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)
```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# From this folder, run:
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: franchescas50th
# - Directory: ./
# - Override settings? No

# Once deployed, add your custom domain:
vercel domains add www.franchescas50th.com
vercel domains add franchescas50th.com
```

### Option 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import from GitHub
3. Select the repo → Deploy
4. Go to Settings → Domains → Add `franchescas50th.com` and `www.franchescas50th.com`

## GoDaddy DNS Setup
After adding the domain in Vercel, you'll get DNS records to add in GoDaddy:

1. Log in to GoDaddy → My Products → DNS
2. Add/update these records:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
3. Wait 5-30 minutes for propagation
4. Vercel auto-provisions SSL (https)

## RSVP Form
The form currently uses a `mailto:` link to open the guest's email client
pre-filled with their RSVP info, sent to rsvp@franchescas50th.com.

To upgrade to a proper form submission (no email client needed), you can:
1. Sign up at formspree.io (free tier = 50 submissions/month)
2. Create a form and get your form ID
3. Update the form action in index.html

## Files
- `index.html` — The entire website (single file, no build needed)
- `vercel.json` — Vercel deployment config
- `README.md` — This file
