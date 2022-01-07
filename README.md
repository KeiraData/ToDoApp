<h1>Basic example of mobile app (To Do app)</h1>

This repository shows how to built a basic example of a mobile app using React Native and Redux.

# Prerequisites to setup the development environment

The project was built in a Mac system and for Android devices. For this is needed the following:

> [Here can be found a more detailed explanation in the official documentation](https://reactnative.dev/docs/environment-setup)

**Note:** In the get started page of the official documentation is instaled globally the react-native-cli using npm. But now is better to simply use the npx command (i.e. `npx react-native init <Project Name>`).

- Nodejs
- Watchman
- adoptopenjdk/openjdk/adoptopenjdk8
- Android Studio (for the virtual devices)
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device
  - Setup of the environment variables

**PD:** For a build for iOS devices are needed some other requirements.

# How to run the application?

For get the app running follow this steps:

1. Open Android Studio.
2. Open the AVD Manager (and crete a new device if there not any) and run any device.
   1. Also is possible to use a real device connecting this to the computer using a USB cable. You need to enable the development options in your device.
3. Run `npx react-native start` to get Metro started.
4. Run `npx react-native run-android`to start the app in the device.