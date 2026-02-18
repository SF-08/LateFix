import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import type { MascotState } from './components/mascot/owlBase';
import {
  useTimeBasedState,
  defaultSchedule,
} from './hooks/useTimeBasedState';
import Btn from './components/packages/btn';

export default function App() {
  const [mascotState, setMascotState] = useState<MascotState>('sleeping');
  const timeBasedState = useTimeBasedState(defaultSchedule);}


