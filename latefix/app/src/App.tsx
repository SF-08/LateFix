import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import type { MascotState } from './components/mascot/owlBase';
import OwlBase from './components/mascot/owlBase';
import {
  useTimeBasedState,
  defaultSchedule,
} from './hooks/useTimeBasedState';
import Btn from './components/packages/btn';

export default function App() {
  const [mascotState, setMascotState] = useState<MascotState>('alert');
  const timeBasedState = useTimeBasedState(defaultSchedule);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <OwlBase state={mascotState} size={200} />
    </View>
  );
}


