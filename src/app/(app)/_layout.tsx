import {
  NativeTabs,
  Icon,
  Label,
  VectorIcon,
} from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <NativeTabs iconColor="#d68dfa" tintColor="#d68dfa">
      <NativeTabs.Trigger name="index">
        {Platform.OS === 'ios' ? (
          <Icon sf={{ default: 'house', selected: 'house.fill' }} />
        ) : (
          <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />
        )}
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        {Platform.OS === 'ios' ? (
          <Icon sf={{ default: 'gear', selected: 'gear' }} />
        ) : (
          <Icon src={<VectorIcon family={MaterialIcons} name="settings" />} />
        )}
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
