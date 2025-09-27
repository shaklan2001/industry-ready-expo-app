# Publishing Guide

This guide will help you publish your Expo Native Tabs Template to npm so others can use it.

## 📋 Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **GitHub repository**: Push your code to GitHub
3. **Node.js**: Make sure you have Node.js installed

## 🚀 Publishing Steps

### 1. Update Package Information

Edit `package.json` and update:
- `name`: Make sure it's unique (e.g., `expo-native-tabs-template-yourname`)
- `author`: Your name and email
- `repository.url`: Your GitHub repository URL
- `homepage`: Your GitHub repository URL
- `bugs.url`: Your GitHub issues URL

### 2. Login to npm

```bash
npm login
```

Enter your npm username, password, and email.

### 3. Test the Package Locally

```bash
# Test if the package works
npm pack

# This creates a .tgz file you can test
```

### 4. Publish to npm

```bash
# Publish to npm
npm publish

# For scoped packages (if your package name starts with @)
npm publish --access public
```

### 5. Verify Publication

Visit [npmjs.com](https://www.npmjs.com/) and search for your package name.

## 🔄 Updating the Package

When you make changes:

1. Update the version in `package.json`:
   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

2. Publish the update:
   ```bash
   npm publish
   ```

## 📦 Using the Template

Once published, users can install your template:

```bash
# Using npx
npx create-expo-app@latest MyApp --template expo-native-tabs-template

# Using yarn
yarn create expo-app MyApp --template expo-native-tabs-template
```

## 🎯 Template Structure

Your template should include:
- `package.json` - Package configuration
- `README.md` - Documentation
- `LICENSE` - License file
- `template.config.js` - Expo template configuration
- `src/` - Source code
- `assets/` - Images and icons
- Configuration files (babel.config.js, tsconfig.json, etc.)

## 🔧 Template Configuration

The `template.config.js` file tells Expo how to use your template:

```javascript
module.exports = {
  name: "expo-native-tabs-template",
  slug: "expo-native-tabs-template",
  // ... other config
};
```

## 📝 Best Practices

1. **Keep it simple**: Don't include too many dependencies
2. **Document everything**: Clear README with examples
3. **Test thoroughly**: Test on both iOS and Android
4. **Version properly**: Use semantic versioning
5. **Update regularly**: Keep dependencies up to date

## 🆘 Troubleshooting

### Package name already exists
- Choose a different name
- Use a scoped package: `@yourusername/expo-native-tabs-template`

### Permission denied
- Make sure you're logged in: `npm whoami`
- Check if you own the package name

### Template not found
- Make sure the template is published
- Check the exact package name
- Wait a few minutes for npm to update

## 🎉 Success!

Once published, your template will be available for anyone to use. Share it on:
- GitHub
- Reddit (r/reactnative, r/expo)
- Twitter
- Dev.to
- Medium

Happy publishing! 🚀
