module.exports = {
  name: "Industry Ready Expo App Setup",
  slug: "industry-ready-expo-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "dark",
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#0F0F23"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.yourcompany.exponativetabstemplate"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#0F0F23"
    },
    package: "com.yourcompany.industryreadyexpoapp"
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro"
  },
  plugins: [
    "expo-router",
    "expo-font",
    "expo-asset"
  ],
  experiments: {
    typedRoutes: true
  }
};
