import "dotenv/config";

export default {
  expo: {
    name: "Yiyi cake",
    slug: "yiyi-cake",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/adaptive-icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/adaptive-icon.png",
      resizeMode: "contain",
      backgroundColor: "#F8F7F1",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.buithuyngoc2003.yiyicake",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};
