import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <NativeTabs iconColor="#d68dfa" tintColor="#d68dfa">
      <NativeTabs.Trigger name="index">
        {Platform.OS === 'ios' ? (
          <NativeTabs.Trigger.Icon
            sf={{ default: 'house', selected: 'house.fill' }}
          />
        ) : (
          <NativeTabs.Trigger.Icon
            src={
              <NativeTabs.Trigger.VectorIcon
                family={MaterialIcons}
                name="home"
              />
            }
          />
        )}
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        {Platform.OS === 'ios' ? (
          <NativeTabs.Trigger.Icon sf={{ default: 'gear', selected: 'gear' }} />
        ) : (
          <NativeTabs.Trigger.Icon
            src={
              <NativeTabs.Trigger.VectorIcon
                family={MaterialIcons}
                name="settings"
              />
            }
          />
        )}
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
