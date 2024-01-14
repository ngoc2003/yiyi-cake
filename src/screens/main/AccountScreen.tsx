import React from "react";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Button from "../../components/common/button";
import MainLayout from "../../layouts/MainLayout";

const AccountScreen = () => {
  const { signOut } = useFirebaseAuth();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleLogout = async () => {
    await signOut();
    navigation.navigate("Onboarding2");
  };

  return (
    <MainLayout>
      <Button isActive onPress={handleLogout}>
        Logout
      </Button>
    </MainLayout>
  );
};

export default AccountScreen;
