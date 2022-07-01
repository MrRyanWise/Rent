# Rent

Projet actuel 


1) Set up environment for react native
in the browser : react native environment setup
Chocolaty executive (desktop) software independency
download android studio

2)Installing Expo Cli 
npm install --global expo-cli

expo init rent
blank
cd rent 
expo start

3) Création of an account in AWS(Amazon Web Services)

Access key ID :    Your_Access key ID
Secret Access Key :  Your_Secret Access Key
 
Aws cli download
click on the windows link and run and install it
aws amplify install 
copy and paste in vs code terminal : npm install -g @aws-amplify/cli

4) Set up amplify and create IAM user
in the terminal (command prompt)
paste : amplify configure

5) Code

6) add dependencies in packages 
yarn add @react-navigation/native
or 
expo install @react-navigation/native

7) We are going to use React Container
Create stack navigator :
 expo install @react-navigation/stack

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

If you have a problem with your View component add :
expo install react-native-safe-area-view react-native-safe-area-context

or

expo install react-native-gesture-handler

