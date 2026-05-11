#!/bin/bash

# Deployment script for Sunny Liu's personal website

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes."
    read -p "Do you want to continue? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Run tests
echo "🧪 Running tests..."
npm run lint
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

# Commit changes
echo "📦 Committing changes..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
if command -v vercel &> /dev/null; then
    vercel --prod
else
    echo "⚠️  Vercel CLI not found. Please install it with: npm i -g vercel"
    echo "   Or deploy manually from the Vercel dashboard."
fi

echo "✅ Deployment complete!"
echo "   Your site should be live shortly."
echo "   Check status at: https://vercel.com"