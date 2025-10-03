#!/bin/bash

# Novig Graphic Generator - Automated Deployment Script
# This script will push to GitHub and deploy to Vercel

set -e  # Exit on error

echo "🚀 Novig Graphic Generator - Deployment Script"
echo "=============================================="
echo ""

# Check if GitHub CLI is authenticated
if ! gh auth status &>/dev/null; then
    echo "📝 GitHub authentication required..."
    echo "Please authenticate with GitHub:"
    gh auth login
fi

# Create and push to GitHub
echo ""
echo "📦 Creating GitHub repository..."
if ! git remote get-url origin &>/dev/null; then
    gh repo create novig-graphic-generator \
        --public \
        --source=. \
        --remote=origin \
        --push \
        --description="Production-ready betting market graphic generator for Novig - Create branded social media graphics with ticket-style design"
else
    echo "✅ GitHub remote already exists, pushing..."
    git push -u origin master
fi

echo ""
echo "✅ GitHub repository created and pushed!"
echo "   Repository: $(gh repo view --json url -q .url)"

# Check if Vercel CLI is authenticated
echo ""
echo "🔐 Checking Vercel authentication..."
if ! vercel whoami &>/dev/null; then
    echo "Please authenticate with Vercel:"
    vercel login
fi

# Deploy to Vercel
echo ""
echo "🚀 Deploying to Vercel..."
vercel --prod --yes

echo ""
echo "=============================================="
echo "✅ DEPLOYMENT COMPLETE!"
echo ""
echo "📍 Your sites:"
echo "   GitHub: $(gh repo view --json url -q .url)"
echo "   Vercel: Check your Vercel dashboard"
echo ""
echo "🎉 Novig Graphic Generator is now live!"
