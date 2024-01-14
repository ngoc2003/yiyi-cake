import "dotenv/config";

export default {
  expo: {
    name: "Yiyi cake",
    slug: "yiyi-cake",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/adaptive-icon.png",
    userInterfaceStyle: "light",
    notification: {
      icon: "./assets/adaptive-icon.png",
    },
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
      googleServicesFile: "./google-services.json",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "ac1d3ec6-851a-491c-8e32-7348871905f7",
      },
    },
  },
};
